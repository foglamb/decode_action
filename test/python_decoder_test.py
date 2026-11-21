"""Exercise the decoder CLI; never run the supplied payloads."""
import base64
import bz2
import codecs
import gzip
import lzma
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
import zlib

DECODER = Path(__file__).resolve().parents[1] / 'src' / 'decode.py'


class PythonDecoderTests(unittest.TestCase):
    def decode(self, source):
        with tempfile.TemporaryDirectory(prefix='decode-python-') as temp:
            directory = Path(temp)
            (directory / 'input.py').write_text(source, encoding='utf-8')
            result = subprocess.run(
                [sys.executable, str(DECODER)], cwd=directory,
                capture_output=True, text=True, timeout=15,
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            output = (directory / 'output.py').read_bytes()
            if output.startswith(b'# Decoded by decode_action\n'):
                output = output.split(b'\n', 1)[1]
            return output, result.stdout

    def test_four_nested_compression_formats(self):
        expected = b'print("four layers")\n'
        payload = gzip.compress(bz2.compress(lzma.compress(zlib.compress(expected))))
        wrapper = (
            'import base64, gzip, bz2, lzma, zlib\n'
            'exec((lambda code: compile(code, "<string>", "exec"))('
            f'zlib.decompress(lzma.decompress(bz2.decompress(gzip.decompress('
            f'base64.b64decode({base64.b64encode(payload)!r})))))))\n'
        )
        self.assertEqual(self.decode(wrapper)[0], expected)

    def test_plaintext_that_looks_like_base64_is_not_decoded_twice(self):
        for expected in (b'pass', b'test', b'None'):
            with self.subTest(expected=expected):
                source = f'exec(base64.b64decode({base64.b64encode(expected)!r}))'
                self.assertEqual(self.decode(source)[0], expected)

    def test_nested_script_wrapper(self):
        expected = b'print("nested script")\n'
        inner = f'import base64\nexec(base64.b64decode({base64.b64encode(expected)!r}))'
        outer = f'exec(base64.b64decode({base64.b64encode(inner.encode())!r}))'
        self.assertEqual(self.decode(outer)[0], expected)

    def test_import_alias_and_bytes_literal(self):
        expected = b'print("alias")'
        source = (
            'from base64 import b64decode as decode\n'
            f'exec(decode({base64.b64encode(expected)!r}))'
        )
        self.assertEqual(self.decode(source)[0], expected)

    def test_standard_static_encodings(self):
        expected = b'print("codecs")\n'
        encoders = (
            ('b32decode', base64.b32encode),
            ('b16decode', base64.b16encode),
            ('b85decode', base64.b85encode),
            ('a85decode', base64.a85encode),
            ('urlsafe_b64decode', base64.urlsafe_b64encode),
        )
        for name, encode in encoders:
            with self.subTest(codec=name):
                source = f'import base64\nexec(base64.{name}({encode(expected)!r}))'
                self.assertEqual(self.decode(source)[0], expected)

    def test_hex_and_rot13(self):
        expected = 'print("文本")'
        sources = (
            f'exec(bytes.fromhex({expected.encode().hex()!r}))',
            f'import binascii\nexec(binascii.unhexlify({expected.encode().hex()!r}))',
            f'import codecs\nexec(codecs.decode({codecs.encode(expected, "rot13")!r}, "rot13"))',
        )
        for source in sources:
            with self.subTest(source=source[:50]):
                self.assertEqual(self.decode(source)[0].decode(), expected)

    def test_reverse_slice_and_concatenation(self):
        expected = b'print("reverse")'
        encoded = base64.b64encode(expected)[::-1]
        split = len(encoded) // 2
        source = f'exec(base64.b64decode(({encoded[:split]!r} + {encoded[split:]!r})[::-1]))'
        self.assertEqual(self.decode(source)[0], expected)

    def test_plain_input_and_nonwrapper_code_are_preserved(self):
        for source in (
            'print("plain input")\n',
            'import base64\ndata = base64.b64decode("aGVsbG8=")\nprint(data)\n',
            'print("keep this")\nexec(base64.b64decode("cGFzcw=="))\n',
            'exec(do_something_unknown())\n',
        ):
            with self.subTest(source=source[:50]):
                self.assertEqual(self.decode(source)[0], source.encode())

    def test_decoded_payload_is_never_executed(self):
        expected = b'raise RuntimeError("must never execute")\n'
        source = f'exec(base64.b64decode({base64.b64encode(expected)!r}))'
        self.assertEqual(self.decode(source)[0], expected)

    def test_static_character_map(self):
        expected = 'print("character map")\n'
        pairs = [ord('E')]
        for character in expected:
            value = (ord(character) - 10 - 22) % 133
            pairs.extend((0xCC | (value >> 6), 0x80 | (value & 63)))
        encoded = bytes(pairs).decode('utf-8')
        source = (
            f'b={encoded!r}.encode()\n'
            'exec("".join(chr(((((h << 6) & 64) | (c & 63)) + 22) % 133 + 10) '
            'for h,c in zip(b[1::2],b[2::2])))'
        )
        self.assertEqual(self.decode(source)[0], expected.encode())

    def test_decoder_lambda_is_available_to_nested_wrapper(self):
        expected = b'print("kept decoder")\n'
        inner = f'exec(_({base64.b16encode(zlib.compress(expected))[::-1]!r}))'
        outer = (
            "_=lambda data: __import__('zlib').decompress("
            "__import__('base64').b16decode(data[::-1]))\n"
            f'exec(_({base64.b16encode(zlib.compress(inner.encode()))[::-1]!r}))'
        )
        self.assertEqual(self.decode(outer)[0], expected)

    def test_try_wrapper(self):
        expected = b'print("try wrapper")\n'
        source = (
            'try:\n import base64\n'
            f' data = base64.b64decode({base64.b64encode(expected)!r})\n exec(data)\n'
            'except Exception as error:\n print(error)\n'
        )
        self.assertEqual(self.decode(source)[0], expected)

    def test_invalid_codec_or_arithmetic_keeps_source(self):
        for source in (
            'exec(base64.b64decode("%%%bad%%%"))',
            'exec(chr(1 % 0))',
            'exec(chr(1 << 1000000000))',
        ):
            with self.subTest(source=source):
                self.assertEqual(self.decode(source)[0], source.encode())

    def test_lambda_parameter_masks_outer_decoder(self):
        source = (
            'decode=lambda value: b"pass"\n'
            'exec((lambda decode: decode(b"ignored"))(b"not callable"))'
        )
        self.assertEqual(self.decode(source)[0], source.encode())

    def test_nested_lambda_respects_lexical_scope(self):
        sources = (
            'data=b"pass"\nouter=lambda other: data\n'
            'exec((lambda data: outer(b"unused"))(b"wrong"))',
            'exec((lambda data: (lambda other: data)(b"unused"))(b"pass"))',
        )
        for source in sources:
            with self.subTest(source=source):
                self.assertEqual(self.decode(source)[0], b'pass')

    def test_imports_after_exec_are_not_discarded_or_used_early(self):
        for source in (
            'exec(base64.b64decode("cGFzcw=="))\nimport zlib\n',
            'from codecs import decode\nexec(decode(b"cGFzcw=="))\n'
            'from base64 import b64decode as decode\n',
        ):
            with self.subTest(source=source):
                self.assertEqual(self.decode(source)[0], source.encode())

    def test_import_rebinding_replaces_previous_binding(self):
        for previous in ('decode=b"old value"', 'decode=lambda value: b"old value"'):
            source = (
                f'{previous}\nfrom base64 import b64decode as decode\n'
                'exec(decode(b"cGFzcw=="))'
            )
            with self.subTest(previous=previous):
                self.assertEqual(self.decode(source)[0], b'pass')

    def test_try_wrapper_does_not_drop_finally_or_else(self):
        sources = (
            'try:\n exec(base64.b64decode("cGFzcw=="))\nfinally:\n print("keep")\n',
            'try:\n exec(base64.b64decode("cGFzcw=="))\nexcept Exception:\n pass\n'
            'else:\n print("keep")\n',
        )
        for source in sources:
            with self.subTest(source=source):
                self.assertEqual(self.decode(source)[0], source.encode())

    def test_cli_custom_paths(self):
        with tempfile.TemporaryDirectory(prefix='decode-python-cli-') as temp:
            directory = Path(temp)
            input_file = directory / 'encoded.py'
            output_file = directory / 'decoded.py'
            input_file.write_text('print("custom paths")\n', encoding='utf-8')
            result = subprocess.run(
                [sys.executable, str(DECODER), '-i', str(input_file), '-o', str(output_file)],
                cwd=directory, capture_output=True, text=True, timeout=15,
            )
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertIn(b'print("custom paths")', output_file.read_bytes())


if __name__ == '__main__':
    unittest.main(verbosity=2)
