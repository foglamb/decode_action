//Thu Aug 28 2025 09:32:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const aj = require("crypto"),
  ak = require("zlib"),
  {
    setTimeout: al
  } = require("timers/promises"),
  {
    execSync: am
  } = require("child_process"),
  an = require("fs"),
  ao = require("path"),
  {
    createRequire: ap
  } = require("module"),
  aq = ao.join(__dirname, ".xf_modules");
if (!an.existsSync(aq)) an.mkdirSync(aq, {
  "recursive": true
});
const ar = ao.join(aq, "package.json");
if (!an.existsSync(ar)) an.writeFileSync(ar, "{\"name\":\"xf-local-modules\",\"private\":true}");
const as = ap(ar);
let at, au, av, aw, ax;
function ay(a, b = "") {
  try {
    const f = b ? a + "@" + b : a;
    console.log("📦 正在安装 " + f + " (隔离目录)");
    const g = "npm install --legacy-peer-deps --no-audit --no-fund --save --prefix \"" + aq + "\" " + f + " --registry=https://registry.npmmirror.com";
    am(g, {
      "stdio": "inherit"
    });
    console.log("✅ " + f + " 安装成功");
    return true;
  } catch (h) {
    console.log("❌ " + a + " 安装失败: " + h.message);
    return false;
  }
}
function az(e, f = true, g = "") {
  try {
    {
      const l = as(e);
      return l.default || l;
    }
  } catch (m) {
    if (m.code === "ERR_MODULE_NOT_FOUND" || m.code === "MODULE_NOT_FOUND") {
      if (f) {
        {
          console.log("⚠️ 检测到 " + e + " 未安装 (本地)");
          if (ay(e, g)) {
            try {
              const n = as(e);
              return n.default || n;
            } catch (o) {
              console.log("❌ " + e + " 加载失败: " + o.message);
              return null;
            }
          }
        }
      }
    } else {
      if (m.code === "ERR_REQUIRE_ESM") {
        console.log("⚠️ 检测到 " + e + " 模块为ESM版本，可能不兼容");
        return null;
      } else console.log("❌ " + e + " 加载失败: " + m.message);
    }
    return null;
  }
}
try {
  const bf = az("p-limit", true, "6.1.0");
  ax = bf;
} catch (bg) {
  console.log("⚠️ p-limit模块加载失败，将使用顺序执行模式");
  ax = null;
}
try {
  at = az("axios", true, "^1.6.0");
  au = at;
} catch (bh) {
  console.log("⚠️ axios模块加载失败");
  au = null;
}
try {
  const bi = az("socks-proxy-agent", true, "^7.0.0");
  bi ? (av = bi.SocksProxyAgent, aw = bi.SocksProxyAgent || bi.default || bi) : (av = null, aw = null);
} catch (bj) {
  console.log("⚠️ socks-proxy-agent模块加载失败，代理功能将不可用");
  av = null;
  aw = null;
}
const aA = "喜番",
  aB = "3.0.0",
  aC = "xifan",
  aD = true,
  aE = false;
