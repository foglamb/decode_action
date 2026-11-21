import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import decodePacker from '../src/plugin/packer.js';

const main = fileURLToPath(new URL('../src/main.js', import.meta.url));
const encoder = String.raw`function(p,a,c,k,e,d){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1}while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}`;
function pack(payload, words = [], radix = 36) {
  return `eval((${encoder})(${JSON.stringify(payload)},${radix},${words.length},${JSON.stringify(words.join('|'))}.split('|'),0,{}));`;
}

function run(source, options) {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'decode-js-cli-'));
  const input = path.join(directory, '输入.js');
  const output = path.join(directory, '输出.js');
  try {
    writeFileSync(input, source);
    const result = spawnSync(process.execPath, [main, '-i', input, '-o', output, ...options], {
      cwd: directory, encoding: 'utf8', timeout: 15000,
    });
    return { ...result, output: existsSync(output) ? readFileSync(output, 'utf8') : null };
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('canonical Packer uses simultaneous dictionary replacements', () => {
  assert.equal(decodePacker(pack('1("2");', ['alert', '0', 'hello'])), '0("hello");');
});

test('Packer retains dollar sequences in replacement words literally', () => {
  assert.equal(decodePacker(pack('0("1");', ['alert', '$& $1 $$'])), 'alert("$& $1 $$");');
});

test('Packer unwraps nested packs without running the recovered program', () => {
  const source = 'throw new Error("do not run me");';
  assert.equal(decodePacker(pack(pack(source))), source);
});

test('Packer rejects unrelated statements and invalid metadata', () => {
  assert.equal(decodePacker('console.log("keep");' + pack('0', ['value'])), null);
  assert.equal(decodePacker(pack('0', ['value'], 1)), null);
  assert.equal(decodePacker('eval(customDecoder("data"));'), null);
});

test('Packer recognizes only a static split property', () => {
  const packed = pack('0();', ['value']);
  assert.equal(decodePacker(packed.replace('.split(', '["split"](')), 'value();');
  assert.equal(decodePacker(packed.replace('.split(', '[split](')), null);
});

test('Packer rejects an invalid radix for the wrapper encoder', () => {
  assert.equal(decodePacker(pack('0();', ['value'], 62)), null);
});

test('Packer preserves sources with directives and non-synchronous wrappers', () => {
  const packed = pack('0();', ['value']);
  assert.equal(decodePacker('"use strict";\n' + packed), null);
  assert.equal(decodePacker(packed.replace('function(', 'function*(')), null);
  assert.equal(decodePacker(packed.replace('function(', 'async function(')), null);
});

test('explicit packer selection works for custom unicode file paths', () => {
  const result = run(pack('0("1");', ['console.log', 'cli']), ['--type', 'packer']);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.output, /console\.log\("cli"\);/);
  assert.match(result.stdout, /packer/);
});

test('explicit common selection respects -t and does not bypass smEcV', () => {
  const result = run('console.log("smEcV", 1 + 2);', ['-t', 'common']);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.output, /"smEcV", 3/);
  assert.match(result.stdout, /common/);
});

test('unknown decoder and missing parameter return failure without output', () => {
  const unknown = run('console.log(1);', ['-t', 'missing']);
  assert.notEqual(unknown.status, 0);
  assert.equal(unknown.output, null);
  const missing = run('console.log(1);', ['--type']);
  assert.notEqual(missing.status, 0);
  assert.equal(missing.output, null);
});

test('forced decoder failure is reported instead of pretending to decode', () => {
  const result = run('console.log(1);', ['-t', 'packer']);
  assert.notEqual(result.status, 0);
  assert.equal(result.output, null);
});
