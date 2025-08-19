//Tue Aug 19 2025 11:19:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const G = function () {
  let h = true;
  return function (i, j) {
    const k = {
      "ImYXE": function (l, m) {
        return l(m);
      },
      "WtwGc": function (l, m) {
        return l + m;
      },
      "AFbFD": "return (function() ",
      "gduSr": "{}.constructor(\"return this\")( )",
      "HPpZg": function (l, m) {
        return l < m;
      },
      "xojOL": "nebula.kuaishou.com",
      "VMnAk": "keep-alive",
      "xFIrh": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Bvnha": "kuaishou.api_st=",
      "gdCuY": ";client_key=2ac2a76d;",
      "rnzrb": "application/json",
      "FJLNF": "/rest/r/ad/task/report",
      "kLCOm": function (l, m) {
        return l !== m;
      },
      "Baprp": "RDncp",
      "rSIfy": "sJPJb"
    };
    {
      const m = h ? function () {
        if (j) {
          {
            const n = j.apply(i, arguments);
            j = null;
            return n;
          }
        }
      } : function () {};
      h = false;
      return m;
    }
  };
}();
(function () {
  G(this, function () {
    const i = new RegExp("function *\\( *\\)"),
      j = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      k = a2("init");
    if (!i.test(k + "chain") || !j.test(k + "input")) {
      k("0");
    } else a2();
  })();
})();
const H = new a1("快手饭补ad任务"),
  J = require("fs"),
  K = require("path");
let L = ("undefined" != typeof process && process.versions && process.versions.node ? process.env.k : H.getdata("k")) || "",
  M = [],
  N = 0,
  O = 0,
  P = Date.now(),
  Q = P - 25000,
  R = [];
