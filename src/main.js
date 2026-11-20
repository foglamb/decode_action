import fs from 'node:fs';
import process from 'node:process';
import { parseArgs } from 'node:util';

// Load only the decoder being tried. A Packer/common-only run should not fail
// merely because an unrelated native addon is unavailable.
const pluginNames = ['packer', 'obfuscator', 'sojsonv7', 'sojson', 'jsconfuser', 'awsc', 'jjencode', 'common'];
const usage = `Usage: node src/main.js [-i input.js] [-o output.js] [-t auto|${pluginNames.join('|')}]
  -i, --input   Input file (default: input.js)
  -o, --output  Output file (default: output.js)
  -t, --type    Decoder to use (default: auto)
  -h, --help    Show this help`;

async function main() {
  const { values } = parseArgs({
    options: {
      input: { type: 'string', short: 'i', default: 'input.js' },
      output: { type: 'string', short: 'o', default: 'output.js' },
      type: { type: 'string', short: 't', default: 'auto' },
      help: { type: 'boolean', short: 'h', default: false },
    },
    strict: true,
    allowPositionals: false,
  });
  if (values.help) {
    console.log(usage);
    return;
  }
  if (values.type !== 'auto' && !pluginNames.includes(values.type)) {
    throw new Error(`未知解码器: ${values.type}\n${usage}`);
  }
  console.log(`输入: ${values.input}`);
  console.log(`输出: ${values.output}`);
  const source = fs.readFileSync(values.input, 'utf8');
  let decoded = source;
  let pluginUsed = '';
  const selected = values.type === 'auto' ? pluginNames : [values.type];
  for (const name of selected) {
    try {
      const { default: decode } = await import(`./plugin/${name}.js`);
      const result = decode(source);
      if (typeof result === 'string' && result !== source) {
        decoded = result;
        pluginUsed = name;
        break;
      }
      if (values.type !== 'auto' && result === null) {
        throw new Error('输入不符合该解码器支持的格式');
      }
    } catch (error) {
      if (values.type !== 'auto') throw error;
      console.error(`插件 ${name} 未完成处理: ${error.message}`);
    }
  }
  const header = [
    '// Decoded by decode_action',
    '// Base: https://github.com/echo094/decode-js',
    '// Project: https://github.com/smallfawn/decode_action',
  ].join('\n');
  fs.writeFileSync(values.output, pluginUsed ? `${header}\n${decoded}` : source, 'utf8');
  console.log(pluginUsed
    ? `使用插件 ${pluginUsed} 解码；已写入 ${values.output}`
    : `未匹配到转换结果，已将原文写入 ${values.output}`);
}

main().catch((error) => {
  console.error(`JavaScript 解码失败: ${error.message}`);
  process.exitCode = 1;
});
