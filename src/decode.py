"""Statically unwrap Python data codecs and compression; never execute input."""
import argparse
import ast
import base64
import binascii
import bz2
import codecs
import gzip
import lzma
import operator
from dataclasses import dataclass
from pathlib import Path
import sys
import zlib

MAX_BYTES = 16 * 1024 * 1024
MAX_LAYERS = 32
MODULES = {'base64', 'binascii', 'codecs', 'gzip', 'bz2', 'zlib', 'lzma'}
HEADER = b'# Decoded by decode_action\n'


class Unsupported(ValueError):
    """An expression is outside the static decoder's supported subset."""


def checked(value):
    if isinstance(value, (str, bytes)) and len(value) > MAX_BYTES:
        raise Unsupported('解码结果超过 16 MiB 上限')
    return value


def decompress_bytes(data, kind, wbits=None):
    """Bound output allocation, including concatenated compression members."""
    if not isinstance(data, bytes):
        raise Unsupported('压缩输入必须是 bytes')
    output = bytearray()
    remaining = data
    for _ in range(MAX_LAYERS):
        if kind in ('gzip', 'zlib'):
            decoder = zlib.decompressobj(31 if kind == 'gzip' else (15 if wbits is None else wbits))
        elif kind == 'bz2':
            decoder = bz2.BZ2Decompressor()
        else:
            decoder = lzma.LZMADecompressor(memlimit=64 * 1024 * 1024)
        chunk = decoder.decompress(remaining, MAX_BYTES - len(output) + 1)
        output.extend(chunk)
        if len(output) > MAX_BYTES:
            raise Unsupported('解压结果超过 16 MiB 上限')
        if not decoder.eof:
            raise Unsupported('压缩流不完整或解压结果超过大小上限')
        remaining = decoder.unused_data
        if not remaining:
            return bytes(output)
    raise Unsupported('压缩成员数量超过上限')


def peel_compression(data, steps):
    """Recognize compression magic; do not guess Base64 from plaintext."""
    for _ in range(MAX_LAYERS):
        if not isinstance(data, bytes):
            break
        if data.startswith(b'\x1f\x8b'):
            kind = 'gzip'
        elif data.startswith(b'BZh'):
            kind = 'bz2'
        elif data.startswith(b'\xfd7zXZ\x00'):
            kind = 'lzma'
        elif len(data) >= 2 and data[0] & 15 == 8 and (data[0] * 256 + data[1]) % 31 == 0:
            kind = 'zlib'
        else:
            break
        try:
            data = decompress_bytes(data, kind)
        except (ValueError, OSError, EOFError, zlib.error, lzma.LZMAError):
            break
        steps.append(kind)
    return data


@dataclass(frozen=True)
class ImportedName:
    name: str


UNBOUND = object()


