import { parse } from '@babel/parser';
import * as t from '@babel/types';

const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MAX_OUTPUT = 16 * 1024 * 1024;
const MAX_PASSES = 8;

function toRadixToken(value, radix) {
  if (value === 0) return '0';
  let current = value;
  let token = '';
  while (current > 0) {
    const digit = current % radix;
    token = DIGITS[digit] + token;
    current = Math.floor(current / radix);
  }
  return token;
}

function getWrapper(code) {
  let ast;
  try {
    ast = parse(code, { sourceType: 'unambiguous' });
  } catch {
    return null;
  }

  if (
    ast.program.directives.length > 0 ||
    ast.program.body.filter((statement) => !t.isEmptyStatement(statement)).length !== 1
  ) {
    return null;
  }

  for (const statement of ast.program.body) {
    const outer = statement.expression;
    if (
      !t.isCallExpression(outer) ||
      !t.isIdentifier(outer.callee, { name: 'eval' }) ||
      outer.arguments.length !== 1
    ) {
      continue;
    }

    const packedCall = outer.arguments[0];
    if (!t.isCallExpression(packedCall) || !t.isFunctionExpression(packedCall.callee)) {
      continue;
    }
    const packer = packedCall.callee;
    if (packer.async || packer.generator) continue;

    const [payload, radixNode, countNode, tableCall] = packedCall.arguments;
    const split = t.isCallExpression(tableCall) ? tableCall.callee : null;
    if (
      !t.isStringLiteral(payload) ||
      !t.isNumericLiteral(radixNode) ||
      !t.isNumericLiteral(countNode) ||
      !t.isMemberExpression(split) ||
      (split.computed
        ? !t.isStringLiteral(split.property, { value: 'split' })
        : !t.isIdentifier(split.property, { name: 'split' })) ||
      !t.isStringLiteral(split.object) ||
      tableCall.arguments.length !== 1 ||
      !t.isStringLiteral(tableCall.arguments[0])
    ) {
      continue;
    }

    const params = packer.params;
    if (
      !t.isIdentifier(params[0], { name: 'p' }) ||
      !t.isIdentifier(params[1], { name: 'a' }) ||
      !t.isIdentifier(params[2], { name: 'c' }) ||
      !t.isIdentifier(params[3], { name: 'k' })
    ) {
      continue;
    }

    // Confirm the canonical Packer replacement loop without executing it.
    const functionSource = code.slice(packer.start, packer.end);
    const simpleEncoder =
      /\be\s*=\s*function\s*\(\s*c\s*\)\s*\{\s*return\s+c\.toString\s*\(\s*a\s*\)\s*;?\s*\}/.test(functionSource);
    const radix62Encoder =
      /String\.fromCharCode\s*\(\s*c\s*\+\s*29\s*\)/.test(functionSource) &&
      /c\.toString\(36\)/.test(functionSource);
    if (
      (!simpleEncoder && !radix62Encoder) ||
      !/\bc\s*--/.test(functionSource) ||
      !/\bk\s*\[\s*c\s*\]/.test(functionSource) ||
      !/\\\\b/.test(functionSource) ||
      !/\bp\s*=\s*p\s*\.replace\s*\(\s*new\s+RegExp\b/.test(functionSource) ||
      !/\breturn\s+p\b/.test(functionSource)
    ) {
      continue;
    }

    const radix = radixNode.value;
    const count = countNode.value;
    const maxRadix = radix62Encoder ? DIGITS.length : 36;
    if (!Number.isInteger(radix) || radix < 2 || radix > maxRadix) continue;
    if (!Number.isInteger(count) || count < 0 || count > 100000) continue;

    const words = split.object.value.split(tableCall.arguments[0].value);
    const fastReplace = /(?:''|\"\")\.replace\(\s*\/\^\/\s*,\s*String\s*\)/.test(functionSource);
    return { payload: payload.value, radix, count, words, fastReplace };
  }

  return null;
}

/**
 * Unpack the classic Dean Edwards Packer format using only parsed literals.
 * The packed function is inspected as text and is never evaluated.
 */
export default function decodePacker(code) {
  if (code.length > MAX_OUTPUT) return null;
  let decoded = code;
  let matched = false;
  for (let pass = 0; pass < MAX_PASSES; pass += 1) {
    const wrapper = getWrapper(decoded);
    if (!wrapper) break;
    let payload = wrapper.payload;
    if (wrapper.fastReplace) {
      // Canonical Packer's modern-JS branch replaces tokens simultaneously.
      // Replacing in descending order would corrupt dictionary words that
      // themselves happen to be tokens (for example "0|alert").
      const dictionary = new Map();
      for (let index = 0; index < wrapper.count; index += 1) {
        const token = toRadixToken(index, wrapper.radix);
        dictionary.set(token, wrapper.words[index] || token);
      }
      let size = payload.length;
      payload = payload.replace(/\b\w+\b/g, (token) => {
        const word = dictionary.get(token) ?? token;
        size += word.length - token.length;
        if (size > MAX_OUTPUT) throw new Error('Packer 输出超过 16 MiB 上限');
        return word;
      });
    } else {
      if (wrapper.count * payload.length > 64 * 1024 * 1024) {
        throw new Error('Packer 字典替换工作量超过上限');
      }
      for (let index = wrapper.count - 1; index >= 0; index -= 1) {
        const word = wrapper.words[index];
        if (!word) continue;
        const token = toRadixToken(index, wrapper.radix);
        let size = payload.length;
        payload = payload.replace(new RegExp(`\\b${token}\\b`, 'g'), (token) => {
          size += word.length - token.length;
          if (size > MAX_OUTPUT) throw new Error('Packer 输出超过 16 MiB 上限');
          return word;
        });
      }
    }
    matched = true;
    if (payload === decoded) break;
    decoded = payload;
  }
  return matched ? decoded : null;
}
