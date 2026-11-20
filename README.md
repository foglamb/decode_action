# decode_action

使用 GitHub Actions 还原 JavaScript 混淆和 Python 编码/压缩包装。原项目基于 echo094/decode-js，经 smallfawn/decode_action 修改后 fork。

## 使用

1. 启用 fork 仓库的 Actions。
2. 把待处理 JavaScript 放入 [input.js](input.js)，或把 Python 放入 [input.py](input.py)，提交到 `main`。
3. 查看 Actions 中对应语言任务的日志。执行完成后，结果写回 [output.js](output.js) 和 [output.py](output.py)。耗时取决于队列和输入，不保证固定 60 秒。
4. 也可以在 Actions 页手动运行。即使测试或结果提交失败，已经产生的本次结果仍可在运行页的 `decoded-output-*` artifact 中下载，保留 7 天。

JS 与 Python 分开执行，一种语言的失败不会取消另一种语言的解码。两个解码任务和回归测试均成功后才自动提交。PR 只运行解码和测试，不写回仓库；解码过程中分支已更新时跳过旧结果提交。

### 本地运行

完整 JS 插件集沿用 `isolated-vm` 4.x，当前验证的兼容环境为 Node 20；Python 为 3.11。不要直接用其他 Node 主版本安装本地原生扩展后假定 ABI 兼容。

```bash
npm ci
npm test
npm run decode -- -i input.js -o output.js
npm run decode -- -i input.js -o output.js -t packer
npm run deob -- -i input.js -o output.js
python3 src/decode.py -i input.py -o output.py
```

JS 的 `-t` / `--type` 可选择 `auto`、`packer`、`obfuscator`、`sojsonv7`、`sojson`、`jsconfuser`、`awsc`、`jjencode`、`common`。默认 `auto` 使用首个产生转换结果的插件。`common` 主要做格式整理和常量化简，产生输出并不代表已还原所有混淆。显式指定插件时，参数错误或格式不匹配会返回失败状态。

没有匹配到包装时保留输入原文；输出头部固定，不因运行时间不同反复提交。原始输入保持不变。

## 支持范围

| 类型 | 能力 | 边界 |
| --- | --- | --- |
| JS 既有 AST 插件 | sojson、sojsonv7、obfuscator、jsconfuser、awsc、jjencode、common | 保留原项目实现，不表示覆盖这些工具的所有版本或配置 |
| JS Packer | 经典 `eval(function(p,a,c,k,e,d){...})`，字典进制 2–62、嵌套包装、字典词碰撞处理 | 静态识别，不执行打包函数；不支持任意改造后的自定义 eval |
| Python Base 编码 | Base64 / URL-safe Base64、Base16、Base32、Base85、Ascii85 | 静态字符串或字节串参数；Base64 允许缺少填充 |
| Python 其他编码 | `bytes.fromhex`、`binascii.unhexlify`、`codecs.decode` 的 ROT13 / hex / Base64 | 不扩展任意 Python 函数或未知编码器 |
| Python 压缩 | gzip、bz2、zlib、lzma，支持组合和多层包装 | 单层解包结果上限 16 MiB，压缩成员和脚本层数均有上限 |
| Python 包装结构 | 导入别名、静态变量、反转切片、字符串拼接、单参数 lambda / compile、简单 try 包装 | 只解释白名单表达式，不运行 `exec`、`eval` 或 `compile` |
| Python 字符映射 | 有限整数运算、`chr` / `ord`、单层 `zip` / 切片 / `join` 生成式 | 有次数和复杂度上限，不是通用 Python 解释器 |

Python 只有识别到完整的数据执行包装才提取内层；普通程序中的某个 Base64 常量不会导致周边代码被丢弃。不支持的下一层会保留当前已恢复的内容并在日志中说明，不能把“有输出”当成“全部还原完成”。

Packer 和新的 Python 解码路径不执行恢复出的脚本。原有 JS 插件仍含动态求值逻辑；CI 把解码任务设为只读、禁用 checkout 凭据持久化，并在独立任务中发布结果，这不等同于完整的任意代码安全沙箱。

## 后续可补充

- **AAEncode / JSFuck**：建立真实正反样本和预期输出后增加独立解码器；本版尚未声明支持。
- **JS 字面量包装**：可继续加入受限 `atob`、URI 转义、`String.fromCharCode` 静态折叠。
- **更多混淆版本**：按样本补齐已有 AST 插件的签名、字符串数组与控制流规则，而不是串行试跑所有插件并接受任意改写。
- **marshal / pyc**：需单独考虑 Python 版本、字节码格式和还原工具；本版不做反编译。
- **自定义 XOR / AES**：需要具体算法、密钥来源和输入格式，不能从编码包装支持推导为通用密码破解能力。

修复细节及验证证据见 [分析报告](docs/2026-11-21_修复-decode_action-report.md)。
