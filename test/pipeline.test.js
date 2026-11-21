import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';
import decodePacker from '../src/plugin/packer.js';
import test from 'node:test';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function withTempDir(run) {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'decode-action-test-'));
  try {
    run(directory);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('JavaScript decoder creates output for empty/unmatched input', () => {
  withTempDir((directory) => {
    const input = path.join(directory, 'input.js');
    const output = path.join(directory, 'output.js');
    writeFileSync(input, '', 'utf8');

    const result = spawnSync(
      process.execPath,
      [path.join(repoRoot, 'src/main.js'), '-i', input, '-o', output],
      { cwd: repoRoot, encoding: 'utf8' },
    );

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.equal(readFileSync(output, 'utf8'), '');
  });
});

test('Python decoder preserves plain input instead of failing on missing wrapper', () => {
  withTempDir((directory) => {
    const input = "print('plain fallback')\n";
    writeFileSync(path.join(directory, 'input.py'), input, 'utf8');

    const result = spawnSync('python3', [path.join(repoRoot, 'src/decode.py')], {
      cwd: directory,
      encoding: 'utf8',
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const output = path.join(directory, 'output.py');
    const decoded = readFileSync(output, 'utf8');
    assert.match(decoded, /print\('plain fallback'\)/);

    const secondRun = spawnSync('python3', [path.join(repoRoot, 'src/decode.py')], {
      cwd: directory,
      encoding: 'utf8',
    });
    assert.equal(secondRun.status, 0, secondRun.stderr || secondRun.stdout);
    assert.equal(readFileSync(output, 'utf8'), decoded);
  });
});

test('Python decoder unwraps a quoted Base64 zlib payload', () => {
  withTempDir((directory) => {
    const encoded = deflateSync(Buffer.from('print("decoded")', 'utf8')).toString('base64');
    writeFileSync(
      path.join(directory, 'input.py'),
      `exec(base64.b64decode("${encoded}"))\n`,
      'utf8',
    );

    const result = spawnSync('python3', [path.join(repoRoot, 'src/decode.py')], {
      cwd: directory,
      encoding: 'utf8',
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(readFileSync(path.join(directory, 'output.py'), 'utf8'), /print\("decoded"\)/);
  });
});

test('Python decoder accepts unpadded URL-safe Base64', () => {
  withTempDir((directory) => {
    const encoded = Buffer.from('print("π")', 'utf8').toString('base64url');
    writeFileSync(
      path.join(directory, 'input.py'),
      `exec(base64.urlsafe_b64decode("${encoded}"))\n`,
      'utf8',
    );

    const result = spawnSync('python3', [path.join(repoRoot, 'src/decode.py')], {
      cwd: directory,
      encoding: 'utf8',
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(readFileSync(path.join(directory, 'output.py'), 'utf8'), /print\("π"\)/);
  });
});

test('Dean Edwards Packer is unpacked from literals without executing eval', () => {
  const packed = String.raw`eval(function(p,a,c,k,e,d){globalThis.__packerTestExecuted=true;e=function(c){return c.toString(a)};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0("1");',10,2,'alert|hello'.split('|'),0,{}))`;

  assert.equal(decodePacker(packed), 'alert("hello");');
  assert.equal(globalThis.__packerTestExecuted, undefined);
  const table62 = `${'|'.repeat(36)}alert|hello`;
  const packed62 = `eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c])}}return p}('A("B");',62,38,"${table62}".split("|"),0,{}))`;
  assert.equal(decodePacker(packed62), 'alert("hello");');
  assert.equal(decodePacker('const before = 1;\n' + packed), null);
  assert.equal(decodePacker('const value = 1;'), null);
});

test('JavaScript CLI dispatches a Packer input to the new decoder', () => {
  withTempDir((directory) => {
    const input = path.join(directory, 'input.js');
    const output = path.join(directory, 'output.js');
    const packedProgram = String.raw`eval(function(p,a,c,k,e,d){e=function(c){return c.toString(a)};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0("1");',10,2,'alert|hello'.split('|'),0,{}))`;
    const packed = `// smEcV marker must not bypass plugin detection\n${packedProgram}`;
    writeFileSync(input, packed, 'utf8');

    const result = spawnSync(
      process.execPath,
      [path.join(repoRoot, 'src/main.js'), '-i', input, '-o', output],
      { cwd: repoRoot, encoding: 'utf8' },
    );

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(readFileSync(output, 'utf8'), /alert\("hello"\);/);
    assert.match(result.stdout, /packer/);
  });
});