function aF() {
  const b = new Date(),
    e = f => String(f).padStart(2, "0");
  return e(b.getHours()) + ":" + e(b.getMinutes()) + ":" + e(b.getSeconds());
}
function aG(a, b) {
  console.log("ℹ️ " + aF() + " [" + a + "] " + b);
}
function aH(a, b) {
  console.log("⚠️ " + aF() + " [" + a + "] " + b);
}
function aI(a, b) {
  console.log("❌ " + aF() + " [" + a + "] " + b);
}
async function aJ(a) {
  try {
    const e = String(process.env.heihao || "").trim() === "1";
    if (e) return;
    return await al(a);
  } catch {
    return await al(a);
  }
}
function aK() {
  const b = process.version,
    e = parseInt(b.slice(1).split(".")[0]);
  if (e < 16) throw new Error("Node.js版本过低，当前版本: " + b + "，需要16.0.0或更高版本");
  console.log("📋 Node.js版本: " + b);
  const f = [{
      "name": "crypto",
      "module": aj,
      "required": true
    }, {
      "name": "zlib",
      "module": ak,
      "required": true
    }, {
      "name": "timers/promises",
      "module": {
        "setTimeout": aJ
      },
      "required": true
    }],
    g = [{
      "name": "axios",
      "module": au,
      "required": true,
      "fallback": null
    }, {
      "name": "socks-proxy-agent",
      "module": aw,
      "required": false,
      "fallback": null
    }, {
      "name": "p-limit",
      "module": ax,
      "required": false,
      "fallback": "顺序执行模式"
    }];
  console.log("🔍 检查核心模块...");
  for (const {
    name: h,
    module: i,
    required: j
  } of f) {
    if (!i) {
      if (j) throw new Error("核心模块 [" + h + "] 加载失败，这是系统必需模块");else console.log("⚠️ 核心模块 [" + h + "] 不可用");
    } else console.log("✅ 核心模块 [" + h + "] 正常");
  }
  console.log("🔍 检查外部依赖模块...");
  for (const {
    name: k,
    module: l,
    required: m,
    fallback: n
  } of g) {
    if (!l) {
      if (m) throw new Error("必需模块 [" + k + "] 加载失败，请检查是否正确安装");else console.log("⚠️ 可选模块 [" + k + "] 不可用，将使用" + n);
    } else console.log("✅ 外部模块 [" + k + "] 正常");
  }
  if (typeof aj.createCipheriv !== "function") throw new Error("crypto模块功能异常，无法创建加密器");
  if (typeof ak.gzipSync !== "function") throw new Error("zlib模块功能异常，无法进行gzip压缩");
  if (au && typeof au.create !== "function") {
    {
      if (typeof au === "function") {} else {
        throw new Error("axios模块功能异常，无法创建HTTP客户端");
      }
    }
  }
  aw && typeof aw !== "function" && console.log("⚠️ socks-proxy-agent模块功能异常，代理功能将不可用");
  if (ax && typeof ax !== "function") {
    console.log("⚠️ p-limit模块功能异常，将使用顺序执行模式");
  }
}
function aL(a) {
  const b = {
      "ZCSaC": "xfkm",
      "peHey": "http",
      "IdDAb": "user",
      "LzPvh": function (q, r) {
        return q || r;
      },
      "SrkpT": function (q) {
        return q();
      },
      "eCPGX": function (q, r) {
        return q + r;
      },
      "YcIPh": function (q, r, s) {
        return q(r, s);
      },
      "MFyef": function (q, r, s) {
        return q(r, s);
      },
      "gZZhB": function (q, r) {
        return q + r;
      },
      "XPNsX": "💡 解决方案：请检查签名服务器状态或联系管理员\n",
      "mXAAW": function (q, r) {
        return q(r);
      },
      "sVCuS": "GWL8jXHLnzp63QDH",
      "CnEWE": "utf8",
      "RidEg": "base64",
      "hDvOr": "aes-128-ecb",
      "CiWjb": function (q, r) {
        return q !== r;
      },
      "wiiWE": "BAyKB",
      "xisrT": "缺少必要的分隔符 @",
      "YqcAG": function (q, r) {
        return q < r;
      },
      "DHENP": function (q, r) {
        return q !== r;
      },
      "lgBYs": "gvQsw",
      "oZOHO": "ATndp",
      "rpQVG": function (q, r) {
        return q > r;
      },
      "TUtRF": function (q, r) {
        return q === r;
      },
      "qmgXa": "HUykz",
      "xMQVe": function (q, r) {
        return q === r;
      },
      "GsKxE": "第1部分(备注名)不能为空",
      "tGLhc": "第1部分(备注名)过长，建议不超过50字符",
      "FWwyx": function (q, r) {
        return q === r;
      },
      "DLNeZ": "QeQFC",
      "SBIva": "QmHxr",
      "fKSkg": "第2部分(Cookie)不能为空",
      "rcNFA": "userId=",
      "dbjho": "第2部分(Cookie)缺少userId信息",
      "ZyaiK": function (q, r) {
        return q < r;
      },
      "HNmIL": "第2部分(Cookie)长度异常，可能不完整",
      "xyxNQ": function (q, r) {
        return q === r;
      },
      "HUYhK": "第3部分(message)不能为空",
      "yrLSn": function (q, r) {
        return q < r;
      },
      "naUcY": "第3部分(message)长度异常，可能不完整",
      "kAwBe": function (q, r) {
        return q === r;
      },
      "ZiUPu": "第4部分(SystemUa)不能为空",
      "nDAGZ": "第4部分(SystemUa)长度异常，可能不完整",
      "QTFpQ": "uGWQC",
      "pIloE": "TrIEb",
      "YMsNy": "第5部分(BrowserUa)不能为空",
      "kMMff": "第5部分(BrowserUa)长度异常，可能不完整",
      "utXWS": function (q, r) {
        return q > r;
      },
      "UBrCa": function (q, r) {
        return q === r;
      },
      "lMGZx": "XGlQj",
      "WmaEc": "CpgEQ",
      "PkKqH": "第6部分(代理信息)格式可能不正确，应使用 | 或 # 分隔",
      "kBpQM": function (q, r) {
        return q === r;
      },
      "xjclH": function (q, r) {
        return q === r;
      },
      "nUmXy": "ZHXGi",
      "FPmdR": function (q, r) {
        return q !== r;
      },
      "hFyhP": "已自动清理各部分的前后空格",
      "tRxVY": function (q, r) {
        return q === r;
      }
    },
    e = a;
  let f = a.trim();
  const g = [],
    h = [];
  if (!f.includes("@")) {
    g.push("缺少必要的分隔符 @");
    return {
      "isValid": false,
      "fixed": null,
      "errors": g,
      "warnings": h
    };
  }
  const i = f.split("@");
  if (i.length < 5) {
    g.push("账号信息不完整，需要至少5个部分，当前只有" + i.length + "个部分");
    return {
      "isValid": false,
      "fixed": null,
      "errors": g,
      "warnings": h
    };
  }
  if (i.length > 6) {
    h.push("账号信息包含过多部分(" + i.length + "个)，可能包含多余信息");
  }
  const [j, k, l, m, n, o] = i;
  if (!j || j.trim().length === 0) g.push("第1部分(备注名)不能为空");else j.length > 50 && h.push("第1部分(备注名)过长，建议不超过50字符");
  if (!k || k.trim().length === 0) g.push("第2部分(Cookie)不能为空");else {
    if (!k.includes("userId=")) g.push("第2部分(Cookie)缺少userId信息");else k.length < 20 && h.push("第2部分(Cookie)长度异常，可能不完整");
  }
  if (!l || l.trim().length === 0) g.push("第3部分(message)不能为空");else l.length < 10 && h.push("第3部分(message)长度异常，可能不完整");
  if (!m || m.trim().length === 0) g.push("第4部分(SystemUa)不能为空");else m.length < 10 && h.push("第4部分(SystemUa)长度异常，可能不完整");
  if (!n || n.trim().length === 0) {
    g.push("第5部分(BrowserUa)不能为空");
  } else n.length < 10 && h.push("第5部分(BrowserUa)长度异常，可能不完整");
  if (o && o.trim().length > 0) {
    if (!o.includes("|") && !o.includes("#")) {
      h.push("第6部分(代理信息)格式可能不正确，应使用 | 或 # 分隔");
    }
  }
  let p = false;
  if (g.length === 0) {
    {
      const w = i.map(y => y.trim()),
        x = w.join("@");
      x !== e && (f = x, p = true, h.push("已自动清理各部分的前后空格"));
    }
  }
  return {
    "isValid": g.length === 0,
    "fixed": p ? f : null,
    "errors": g,
    "warnings": h
  };
}
function aM() {
  const b = [{
    "name": "xifan",
    "value": process.env.xifan,
    "description": "账号配置信息"
  }, {
    "name": "xfkm",
    "value": process.env.xfkm,
    "description": "卡密验证信息"
  }];
  for (const {
    name: h,
    value: i,
    description: j
  } of b) {
    if (!i || !i.trim()) throw new Error("环境变量 [" + h + "] 未设置或为空，" + j + "缺失");
  }
  const e = process.env.xifan,
    f = aL(e);
  if (!f.isValid) {
    console.log("❌ xifan环境变量格式错误:");
    f.errors.forEach(k => {
      console.log("   - " + k);
    });
    f.fixed && (console.log("💡 已自动修复格式，修复后的格式:"), console.log("   " + f.fixed), console.log("💡 请更新环境变量为修复后的格式"));
    throw new Error("环境变量 [xifan] 格式错误，共" + f.errors.length + "个错误");
  }
  f.warnings.length > 0 && (console.log("⚠️ xifan环境变量格式警告:"), f.warnings.forEach(l => {
    console.log("   - " + l);
  }));
  if (f.fixed) {
    console.log("✅ xifan环境变量格式已自动修复");
    console.log("   原始格式: " + e);
    console.log("   修复格式: " + f.fixed);
  }
  const g = process.env.xfkm;
  if (g.length < 5) {
    throw new Error("环境变量 [xfkm] 长度异常，卡密信息可能不完整");
  }
  if (g.includes(" ") || g.includes("\n") || g.includes("\t")) {
    throw new Error("环境变量 [xfkm] 包含无效字符，请检查是否有多余的空格或换行符");
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(g)) {
    console.log("⚠️ xfkm环境变量包含特殊字符，可能影响使用");
  }
}
function aN() {
  return new Promise((b, e) => {
    const f = {
      "dhQsY": function (g, h) {
        return g(h);
      },
      "aVJmS": function (g, h, i) {
        return g(h, i);
      },
      "TtqxE": "未配置代理。多账号请确保一号一代理。",
      "YTalZ": "网络错误",
      "vHXJG": function (g, h) {
        return g(h);
      },
      "IjjKU": function (g, h) {
        return g === h;
      },
      "Yfrrt": "ECONNREFUSED",
      "HNkYL": function (g, h) {
        return g(h);
      },
      "jOObr": "网络连接被拒绝，请检查防火墙设置",
      "VaxeK": function (g, h) {
        return g === h;
      },
      "yKPiQ": "ENOTFOUND",
      "yzOEd": function (g, h) {
        return g(h);
      },
      "KuQSy": "DNS解析失败，请检查网络配置",
      "GGnhP": "ETIMEDOUT",
      "HUsQW": function (g, h) {
        return g !== h;
      },
      "dKrpC": "AOlai",
      "fNMPP": "OjRyF",
      "oQqvZ": function (g, h) {
        return g(h);
      },
      "WbRhO": "网络连接超时，请检查网络速度",
      "umrws": function (g, h) {
        return g !== h;
      },
      "axkkE": "EjoFD",
      "SQbVA": "wTjtk"
    };
    {
      if (!au) {
        e(new Error("axios模块不可用，无法进行网络连接测试"));
        return;
      }
      const h = setTimeout(() => {
        e(new Error("网络连接测试超时，请检查网络状态"));
      }, 10000);
      au.get("http://www.baidu.com", {
        "timeout": 5000
      }).then(() => {
        clearTimeout(h);
        b(true);
      }).catch(i => {
        clearTimeout(h);
        if (i.code === "ECONNREFUSED") e(new Error("网络连接被拒绝，请检查防火墙设置"));else {
          if (i.code === "ENOTFOUND") e(new Error("DNS解析失败，请检查网络配置"));else i.code === "ETIMEDOUT" ? e(new Error("网络连接超时，请检查网络速度")) : e(new Error("网络连接异常: " + i.message));
        }
      });
    }
  });
}
function aO() {
  const b = require("os"),
    e = b.totalmem(),
    f = b.freemem(),
    g = ((e - f) / e * 100).toFixed(1);
  if (f < 104857600) throw new Error("系统内存不足，可用内存: " + (f / 1024 / 1024).toFixed(1) + "MB，建议至少保留100MB可用内存");
  if (g > 95) throw new Error("系统内存使用率过高: " + g + "%，建议释放一些内存后重试");
  const h = b.platform();
  if (h !== "win32" && h !== "linux" && h !== "darwin") throw new Error("不支持的操作系统平台: " + h + "，仅支持Windows、Linux和macOS");
  const i = b.cpus();
  if (i.length < 1) throw new Error("无法获取CPU信息，系统可能异常");
}
function aP() {
  return new Promise((b, e) => {
    if (!au) {
      e(new Error("axios模块不可用"));
      return;
    }
    const g = setTimeout(() => {
      e(new Error("签名服务器连接测试超时"));
    }, 15000);
    au.get("http://125.77.163.37:18888/jk.php", {
      "timeout": 10000
    }).then(h => {
      clearTimeout(g);
      if (h.status === 200) {
        try {
          const j = h.data;
          if (Array.isArray(j) && j.length > 0) {
            {
              const k = j.some(m => m.name === "sig1" && Array.isArray(m.interfaces)),
                l = j.some(m => m.name === "sig3" && Array.isArray(m.interfaces));
              if (!k) {}
              if (!l) {}
              b(true);
            }
          } else e(new Error("签名服务器返回数据格式异常，接口列表为空"));
        } catch (n) {
          e(new Error("签名服务器返回数据解析失败: " + n.message));
        }
      } else e(new Error("签名服务器响应异常，状态码: " + h.status));
    }).catch(h => {
      const i = {
        "ZiMay": "账号金币已达上限，停止执行"
      };
      clearTimeout(g);
      if (h.response) {
        e(new Error("签名服务器响应错误，状态码: " + h.response.status));
      } else {
        if (h.code === "ECONNREFUSED") e(new Error("签名服务器连接被拒绝，请检查服务器状态"));else {
          if (h.code === "ENOTFOUND") e(new Error("签名服务器地址解析失败，请检查网络配置"));else {
            if (h.code === "ETIMEDOUT") {
              e(new Error("签名服务器连接超时，请检查网络速度"));
            } else e(new Error("签名服务器连接异常: " + h.message));
          }
        }
      }
    });
  });
}
async function aQ() {
  console.log("🔍 开始系统环境检查...\n");
  try {
    console.log("📦 检查依赖模块...");
    aK();
    console.log("✅ 依赖模块检查通过\n");
    console.log("🌍 检查环境变量...");
    aM();
    console.log("✅ 环境变量检查通过\n");
    console.log("💾 检查系统资源...");
    aO();
    console.log("✅ 系统资源检查通过\n");
    console.log("🌐 检查网络连接...");
    await aN();
    console.log("✅ 网络连接检查通过\n");
    console.log("🎉 所有系统检查完成，环境正常！\n");
    return true;
  } catch (f) {
    {
      console.log("❌ 系统检查失败: " + f.message + "\n");
      console.log("📊 当前模块状态:");
      console.log("   - axios: " + (au ? "✅ 可用" : "❌ 不可用"));
      console.log("   - socks-proxy-agent: " + (aw ? "✅ 可用" : "❌ 不可用"));
      console.log("   - p-limit: " + (ax ? "✅ 可用" : "❌ 不可用"));
      if (f.message.includes("依赖模块")) {
        console.log("💡 解决方案：程序已尝试自动安装依赖包，如果仍有问题请手动运行 npm install\n");
      } else {
        if (f.message.includes("环境变量")) console.log("💡 解决方案：请在青龙面板中正确设置环境变量\n");else {
          if (f.message.includes("网络连接")) {
            console.log("💡 解决方案：请检查网络连接和防火墙设置\n");
          } else {
            if (f.message.includes("签名服务器")) console.log("💡 解决方案：请检查签名服务器状态或联系管理员\n");else {
              if (f.message.includes("系统资源")) console.log("💡 解决方案：请释放系统资源或重启系统\n");else {
                if (f.message.includes("Node.js版本")) console.log("💡 解决方案：请升级Node.js到16.0.0或更高版本\n");else {
                  if (f.message.includes("axios模块不可用")) console.log("💡 解决方案：程序已尝试自动安装axios模块，如果仍有问题请手动运行 npm install axios\n");else f.message.includes("HTTP客户端创建失败") && console.log("💡 解决方案：程序已尝试自动安装依赖，如果仍有问题请检查网络连接或手动安装\n");
                }
              }
            }
          }
        }
      }
      console.log("💡 请根据以上错误信息进行相应修复后重新运行\n");
      return false;
    }
  }
}
function aR(a) {
  if (!a || a.length <= 10) return a || "";
  return "" + a.slice(0, 5) + "*".repeat(Math.max(0, a.length - 10)) + a.slice(-5);
}
function aS(a, b = 3, e = 3) {
  if (!a) return "";
  if (a.length <= b + e) return "*".repeat(Math.max(3, a.length));
  return a.slice(0, b) + "***" + a.slice(-e);
}
function aT(a) {
  return ak.gzipSync(a).toString("base64");
}
function aU(a) {
  return ak.gunzipSync(a).toString("base64");
}
function aV(a) {
  const e = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    f = Buffer.from(a, "base64"),
    g = aj.createCipheriv("aes-128-ecb", e, null);
  g.setAutoPadding(true);
  const h = Buffer.concat([g.update(f), g.final()]);
  return h.toString("base64");
}
function aW(a) {
  const e = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    f = Buffer.from(a, "base64"),
    g = aj.createDecipheriv("aes-128-ecb", e, null);
  g.setAutoPadding(true);
  const h = Buffer.concat([g.update(f), g.final()]),
    i = Buffer.from(h).toString("base64"),
    j = Buffer.from(i, "base64"),
    k = aU(j),
    l = Buffer.from(k, "base64").toString("utf8");
  return l;
}
function aX(a) {
  const e = JSON.parse(aW(a));
  e.timestamp = String(Math.round(Date.now()));
  const f = JSON.stringify(e),
    g = aT(Buffer.from(f, "utf8"));
  return aV(g);
}
function aY(a, b) {
  const f = JSON.parse(aW(a)),
    g = String(Math.round(Date.now()));
  if ("inspireHomeParam" in f) delete f.inspireHomeParam;
  f.timestamp = g;
  f.inspireEventReportParam = b;
  const h = JSON.stringify(f),
    i = aT(Buffer.from(h, "utf8"));
  return aV(i);
}
function aZ(a, b, e, f) {
  const h = JSON.parse(aW(a)),
    i = String(Math.round(Date.now()));
  if ("inspireHomeParam" in h) delete h.inspireHomeParam;
  h.timestamp = i;
  h.inspireTaskReportParam = {
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": "0",
        "taskToken": e
      },
      "idempotentId": f
    }],
    "continuousTimes": 0,
    "taskId": b
  };
  const j = JSON.stringify(h),
    k = aT(Buffer.from(j, "utf8"));
  return aV(k);
}
function b0(a, b) {
  const f = JSON.parse(aW(a)),
    g = String(Math.round(Date.now()));
  f.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": g,
    "values": [-0.6101697683334351 + b2(0, 5), -0.8641080856323242 + b2(0, 5), 10.127023696899414 + b2(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": g,
    "values": [0.0007635590736754239 + b2(0, 5), 0.0009162708884105086 + b2(0, 5), -0.00007635590736754239 + b2(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": g,
    "values": [-0.5920952558517456 + b2(0, 5), -0.829244077205658 + b2(0, 5), 9.753571510314941 + b2(0, 5)]
  }];
  f.timestamp = g;
  f.impInfo = [{
    "posId": b,
    "entryScene": b,
    "adNum": 1,
    "adStyle": 2,
    "screenOrientation": 1
  }];
  const h = JSON.stringify(f),
    i = aT(Buffer.from(h, "utf8"));
  return aV(i);
}
function b1(a, b, e, f, g, h, i, j, k, l = 0) {
  const n = JSON.parse(aW(a)),
    o = String(Math.round(Date.now()));
  n.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": o,
    "values": [-0.6101697683334351 + b2(0, 5), -0.8641080856323242 + b2(0, 5), 10.127023696899414 + b2(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": o,
    "values": [0.0007635590736754239 + b2(0, 5), 0.0009162708884105086 + b2(0, 5), -0.00007635590736754239 + b2(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": o,
    "values": [-0.5920952558517456 + b2(0, 5), -0.829244077205658 + b2(0, 5), 9.753571510314941 + b2(0, 5)]
  }];
  n.timestamp = o;
  n.inspireTaskReportParam = {
    "posId": b,
    "ecpm": e,
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": f,
        "creativeId": g,
        "taskToken": h
      },
      "idempotentId": i
    }],
    "taskSessionId": j,
    "continuousTimes": l,
    "taskId": k
  };
  const p = JSON.stringify(n),
    q = aT(Buffer.from(p, "utf8"));
  return aV(q);
}
function b2(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function b3(a) {
  const b = {
      "KzzkP": function (f, g) {
        return f(g);
      },
      "dVfdn": function (f, g) {
        return f in g;
      },
      "PJwPi": "inspireHomeParam",
      "RNujv": "utf8",
      "lAKWx": function (f, g) {
        return f !== g;
      },
      "LiTDR": "PGEQj",
      "qbUMU": "WsNrQ",
      "DHkdj": function (f, g) {
        return f === g;
      },
      "xKISd": "function",
      "foIFm": "第5部分(BrowserUa)不能为空",
      "SrMBT": function (f) {
        return f();
      },
      "wASOF": function (f, g) {
        return f !== g;
      },
      "HaqMk": "nMEag",
      "OKheH": "⚠️ 代理功能不可用，将使用直连模式",
      "fnmmP": function (f) {
        return f();
      },
      "xFMpK": "QyTMH",
      "pZxau": "wGAzD",
      "lBpQv": function (f, g) {
        return f !== g;
      },
      "PSgwd": "YZZgI",
      "rCMZl": "⚠️ 代理创建失败，将使用直连模式",
      "XIcRK": function (f) {
        return f();
      }
    },
    e = (f = {}) => {
      {
        if (!au) return null;
        if (typeof au.create === "function") return au.create(f);
        return au;
      }
    };
  if (!a) return e();
  if (!aw) {
    console.log("⚠️ 代理功能不可用，将使用直连模式");
    return e();
  }
  try {
    {
      const h = new aw(a);
      return e({
        "httpAgent": h,
        "httpsAgent": h
      });
    }
  } catch (i) {
    console.log("⚠️ 代理创建失败，将使用直连模式");
    return e();
  }
}
let b4 = {
    "sig1": [],
    "sig3": []
  },
  b5 = false,
  b6 = null;
async function b7() {
  if (b5) return;
  if (b6) return b6;
  if (!au) {
    console.log("❌ axios模块不可用，无法加载签名接口");
    b5 = true;
    return;
  }
  b6 = (async () => {
    const b = {
      "dpSvF": "HTTP客户端创建失败，请检查axios模块是否正确安装"
    };
    try {
      {
        const f = await au.get("http://125.77.163.37:18888/jk.php", {
            "timeout": 20000
          }),
          g = Array.isArray(f.data) ? f.data : [],
          h = g.find(j => j && j.name === "sig1"),
          i = g.find(j => j && j.name === "sig3");
        b4.sig1 = (h?.["interfaces"] || []).map(j => j.url).filter(Boolean);
        b4.sig3 = (i?.["interfaces"] || []).map(j => j.url).filter(Boolean);
      }
    } catch {}
    b5 = true;
  })();
  return b6;
}
function b8(a) {
  const e = b4[a] || [];
  if (!e.length) return null;
  const f = e[Math.floor(Math.random() * e.length)];
  return f.startsWith("http") ? f : "http://" + f;
}
function b9(a, b) {
  const f = process.env.xfkm || "";
  try {
    const g = new URL(a.startsWith("http") ? a : "http://" + a);
    g.searchParams.set("xfkm", f);
    g.searchParams.set("user", b || "");
    return g.toString();
  } catch {
    return a;
  }
}
async function ba(a, b, f) {
  let h = 0;
  await b7();
  while (h <= 5) {
    try {
      {
        const [k, l = ""] = a.split("&&", 2),
          m = "https://tube.e.kuaishou.com" + k,
          n = b8("sig3");
        if (!n) {
          aI("签名", "网络错误");
          return null;
        }
        const o = b9(n, f),
          p = await b.post(o, JSON.stringify({
            "url": m,
            "body": l
          }), {
            "headers": {
              "Content-Type": "application/json"
            },
            "timeout": 20000
          });
        if (p.status === 200) {
          {
            const r = p.data;
            if (r?.["status"] === "success" && r?.["data"]?.["sig3"]) return r.data.sig3;
          }
        }
        aI("签名", "签名失败");
        return null;
      }
    } catch (t) {
      {
        const u = t?.["response"]?.["status"],
          v = t?.["response"]?.["data"];
        if (u === 403 && v) {
          try {
            const x = typeof v === "string" ? JSON.parse(v) : v;
            if (x?.["error"]) aI("签名", "Sig3验证失败: " + x.error);else aI("签名", "Sig3验证失败: HTTP " + u);
          } catch {
            aI("签名", "Sig3验证失败: HTTP " + u + " - " + (typeof v === "string" ? v : JSON.stringify(v)));
          }
        } else u ? aI("签名", "网络错误") : aI("签名", "网络错误");
        h += 1;
      }
    }
  }
  return null;
}
async function bb(a, b, f) {
  const g = {
    "SUzoz": "⚠️ socks-proxy-agent模块功能异常，代理功能将不可用",
    "eLStg": "第5部分(BrowserUa)长度异常，可能不完整",
    "mwNKX": "base64",
    "fgNIO": function (i, j) {
      return i + j;
    },
    "PeXkt": function (i, j, k) {
      return i(j, k);
    },
    "pZsla": function (i, j) {
      return i + j;
    },
    "TsNmi": function (i, j) {
      return i === j;
    },
    "Cktkr": "function",
    "qDDsZ": "axios模块功能异常，无法创建HTTP客户端",
    "ZWRBP": function (i) {
      return i();
    },
    "CFRNG": function (i, j) {
      return i <= j;
    },
    "LimvQ": function (i, j) {
      return i !== j;
    },
    "cucgf": "AGgdp",
    "ohjiD": "pLZOa",
    "oNBHk": function (i, j) {
      return i(j);
    },
    "IZEgX": "sig1",
    "AtwSL": function (i, j) {
      return i === j;
    },
    "UlFDG": "emGob",
    "hSZHZ": "网络错误",
    "YuOld": function (i, j) {
      return i === j;
    },
    "okvEp": function (i, j) {
      return i === j;
    },
    "mDjrc": "RECjE",
    "QEahr": "success",
    "OAnUZ": "未知错误",
    "xRVxu": function (i, j, k) {
      return i(j, k);
    },
    "HbtEH": "服务器返回错误",
    "EJQHN": "movaD",
    "PJGsS": "tGLNo",
    "XZLJp": function (i, j) {
      return i === j;
    },
    "amRWG": "string",
    "vaHmL": function (i, j, k) {
      return i(j, k);
    },
    "TDgyj": function (i, j) {
      return i !== j;
    },
    "dSPJd": "RZCFn",
    "CpPsh": function (i, j, k) {
      return i(j, k);
    },
    "Gypoa": "CbpzM",
    "UCbAP": function (i, j, k) {
      return i(j, k);
    },
    "hLKDN": "获取Sig1失败重试"
  };
  let h = 0;
  await b7();
  while (h <= 5) {
    try {
      const [i, j = ""] = a.split("&&", 2),
        k = b8("sig1");
      if (!k) {
        aI("签名", "网络错误");
        return null;
      }
      const l = b9(k, f),
        m = {
          "path": i,
          "params": j
        },
        n = await b.post(l, m, {
          "timeout": 20000
        });
      if (n.status === 200) {
        {
          const p = n.data;
          if (p?.["status"] === "success") return p.signature;
          aI("签名", "签名失败: " + (p?.["message"] || "未知错误"));
        }
      } else aI("签名", "服务器返回错误");
    } catch (r) {
      const s = r?.["response"]?.["status"],
        t = r?.["response"]?.["data"];
      if (s === 403 && t) try {
        {
          const u = typeof t === "string" ? JSON.parse(t) : t;
          if (u?.["error"]) aI("签名", "Sig1验证失败: " + u.error);else aI("签名", "Sig1验证失败: HTTP " + s);
        }
      } catch {
        aI("签名", "Sig1验证失败: HTTP " + s + " - " + (typeof t === "string" ? t : JSON.stringify(t)));
      } else {
        if (s) {
          aI("签名", "获取Sig1失败重试");
        } else aI("签名", "获取Sig1失败重试");
      }
      h += 1;
    }
  }
  return null;
}
class bc {
  constructor(a) {
    const b = {
        "PRtah": function (h, i) {
          return h === i;
        },
        "bqlLo": "function",
        "bxRXJ": function (h, i) {
          return h(i);
        },
        "WDEVt": "网络连接测试超时，请检查网络状态",
        "OFMur": function (h) {
          return h();
        },
        "DocDU": "axios模块功能异常，无法创建HTTP客户端",
        "yhLtN": function (h, i) {
          return h === i;
        },
        "pksAp": function (h, i) {
          return h !== i;
        },
        "ipZRq": "fcTdS",
        "cGwVR": "fGUvP",
        "FPJiC": "aGvRc",
        "VRHkt": function (h, i, j) {
          return h(i, j);
        },
        "jevmr": "SOCKS5 代理格式不正确，请按要求填写",
        "NdeZK": function (h, i, j) {
          return h(i, j);
        },
        "yZHBs": function (h, i) {
          return h(i);
        },
        "pNile": function (h, i) {
          return h === i;
        },
        "uTJRF": "BNEyE",
        "qodlz": "mpImL",
        "TFlEj": function (h, i, j) {
          return h(i, j);
        },
        "NKjfI": "SOCKS5 代理解析失败，请检查格式",
        "GBJEs": "未配置代理。多账号请确保一号一代理。",
        "kCOXU": "请检查Cookie格式",
        "BycDq": "HTTP客户端创建失败，请检查axios模块是否正确安装",
        "CsftB": function (h, i, j) {
          return h(i, j);
        },
        "gyFpI": "MAXgol",
        "kHmJG": "1500000"
      },
      f = a.split("@");
    this.bz = f[0];
    this.ck = f[1];
    this.message = f[2];
    this.sua = f[3];
    this.bua = f[4];
    if (f.length === 6) {
      const h = f[5];
      let i, j, k, l;
      try {
        {
          if (h.includes("|")) {
            {
              const p = h.split("|");
              [i, j, k, l] = [p[0], p[1], p[2], p[3]];
            }
          } else {
            if (h.includes("#")) {
              {
                const r = h.split("#");
                [i, j, k, l] = [r[0], r[1], r[2], r[3]];
              }
            } else aI(this.bz, "SOCKS5 代理格式不正确，请按要求填写");
          }
          this.proxyUrl = "socks5h://" + k + ":" + l + "@" + i + ":" + j;
          aG(this.bz, "代理: " + aR(i));
          this.http = b3(this.proxyUrl);
        }
      } catch (s) {
        aI(this.bz, "SOCKS5 代理解析失败，请检查格式");
        this.http = au ? au.create() : null;
      }
    } else this.proxyUrl = null, this.http = au ? au.create() : null, aG(this.bz, "未配置代理。多账号请确保一号一代理。");
    this.ua = this.sua + "-ksad-android-3.3.55.2";
    const g = /userId=([^;]+)/.exec(this.ck || "");
    if (g) this.user_id = g[1];else throw new Error("请检查Cookie格式");
    if (!this.http) throw new Error("HTTP客户端创建失败，请检查axios模块是否正确安装");
    this.AdXunHuan = 0;
    this.BoxAdXunHuan = 0;
    this.max_gold = parseInt(process.env.MAXgol || "1500000", 10);
  }
  ["log"](a, b = "info") {
    if (b === "info") aG(this.bz, a);else {
      if (b === "error") aI(this.bz, a);else {
        if (b === "warning") aH(this.bz, a);else aG(this.bz, a);
      }
    }
  }
  async ["checkSock5"]() {
    if (!this.proxyUrl) return {
      "available": true
    };
    try {
      const b = Date.now();
      await this.http.get("http://www.baidu.com", {
        "timeout": 10000
      });
      const f = (Date.now() - b) / 1000;
      return {
        "available": true,
        "response_time": Number(f.toFixed(2)),
        "error": null
      };
    } catch (g) {
      return {
        "available": false,
        "response_time": null,
        "error": String(g)
      };
    }
  }
  async ["User_info"](a = true) {
    const b = {
        "CFIqZ": "宝箱功能已禁用，跳过宝箱开启",
        "VNHLD": "广告上报失败（A）",
        "RspbC": function (k, l, m) {
          return k(l, m);
        },
        "xoGtB": "获取Sig1失败重试",
        "xUEbn": "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
        "UBLki": "3.3.55.2",
        "SkxZz": "2.7.2.2",
        "ervZF": "1091400011",
        "yzlDM": function (k, l) {
          return k(l);
        },
        "IfQrO": "Keep-Alive",
        "yhjYY": "gzip",
        "GrWRV": function (k, l, m, n) {
          return k(l, m, n);
        },
        "FQCXm": function (k, l) {
          return k + l;
        },
        "zBaLZ": "/rest/e/tube/inspire/home&&",
        "WAAxX": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "horIv": "application/json; charset=utf-8",
        "DmOrO": function (k, l) {
          return k === l;
        },
        "ODMgs": "VOQVf",
        "NhpqO": function (k, l) {
          return k >= l;
        },
        "vbzRi": function (k, l) {
          return k || l;
        },
        "MAVIZ": "warning",
        "iVphN": "BLgQj",
        "oBctY": function (k, l) {
          return k / l;
        },
        "jtBmi": function (k, l) {
          return k || l;
        },
        "hWMzT": "Cookie 失效，请重新抓取",
        "RoiyY": "LHskd"
      },
      e = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
      f = {
        "version": "3.3.55.2",
        "appVersion": "2.7.2.2",
        "appId": "1091400011",
        "message": aX(this.message)
      };
    let g = JSON.stringify(f);
    g = g.replaceAll("/", "\\/");
    const h = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/home&&" + g, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      i = await this.http.post(e, g, {
        "headers": h
      }),
      j = i.data;
    if (j?.["result"] === 1) {
      {
        const k = JSON.parse(aW(j.data)),
          l = k.accountInfoV2?.["coinAccount"]?.["amount"],
          m = k.accountInfoV2?.["cashAccount"]?.["amountDisplay"];
        if (Number(l || 0) >= this.max_gold) return this.log("金币达到阈值(" + this.max_gold + ")，停止执行", "warning"), false;
        a && this.log("余额: 金币=" + l + " (≈" + Number(l || 0) / 30000 + ") | 现金=" + m);
        const n = k.watchTubeTaskInfo?.["tasks"] || [];
        this.watchTubeTask = n[0];
        if (!k.dailyTaskInfo) this.log("Cookie 失效，请重新抓取");
        const o = k.dailyTaskInfo?.["tasks"] || [];
        for (const q of o) {
          {
            if (q.id === 6002) {
              if (a) await this.SignIn(q);
            }
            if (q.id === 6005) this.adData = q;
          }
        }
        return true;
      }
    }
    this.log("用户信息获取失败: " + JSON.stringify(j));
    return false;
  }
  async ["Treasure_Box"]() {
    const b = "https://tube.e.kuaishou.com/rest/e/tube/inspire/treasureBox",
      e = aX(this.message);
    let f = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": e
    });
    f = f.replaceAll("/", "\\/");
    const g = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/treasureBox&&" + f, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      h = await this.http.post(b, f, {
        "headers": g
      }),
      i = h.data;
    if (i?.["result"] === 1) {
      const j = JSON.parse(aW(i.data));
      this.BoxAdInfo = j?.["popupInfo"]?.["buttonInfo"]?.["linkUrl"];
      const k = j.id,
        l = j.taskToken,
        m = j?.["popupInfo"]?.["stages"] || [];
      let n = "";
      for (const o of m) {
        {
          if (o.status === 13) {
            {
              n = o.stageIndex;
              break;
            }
          } else {
            if (o.status === 10) {
              const s = Math.floor((o.countdown || 0) / 1000 / 60),
                t = o.subtitle;
              this.log("宝箱" + t + "，预计剩余 " + s + " 分钟");
            }
          }
        }
      }
      if (n !== "") {
        const u = await this.Task_Report(k, l, n);
        if (u?.["taskFinished"]) this.log("宝箱开启成功，本次获得 " + u.amount + " 金币");
      }
    } else this.log("宝箱信息拉取失败: " + JSON.stringify(i));
  }
  async ["Event_Report"](a) {
    const e = "https://tube.e.kuaishou.com/rest/e/tube/inspire/event/report",
      f = aY(this.message, a);
    let g = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": f
    });
    g = g.replaceAll("/", "\\/");
    const h = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/event/report&&" + g, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      i = await this.http.post(e, g, {
        "headers": h
      });
    return i.data;
  }
  async ["Task_Report"](a, b, e) {
    const g = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      h = aZ(this.message, a, b, e);
    let i = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": h
    });
    i = i.replaceAll("/", "\\/");
    const j = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + i, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      k = await this.http.post(g, i, {
        "headers": j
      }),
      l = k.data;
    if (l?.["result"] === 1) return JSON.parse(aW(l.data));
    this.log("任务上报未通过");
    return null;
  }
  async ["SignIn"](a) {
    const e = a.popupInfo,
      f = e.taskId,
      g = e.taskToken,
      h = e.stages || [];
    let i = null;
    for (const k of h) {
      if (k.title === "今天") {
        i = k;
        break;
      }
    }
    if (!i) {
      this.log("今日已签到");
      return;
    }
    const j = i.stageIndex;
    if (i.status === 10) {
      this.log("进行签到");
      const l = await this.Task_Report(f, g, j);
      if (l?.["statusCode"] === 1003) this.log(l.errorMessage);
    }
  }
  async ["GetAd"](a) {
    const e = "https://open.e.kuaishou.com/rest/e/v3/open/univ",
      f = b0(this.message, a);
    let g = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": f
    });
    g = g.replaceAll("/", "\\/");
    const h = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig1": await bb("/rest/e/v3/open/univ&&" + g, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      i = await this.http.post(e, g, {
        "headers": h
      }),
      j = i.data;
    if (j?.["result"] === 1) return JSON.parse(aW(j.impAdInfo));
    return [];
  }
  async ["Upload_Video_Time"]() {
    const b = Date.now(),
      e = {
        "eventType": "WATCH_TUBE",
        "eventTime": b,
        "data": "{\"tubeId\":\"3412489\",\"episodeNumber\":1,\"photoId\":\"77298100\",\"watchTime\":30}"
      },
      f = await this.Event_Report(e);
    if (f?.["result"] === 1) this.log("时长上报完成");
  }
  async ["watchTube"]() {
    const b = this.watchTubeTask?.["taskStatus"];
    if (b === 13) {
      {
        const e = await this.Task_Report(this.watchTubeTask.id, this.watchTubeTask.extParam.taskToken, this.watchTubeTask.process);
        if (e?.["taskFinished"]) this.log("任务完成，领取 " + e.amount + " 金币");
      }
    } else b === 10 && (this.log(this.watchTubeTask?.["subtitle"] || "继续观看以解锁奖励"), await this.Upload_Video_Time());
  }
  async ["WatchAD"]() {
    if (!this.adData) return this.log("今日广告任务已完成"), false;
    const b = this.adData.extParam.taskToken,
      e = this.adData.id;
    let f = this.adData.buttonInfo.linkUrl;
    while (f.length % 4 !== 0) f += "=";
    const g = JSON.parse(Buffer.from(f, "base64").toString("utf8")),
      h = g.posId,
      i = await this.GetAd(h);
    let j, k, l, m;
    if (i.length >= 1) {
      {
        const v = i[0];
        j = v.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
        k = v.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
        const w = JSON.parse(v.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        l = w.transId;
        m = String(l || "").split("_");
      }
    } else {
      const x = Date.now();
      j = 148407627585 + b2(0, 1000000);
      k = b2(400, 50400);
      l = "2008597857549383489_" + j + "_" + x;
      m = l.split("_");
    }
    const n = b1(this.message, h, k, m[0], j, b, m[0] + "_" + m[1], m[2], e);
    await aJ(b2(16, 32) * 1000);
    const o = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let p = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": n
    });
    p = p.replaceAll("/", "\\/");
    const q = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + p, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      s = await this.http.post(o, p, {
        "headers": q
      }),
      t = s.data;
    if (t?.["result"] === 1) {
      const y = JSON.parse(aW(t.data));
      if (y?.["taskFinished"]) {
        this.log("广告完成，获得 " + y.amount + " 金币");
        if (y.amount === 50) return this.log("此号疑似黑号"), false;
        if (y.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
        if (y.popUp && y.popUp.id === "continuousWatchAdPopup") {
          const z = y.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
          let A = z;
          while (A.length % 4 !== 0) A += "=";
          const B = JSON.parse(Buffer.from(A, "base64").toString("utf8")),
            C = B.extParams,
            D = B.posId,
            E = B.businessId;
          await aJ(b2(2, 6) * 1000);
          this.AdXunHuan = 0;
          await this.MoreWatchAD(C, D, E);
        }
      } else return this.log("广告上报失败（A）"), false;
    } else return this.log("广告上报失败（B）"), false;
    return true;
  }
  async ["MoreWatchAD"](a, b, e) {
    const f = {
      "UhRnq": function (s, t) {
        return s + t;
      },
      "vWWDT": function (s, t, u) {
        return s(t, u);
      },
      "ZBroW": "SOCKS5 代理格式不正确，请按要求填写",
      "yQaWM": function (s, t) {
        return s >= t;
      },
      "JXikF": function (s, t) {
        return s !== t;
      },
      "MSUKn": "AAOgZ",
      "VUFlm": function (s, t) {
        return s(t);
      },
      "nRUfy": function (s, t) {
        return s || t;
      },
      "FeFrq": function (s, t) {
        return s + t;
      },
      "yqcuY": function (s, t, u) {
        return s(t, u);
      },
      "GyRHB": function (s, t, u, v, w, x, y, z, A, B, C) {
        return s(t, u, v, w, x, y, z, A, B, C);
      },
      "TajkS": function (s, t) {
        return s * t;
      },
      "jDwgU": function (s, t, u) {
        return s(t, u);
      },
      "AiRYo": "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      "LXYat": "3.3.55.2",
      "pWSJA": "2.7.2.2",
      "Spfat": "1091400011",
      "YWpqY": "Keep-Alive",
      "dXwQG": "gzip",
      "LIhqN": function (s, t, u, v) {
        return s(t, u, v);
      },
      "wMDVT": "/rest/e/tube/inspire/task/report&&",
      "enkkA": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "QWxsb": "application/json; charset=utf-8",
      "IZzHT": function (s, t) {
        return s === t;
      },
      "tzHJa": function (s, t) {
        return s === t;
      },
      "ZxyXS": "vBtmn",
      "EcKqO": "wMnbe",
      "fKXRY": "wzLqS",
      "EcYjZ": "Gfeai",
      "hujbM": function (s, t) {
        return s === t;
      },
      "TSVVL": "此号疑似黑号",
      "dvCmk": function (s, t) {
        return s < t;
      },
      "qFrEs": "此号疑似半黑 尝试手动看视频提高下金币量吧",
      "LbupA": function (s, t) {
        return s === t;
      },
      "fJpUB": "continuousWatchAdPopup",
      "YkrcM": "khKDi",
      "WzLGa": "kjuYf",
      "XqeBG": function (s, t) {
        return s % t;
      },
      "rTGdB": "base64",
      "muVWa": "utf8",
      "kmcJz": function (s, t) {
        return s(t);
      },
      "bDGtu": function (s, t) {
        return s * t;
      },
      "hcwdy": function (s, t, u) {
        return s(t, u);
      },
      "PcmHW": "广告上报失败（A）",
      "MHcIU": "广告上报失败（B）"
    };
    this.AdXunHuan += 1;
    const g = await this.GetAd(b);
    let h, i, j, k;
    if (g.length >= 1) {
      {
        const t = g[0];
        h = t.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
        i = t.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
        const u = JSON.parse(t.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        j = u.transId;
        k = String(j || "").split("_");
      }
    } else {
      const v = Date.now();
      h = 148407627585 + b2(0, 1000000);
      i = b2(400, 50400);
      j = "2008597857549383489_" + h + "_" + v;
      k = j.split("_");
    }
    const l = b1(this.message, b, i, k[0], h, a, k[0] + "_" + k[1], k[2], e, this.AdXunHuan);
    await aJ(b2(18, 30) * 1000);
    const m = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let n = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": l
    });
    n = n.replaceAll("/", "\\/");
    const o = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + n, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      p = await this.http.post(m, n, {
        "headers": o
      }),
      q = p.data;
    if (q?.["result"] === 1) {
      {
        const x = JSON.parse(aW(q.data));
        if (x?.["taskFinished"]) {
          {
            if (x.amount === 50) return this.log("此号疑似黑号"), false;
            if (x.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
            this.log("嵌套广告第 " + this.AdXunHuan + " 次完成，获得 " + x.amount + " 金币");
            if (x.popUp && x.popUp.id === "continuousWatchAdPopup") {
              {
                const y = x.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
                let z = y;
                while (z.length % 4 !== 0) z += "=";
                const A = JSON.parse(Buffer.from(z, "base64").toString("utf8")),
                  B = A.extParams,
                  C = A.posId,
                  D = A.businessId;
                await aJ(b2(2, 6) * 1000);
                await this.MoreWatchAD(B, C, D);
              }
            } else this.log("嵌套广告累计次数：" + this.AdXunHuan), this.AdXunHuan = 0;
          }
        } else this.log("广告上报失败（A）");
      }
    } else this.log("广告上报失败（B）");
    return true;
  }
  async ["BoxAd"]() {
    this.BoxAdXunHuan = 0;
    let b = this.BoxAdInfo || "";
    if (!b || b.trim() === "") {
      this.log("宝箱广告信息为空，跳过宝箱广告任务");
      return;
    }
    try {
      {
        while (b.length % 4 !== 0) b += "=";
        const f = JSON.parse(Buffer.from(b, "base64").toString("utf8"));
        if (!f || !f.businessId || !f.extParams || !f.posId) {
          this.log("宝箱广告数据结构无效，跳过宝箱广告任务");
          return;
        }
        const g = f.businessId,
          h = f.extParams,
          i = f.posId;
        await this.WatchBoxAd(h, i, g);
      }
    } catch (k) {
      {
        this.log("宝箱广告数据解析失败: " + k.message + "，跳过宝箱广告任务");
        return;
      }
    }
  }
  async ["WatchBoxAd"](a, b, f) {
    const g = {
      "UrkGa": function (t, u) {
        return t === u;
      },
      "EwiFu": "success",
      "ALlaB": function (t, u, v) {
        return t(u, v);
      },
      "crAhu": "未知错误",
      "ZkeAc": function (t, u, v) {
        return t(u, v);
      },
      "xigfP": function (t, u) {
        return t(u);
      },
      "qdSRn": function (t, u) {
        return t(u);
      },
      "ehMKA": "第6部分(代理信息)格式可能不正确，应使用 | 或 # 分隔",
      "gwoWD": function (t, u) {
        return t(u);
      },
      "QDZRc": "账号金币已达上限，停止执行",
      "tQQpe": function (t, u) {
        return t >= u;
      },
      "bBSCM": function (t, u) {
        return t(u);
      },
      "wilad": function (t, u) {
        return t || u;
      },
      "LsZIb": "xqKec",
      "djHYk": function (t, u) {
        return t + u;
      },
      "qNyQg": function (t, u, v) {
        return t(u, v);
      },
      "Qhkqg": function (t, u) {
        return t + u;
      },
      "jpxew": function (t, u, v) {
        return t(u, v);
      },
      "vLBGG": function (t, u) {
        return t + u;
      },
      "fvIKB": function (t, u, v, w, x, y, z, A, B, C, D) {
        return t(u, v, w, x, y, z, A, B, C, D);
      },
      "vHWtk": function (t, u) {
        return t(u);
      },
      "hIcyO": function (t, u) {
        return t * u;
      },
      "Nnqux": function (t, u, v) {
        return t(u, v);
      },
      "KYUUh": "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      "nvgHw": "3.3.55.2",
      "AEYfo": "2.7.2.2",
      "ATkXJ": "1091400011",
      "VSVQD": "Keep-Alive",
      "mMnSj": "gzip",
      "tfcUp": function (t, u, v, w) {
        return t(u, v, w);
      },
      "fCQik": "/rest/e/tube/inspire/task/report&&",
      "rSwch": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "hYeme": "application/json; charset=utf-8",
      "kDKDg": function (t, u) {
        return t === u;
      },
      "HmIVG": function (t, u) {
        return t === u;
      },
      "Dqjyp": "nUuzN",
      "KhkRI": "lLZXV",
      "nKUQT": function (t, u) {
        return t !== u;
      },
      "yPIef": "wMONM",
      "QKSwW": "此号疑似黑号",
      "PUDXR": function (t, u) {
        return t < u;
      },
      "LIhrX": "此号疑似半黑 尝试手动看视频提高下金币量吧",
      "ZUpBc": function (t, u) {
        return t === u;
      },
      "cgrlj": "continuousWatchAdPopup",
      "Xfusv": function (t, u) {
        return t !== u;
      },
      "OyDEX": function (t, u) {
        return t !== u;
      },
      "nsdPg": "bTVWb",
      "rmHWc": "CrTZF",
      "iEwVC": function (t, u) {
        return t !== u;
      },
      "dNhTw": function (t, u) {
        return t % u;
      },
      "ycelu": "base64",
      "KzMpZ": "utf8",
      "LOaVL": "MSoXy",
      "IWQfT": function (t, u) {
        return t * u;
      },
      "mBXJI": "嵌套广告数据结构无效，停止嵌套广告",
      "QbbaD": "嵌套广告链接为空，停止嵌套广告",
      "iBhWV": "广告上报失败（A）",
      "JdJjc": "广告上报失败（B）"
    };
    this.BoxAdXunHuan += 1;
    if (!(await this.User_info(false))) return this.log("账号金币已达上限，停止执行"), false;
    const h = await this.GetAd(b);
    let i, j, k, l;
    if (h.length >= 1) {
      const t = h[0];
      i = t.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      j = t.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const u = JSON.parse(t.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        k = u.transId;
        l = String(k || "").split("_");
      } catch (v) {
        {
          this.log("广告回调信息解析失败: " + v.message + "，使用默认值");
          const w = Date.now();
          i = i || 148407627585 + b2(0, 1000000);
          j = j || b2(400, 50400);
          k = "2008597857549383489_" + i + "_" + w;
          l = k.split("_");
        }
      }
    } else {
      const y = Date.now();
      i = 148407627585 + b2(0, 1000000);
      j = b2(400, 50400);
      k = "2008597857549383489_" + i + "_" + y;
      l = k.split("_");
    }
    const m = b1(this.message, b, j, l[0], i, a, l[0] + "_" + l[1], l[2], f, this.BoxAdXunHuan);
    await aJ(b2(18, 30) * 1000);
    const n = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let o = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": m
    });
    o = o.replaceAll("/", "\\/");
    const p = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + o, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      q = await this.http.post(n, o, {
        "headers": p
      }),
      s = q.data;
    if (s?.["result"] === 1) {
      try {
        {
          const B = JSON.parse(aW(s.data));
          if (B?.["taskFinished"]) {
            if (B.amount === 50) return this.log("此号疑似黑号"), false;
            if (B.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
            this.log("宝箱广告第 " + this.BoxAdXunHuan + " 次完成，获得 " + B.amount + " 金币");
            if (B.popUp && B.popUp.id === "continuousWatchAdPopup") {
              const C = B.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
              if (C && C.trim() !== "") {
                try {
                  let D = C;
                  while (D.length % 4 !== 0) D += "=";
                  const E = JSON.parse(Buffer.from(D, "base64").toString("utf8"));
                  if (E && E.extParams && E.posId && E.businessId) {
                    {
                      const G = E.extParams,
                        H = E.posId,
                        I = E.businessId;
                      await aJ(b2(2, 6) * 1000);
                      const J = await this.WatchBoxAd(G, H, I);
                      if (!J) return false;
                    }
                  } else this.log("嵌套广告数据结构无效，停止嵌套广告");
                } catch (K) {
                  this.log("嵌套广告数据解析失败: " + K.message + "，停止嵌套广告");
                }
              } else this.log("嵌套广告链接为空，停止嵌套广告");
            } else this.log("本次共执行[" + this.BoxAdXunHuan + "]次宝箱广告"), this.BoxAdXunHuan = 0;
          } else this.log("广告上报失败（A）");
        }
      } catch (M) {
        this.log("广告响应解析失败: " + M.message);
        return false;
      }
    } else this.log("广告上报失败（B）");
    return true;
  }
  async ["main"]() {
    await this.User_info();
    const b = String(process.env.baoxiang || "").trim();
    b === "1" ? (this.log("宝箱功能已启用，开始开启宝箱"), await this.Treasure_Box()) : this.log("宝箱功能已禁用，跳过宝箱开启");
    await aJ(b2(3, 6) * 1000);
    while (true) {
      if (!(await this.User_info(false))) return;
      if (!(await this.WatchAD())) break;
      await aJ(b2(15, 40) * 1000);
    }
    this.log("开始执行宝箱广告");
    await this.BoxAd();
    await this.watchTube();
  }
}
async function bd() {
  const b = await aQ();
  if (!b) {
    console.log("❌ 系统环境检查未通过，程序终止运行");
    return;
  }
  const f = process.env[aC];
  if (!f) {
    {
      console.warn("请先设置环境变量[" + aC + "]");
      return;
    }
  }
  const g = process.env.xfkm;
  if (!g || !g.trim()) {
    console.error("未检测到环境变量[xfkm]，请先在青龙面板设置 xfkm 后再运行。");
    return;
  }
  if (aD) {
    {
      if (au) try {
        const n = await au.get("http://125.77.163.37:18888/gg.php", {
          "timeout": 10000
        });
        let o = n?.["data"] ?? "";
        if (Buffer.isBuffer(o)) o = o.toString("utf8");
        o = String(o).trim();
        if (o && o !== "0") {
          console.log(o, "\n\n\n");
        }
      } catch {} else {
        console.log("⚠️ axios模块不可用，无法获取公告信息");
      }
    }
  }
  if (aE) {
    {
      const s = b2(10, 60);
      console.log("已启用随机延时：" + s + " 秒");
      await aJ(s * 1000);
    }
  }
  const h = be(f);
  console.log("账号数量：" + h.length);
  console.log("▶ 开始运行：" + aA + " " + aB);
  const i = Date.now(),
    j = parseInt(process.env.maxth || "1", 10);
  if (ax) {
    {
      const u = ax(Math.max(1, j));
      await Promise.all(h.map((v, w) => u(async () => {
        try {
          const y = new bc(v),
            z = await y.checkSock5();
          if (!z.available) y.log("代理不可用 错误信息: [" + z.error + "]", "error");else {
            if (z.response_time != null) y.log("代理可用 响应时间: [" + z.response_time + "秒]");
          }
          await y.main();
        } catch (A) {
          console.error("账号" + (w + 1) + "执行错误:", A);
        }
      })));
    }
  } else {
    console.log("⚠️ 并发控制不可用，将使用顺序执行模式");
    console.log("💡 如需并发执行，请降级p-limit版本：npm install p-limit@6.1.0");
    for (let w = 0; w < h.length; w++) {
      try {
        const x = new bc(h[w]),
          y = await x.checkSock5();
        if (!y.available) x.log("代理不可用 错误信息: [" + y.error + "]", "error");else {
          if (y.response_time != null) x.log("代理可用 响应时间: [" + y.response_time + "秒]");
        }
        await x.main();
      } catch (z) {
        console.error("账号" + (w + 1) + "执行错误:", z);
      }
    }
  }
  const k = (Date.now() - i) / 1000;
  console.log("\n■ 运行结束：" + aA);
  console.log("⏱ 总耗时：" + k.toFixed(2) + " 秒");
}
function be(a) {
  if (a.includes("\n")) return a.split("\n").filter(Boolean);
  if (a.includes("&")) return a.split("&").filter(Boolean);
  return [a];
}
require.main === module && bd().catch(a => {
  console.error(a);
  process.exit(1);
});