async function V() {
  try {
    {
      let h = {
          "method": "get",
          "url": "http://43.136.61.3:39999/jk.php",
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        },
        i = await a0(h);
      if (i && Array.isArray(i)) return R = i, true;
      console.log("接口错误");
    }
  } catch (k) {
    console.log("接口错误");
  }
}
function W(g, h = "") {
  const j = R.find(l => l.name === g);
  j && j.interfaces && 0 !== j.interfaces.length || console.log("接口错误");
  const k = Math.floor(Math.random() * j.interfaces.length);
  return j.interfaces[k];
}
function X() {
  return Math.floor(10001 * Math.random()) + 30000;
}
async function Y() {
  console.log("\n================== 饭补ad启动 ==================\n");
  await V();
  let h = 0;
  for (; h < 10;) {
    h++;
    let i = [];
    for (let j of M) {
      const k = X();
      console.log("账号[" + j.index + "]  随机延迟 " + Math.round(k / 1000) + "秒");
      i.push((async () => (await new Promise(l => setTimeout(l, k)), j.execute9362Task()))());
    }
    await Promise.all(i);
  }
}
(function () {
  const h = function () {
      {
        let k;
        try {
          k = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (m) {
          k = window;
        }
        return k;
      }
    },
    i = h();
  i.setInterval(a2, 2000);
})();
class Z {
  constructor(g) {
    if (this.index = ++N, this.ck = g.split("#"), this.ck.length < 5) return console.log("账号[" + this.index + "] CK格式错误: " + g), void (this.valid = false);
    this.valid = true;
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": "kuaishou.api_st=" + (this.ck[1] || "").replace("kuaishou.api_st=", "") + ";client_key=2ac2a76d;",
      "content-type": "application/json"
    };
    this.salt = this.ck[0];
    this.path = "/rest/r/ad/task/report";
    this.query = "mod=Xiaomi%28MI%2011%29&appver=13.2.41.9745&egid=" + this.ck[3] + "&did=" + this.ck[4];
  }
  async ["execute9362Task"]() {
    if (this.valid) try {
      const h = await this.getAdInfo();
      if (!h) return void console.log("账号[" + this.index + "] 获取广告信息失败");
      const i = X();
      console.log("账号[" + this.index + "] 获取广告信息成功，等待 " + Math.round(i / 1000) + " 秒后继续...");
      await new Promise(k => setTimeout(k, i));
      const j = await this.generateSig(h.cid, h.llsid);
      if (!j) return void console.log("账号[" + this.index + "] 生成签名失败，跳过此账号");
      await this.submitReport(j.sig, j.sig3, j.sigtoken, j.post);
    } catch (k) {
      console.log("账号[" + this.index + "] 任务执行失败: " + k.message);
    }
  }
  async ["getAdInfo"]() {
    try {
      let h = {
          "method": "get",
          "url": "http://" + W("enc", this.index).url,
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          },
          "qs": {
            "salt": this.ck[0],
            "userId": this.ck[2],
            "did": this.ck[4],
            "oaid": "",
            "apist": this.ck[1]
          }
        },
        i = await a0(h);
      if (i && "OK" == i.errorMsg) {
        i.feeds && i.feeds[0] && i.feeds[0].caption && console.log("账号[" + this.index + "] " + i.feeds[0].caption);
        let j = i.feeds[0].exp_tag.split("/")[1].split("_")[0];
        return {
          "cid": i.feeds[0].ad.creativeId,
          "llsid": j,
          "mediaScene": "video"
        };
      }
      return null;
    } catch (k) {
      console.log("账号[" + this.index + "] 获取广告信息异常");
      return null;
    }
  }
  async ["generateSig"](g, h) {
    const j = "bizStr={\"businessId\":9362,\"endTime\":" + Q + ",\"extParams\":\"\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + g + ",\"extInfo\":\"\",\"llsid\":" + h + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + P + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
    try {
      {
        const l = ("undefined" != typeof process && process.versions && process.versions.node ? process.env.km : H.getdata("km")) || "";
        let m = {
            "method": "post",
            "url": "http://" + W("sign", this.index).url + "?km=" + encodeURIComponent(l),
            "headers": {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            },
            "body": JSON.stringify({
              "query": this.query,
              "body": j,
              "salt": this.salt,
              "path": this.path
            })
          },
          n = await a0(m);
        return n && n.Sig && n.Sig3 && n.NsSig ? {
          "sig": n.Sig,
          "sig3": n.Sig3,
          "sigtoken": n.NsSig,
          "post": j
        } : (console.log("账号[" + this.index + "] 签名接口返回错误:", JSON.stringify(n, null, 2)), null);
      }
    } catch (p) {
      console.log("账号[" + this.index + "] 生成签名异常");
      return null;
    }
  }
  async ["submitReport"](g, h, j, k) {
    try {
      let m = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + g + "&__NS_sig3=" + h + "&__NS_xfalcon=&__NStokensig=" + j,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou.api_st=" + (this.ck[1] || "").replace("kuaishou.api_st=", ""),
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": k
        },
        p = await a0(m);
      p && 1 == p.result ? console.log("账号[" + this.index + "] 饭补看广告" + p.data.neoAmount + "金币奖励！") : console.log("账号[" + this.index + "] 奖励失败,多次失败请先手动点击饭补的广告是否正常");
    } catch (q) {}
  }
}
function a0(g) {
  const i = require("request");
  return new Promise(j => {
    i(g, (k, l, m) => {
      const n = {
        "BIUoA": function (p, q) {
          return p(q);
        }
      };
      {
        if (k) j(null);else try {
          j(JSON.parse(m));
        } catch (q) {
          j(m);
        }
      }
    });
  });
}
function a1(g) {
  return new class {
    constructor() {
      this.name = g;
      this.logs = [];
      console.log("🔔 " + g + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof process && process.versions && process.versions.node;
    }
    ["getdata"](i) {
      return null;
    }
    ["log"](...i) {
      this.logs.push(...i);
      console.log(...i);
    }
    ["done"]() {
      console.log("🔔 " + this.name + ", 结束!");
    }
  }();
}
(async () => {
  try {
    const h = require("http"),
      i = "http://43.136.61.3:39999/gg.php";
    await new Promise((j, k) => {
      h.get(i, n => {
        if (404 === n.statusCode || n.statusCode >= 500) return console.log("小主,欢迎您使用本脚本"), void j();
        let q = "";
        n.on("data", r => q += r);
        n.on("end", () => {
          q = q.trim();
          q && "0" !== q && 200 === n.statusCode && console.log(q);
          j();
        });
      }).on("error", () => {
        j();
      });
    });
  } catch (j) {}
  if (!L) return console.log("未找到k账号环境变量"), console.log("格式为: salt#kuaishou.api_st#userId#egid#did"), void console.log("多账号用@隔开");
  {
    let k = "@";
    for (let l of L.split(k)) l && (l.split("#").length >= 5 ? M.push(new Z(l)) : console.log("CK格式错误，跳过: " + l));
    O = M.length;
    console.log("共找到" + O + "个有效账号");
  }
  await Y();
})().catch(g => console.log(g)).finally(() => H.done());
function a2(g) {
  const h = {
    "TCXKk": function (j, k) {
      return j === k;
    },
    "qSaUC": "OdvrQ",
    "LWtom": function (j, k) {
      return j !== k;
    },
    "IhiNl": "lWkRf",
    "IKmpc": "InUZo",
    "AHYBV": "string",
    "TRSIf": function (j, k) {
      return j === k;
    },
    "psCuc": "Xhtvj",
    "AaHds": "while (true) {}",
    "SwqUd": "counter",
    "eVJUX": function (j, k) {
      return j !== k;
    },
    "HFciS": function (j, k) {
      return j + k;
    },
    "uOtkS": function (j, k) {
      return j / k;
    },
    "mqtFz": "length",
    "SSefk": function (j, k) {
      return j % k;
    },
    "ttaZH": function (j, k) {
      return j + k;
    },
    "IDvSN": "debu",
    "cJtqr": "gger",
    "wgrGb": "action",
    "BLDZQ": "stateObject",
    "KnfhM": function (j, k) {
      return j(k);
    },
    "dHftx": "接口错误",
    "imkPc": function (j, k) {
      return j !== k;
    },
    "nGWSo": "hLqlF"
  };
  function i(j) {
    {
      if (typeof j === "string") {
        return function (k) {}.constructor("while (true) {}").apply("counter");
      } else ("" + j / j).length !== 1 || j % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
      i(++j);
    }
  }
  try {
    if (g) {
      return i;
    } else i(0);
  } catch (k) {}
}