class StaticDecoder:
    def __init__(self):
        self.bindings = {}
        self.steps = []
        self.operations = 0

    def binding(self, name, local):
        if name in local:
            return local[name]
        return self.bindings.get(name, UNBOUND)

    def qualified_name(self, node, local):
        if isinstance(node, ast.Name):
            binding = self.binding(node.id, local)
            if isinstance(binding, ImportedName):
                return binding.name
            return node.id if binding is UNBOUND else ''
        if isinstance(node, ast.Attribute):
            parent = self.qualified_name(node.value, local)
            return f'{parent}.{node.attr}' if parent else ''
        if (
            isinstance(node, ast.Call)
            and self.qualified_name(node.func, local) == '__import__'
            and len(node.args) == 1 and not node.keywords
            and isinstance(node.args[0], ast.Constant)
            and isinstance(node.args[0].value, str)
            and node.args[0].value in MODULES
        ):
            return node.args[0].value  # Recognize a module name without importing input code.
        return ''

    def expression(self, node, depth=0, local=None):
        self.operations += 1
        if depth > 64 or self.operations > 2_000_000:
            raise Unsupported('静态表达式复杂度超过上限')
        if local is None:
            local = {}

        def evaluate(item):
            return self.expression(item, depth + 1, local)

        if isinstance(node, ast.Constant) and isinstance(node.value, (str, bytes, int, type(None))):
            return checked(node.value)
        if isinstance(node, ast.Name):
            binding = self.binding(node.id, local)
            if binding is not UNBOUND and not isinstance(binding, (ImportedName, ast.Lambda)):
                return binding
        if isinstance(node, ast.UnaryOp) and isinstance(node.op, ast.USub):
            value = evaluate(node.operand)
            if type(value) is int:
                return -value
        if isinstance(node, ast.BinOp):
            left, right = evaluate(node.left), evaluate(node.right)
            if isinstance(node.op, ast.Add) and isinstance(left, (str, bytes)) and type(left) is type(right):
                return checked(left + right)
            operations = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul,
                          ast.Mod: operator.mod, ast.BitAnd: operator.and_, ast.BitOr: operator.or_,
                          ast.BitXor: operator.xor, ast.LShift: operator.lshift, ast.RShift: operator.rshift}
            if type(left) is int and type(right) is int and type(node.op) in operations:
                if abs(left) > 2**63 or abs(right) > 2**63 or (isinstance(node.op, (ast.LShift, ast.RShift)) and not 0 <= right <= 64):
                    raise Unsupported('整数运算超过大小上限')
                value = operations[type(node.op)](left, right)
                if abs(value) > 2**63:
                    raise Unsupported('整数运算超过大小上限')
                return value
        if isinstance(node, ast.GeneratorExp):
            if len(node.generators) != 1 or node.generators[0].ifs or node.generators[0].is_async:
                raise Unsupported('仅支持单层无条件静态字符映射')
            clause = node.generators[0]
            items = evaluate(clause.iter)
            if not isinstance(items, (bytes, str, list, tuple, zip)):
                raise Unsupported('字符映射输入不是静态序列')
            targets = clause.target.elts if isinstance(clause.target, ast.Tuple) else [clause.target]
            if not all(isinstance(target, ast.Name) for target in targets):
                raise Unsupported('不支持的字符映射变量')
            scope = local.copy()
            result, total = [], 0
            for index, item in enumerate(items):
                if index >= 1_000_000:
                    raise Unsupported('字符映射次数超过上限')
                values = item if isinstance(clause.target, ast.Tuple) else [item]
                if len(values) != len(targets):
                    raise Unsupported('字符映射解构数量不匹配')
                scope.update((target.id, value) for target, value in zip(targets, values))
                value = self.expression(node.elt, depth + 1, scope)
                if not isinstance(value, (str, bytes)):
                    raise Unsupported('字符映射必须返回文本')
                total += len(value)
                if total > MAX_BYTES:
                    raise Unsupported('字符映射结果超过上限')
                result.append(value)
            return result
        if isinstance(node, ast.Subscript) and isinstance(node.slice, ast.Slice):
            value = evaluate(node.value)
            bounds = [evaluate(item) if item else None for item in
                      (node.slice.lower, node.slice.upper, node.slice.step)]
            if isinstance(value, (str, bytes)) and all(item is None or type(item) is int for item in bounds):
                return checked(value[slice(*bounds)])
        if not isinstance(node, ast.Call):
            raise Unsupported('存在无法静态求值的表达式')
        if any(keyword.arg is None for keyword in node.keywords):
            raise Unsupported('不展开动态关键字参数')
        is_named = isinstance(node.func, ast.Name)
        function = self.binding(node.func.id, local) if is_named else node.func
        if isinstance(function, ast.Lambda):
            # A named wrapper sees module bindings. An inline lambda can also
            # refer to its surrounding parameters or generator variables.
            params = function.args
            if (
                len(params.args) != 1 or params.posonlyargs or params.kwonlyargs
                or params.vararg or params.kwarg or params.defaults
                or node.keywords or len(node.args) != 1
            ):
                raise Unsupported('仅支持单参数静态 lambda 包装')
            scope = {} if is_named else local.copy()
            scope[params.args[0].arg] = evaluate(node.args[0])
            return self.expression(function.body, depth + 1, scope)
        args = [evaluate(argument) for argument in node.args]
        kwargs = {keyword.arg: evaluate(keyword.value) for keyword in node.keywords}
        name = self.qualified_name(node.func, local)
        result = None
        if name == 'compile' and len(args) == 3 and args[2] == 'exec' and not kwargs:
            return args[0]  # Do not create or execute a code object.
        if name in ('chr', 'ord') and len(args) == 1 and not kwargs:
            result = chr(args[0]) if name == 'chr' else ord(args[0])
        elif name == 'zip' and 1 <= len(args) <= 4 and not kwargs and all(isinstance(arg, (str, bytes, tuple, list)) for arg in args):
            return zip(*args)
        elif isinstance(node.func, ast.Attribute) and node.func.attr == 'join' and len(args) == 1 and not kwargs:
            separator = evaluate(node.func.value)
            if not isinstance(separator, (str, bytes)) or not isinstance(args[0], list):
                raise Unsupported('仅支持静态字符列表拼接')
            if sum(len(part) + len(separator) for part in args[0]) > MAX_BYTES:
                raise Unsupported('字符拼接结果超过上限')
            result = separator.join(args[0])
            name = 'static-character-map'
        elif name in ('base64.b64decode', 'base64.urlsafe_b64decode') and len(args) == 1 and not kwargs:
            value = args[0].encode('ascii') if isinstance(args[0], str) else args[0]
            if not isinstance(value, bytes):
                raise Unsupported('Base64 参数不是字节串或字符串')
            value = b''.join(value.split())
            value += b'=' * (-len(value) % 4)
            result = base64.b64decode(value, altchars=b'-_', validate=True)
        elif name in ('base64.b32decode', 'base64.b16decode', 'base64.b85decode', 'base64.a85decode') and len(args) == 1 and not kwargs:
            result = getattr(base64, name.split('.')[1])(args[0])
        elif name in ('binascii.unhexlify', 'bytes.fromhex') and len(args) == 1 and not kwargs:
            result = binascii.unhexlify(args[0]) if name.startswith('binascii') else bytes.fromhex(args[0])
        elif name == 'codecs.decode' and len(args) == 2 and not kwargs and args[1] in ('rot13', 'rot_13', 'hex', 'hex_codec', 'base64', 'base64_codec'):
            result = codecs.decode(*args)
        elif name in ('gzip.decompress', 'bz2.decompress', 'lzma.decompress') and len(args) == 1 and not kwargs:
            result = decompress_bytes(args[0], name.split('.')[0])
        elif name == 'zlib.decompress' and 1 <= len(args) <= 2 and not kwargs:
            result = decompress_bytes(args[0], 'zlib', args[1] if len(args) == 2 else None)
        elif isinstance(node.func, ast.Attribute) and node.func.attr in ('encode', 'decode') and not kwargs and len(args) <= 1:
            value = evaluate(node.func.value)
            encoding = args[0] if args else 'utf-8'
            if encoding not in ('utf-8', 'utf8', 'ascii', 'latin-1', 'latin1'):
                raise Unsupported('不支持该文本编码')
            if node.func.attr == 'encode' and isinstance(value, str):
                result = value.encode(encoding)
            elif node.func.attr == 'decode' and isinstance(value, bytes):
                result = value.decode(encoding)
        if result is None:
            raise Unsupported(f'未支持的静态调用: {name or type(node.func).__name__}')
        if name not in ('chr', 'ord'):
            self.steps.append(name or node.func.attr)
        return checked(result)

    def unwrap(self, source):
        tree = ast.parse(source)
        statements = tree.body
        if ast.get_docstring(tree, clean=False) is not None:
            statements = statements[1:]
        if len(statements) == 1 and isinstance(statements[0], ast.Try):
            wrapper = statements[0]
            if not wrapper.orelse and not wrapper.finalbody:
                # Inspect the body of a simple error-handling wrapper.
                statements = wrapper.body
        for index, statement in enumerate(statements):
            if isinstance(statement, ast.Import):
                for item in statement.names:
                    if item.name not in MODULES:
                        raise Unsupported('包装引用了未知模块')
                    self.bindings[item.asname or item.name] = ImportedName(item.name)
            elif isinstance(statement, ast.ImportFrom) and statement.module in MODULES and not statement.level:
                for item in statement.names:
                    if item.name == '*':
                        raise Unsupported('不解析星号导入')
                    self.bindings[item.asname or item.name] = ImportedName(f'{statement.module}.{item.name}')
            elif (
                isinstance(statement, ast.Assign) and len(statement.targets) == 1
                and isinstance(statement.targets[0], ast.Name)
            ):
                value = statement.value
                self.bindings[statement.targets[0].id] = (
                    value if isinstance(value, ast.Lambda) else self.expression(value)
                )
            elif isinstance(statement, ast.Expr) and isinstance(statement.value, ast.Call):
                call = statement.value
                if (
                    self.qualified_name(call.func, {}) == 'exec'
                    and len(call.args) == 1 and not call.keywords
                    and index == len(statements) - 1
                ):
                    value = self.expression(call.args[0])
                    if not isinstance(value, (str, bytes)):
                        raise Unsupported('包装结果不是源码文本或字节串')
                    return peel_compression(value, self.steps)
                raise Unsupported('不是以单一 exec 结尾的数据包装')
            else:
                raise Unsupported('不是单一 exec 数据包装，保留整个脚本')
        return None


def decode_source(source):
    current = checked(source)
    seen = set()
    steps = []
    decoder = StaticDecoder()
    for _ in range(MAX_LAYERS):
        raw = current.encode('utf-8') if isinstance(current, str) else current
        if raw in seen:
            break
        seen.add(raw)
        step_start = len(decoder.steps)
        try:
            result = decoder.unwrap(current)
        except (ValueError, TypeError, ArithmeticError, SyntaxError, UnicodeError, OSError, EOFError, RecursionError, zlib.error, lzma.LZMAError) as error:
            if 'exec' in str(current) or decoder.steps:
                print(f'保留当前内容: {error}')
            break
        if result is None or result == current:
            break
        current = result
        steps.extend(decoder.steps[step_start:] or ['literal'])
    return (current.encode('utf-8') if isinstance(current, str) else current), steps


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('-i', '--input', default='input.py')
    parser.add_argument('-o', '--output', default='output.py')
    options = parser.parse_args()
    try:
        source = Path(options.input).read_bytes()
        result, steps = decode_source(source)
        # Preserve the input exactly when no wrapper was recognized.
        Path(options.output).write_bytes(HEADER + result if steps else result)
    except (OSError, ValueError) as error:
        print(f'Python 解码失败: {error}', file=sys.stderr)
        return 1
    print('解码链: ' + (' → '.join(steps) if steps else '未识别包装，保留原文'))
    print(f'已写入 {options.output} ({len(result)} bytes)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
