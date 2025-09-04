//Thu Sep 04 2025 12:37:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var Q = typeof globalThis !== "undefined" && globalThis.AndroidBridge ? globalThis.AndroidBridge : typeof Q !== "undefined" ? Q : null;
function R() {
  try {
    {
      if (Q && Q.log) Q.log([].map.call(arguments, b => String(b)).join(" "));
    }
  } catch (f) {}
}
function S() {
  var b = [];
  for (var f = 0; f < arguments.length; f++) {
    {
      var g = String(arguments[f] || "");
      if (!g) continue;
      if (g[0] === "/" && f > 0) g = g.replace(/^\/+/, "");
      b.push(g.replace(/\\/g, "/"));
    }
  }
  return b.join("/").replace(/\\/g, "/").replace(/\/+/g, "/");
}
function T(a) {
  if (!Q || !Q.readText) return null;
  try {
    return Q.readText(a);
  } catch (g) {
    return null;
  }
}
function U(a, b) {
  if (!Q || !Q.writeText) return false;
  try {
    return !!Q.writeText(a, String(b));
  } catch (g) {
    return false;
  }
}
async function V(a, b, f) {
  try {
    {
      if (!Q || !Q.http) return R("HTTP不可用：AndroidBridge.http 缺失"), null;
      var j = {
        "method": String(a.method || "GET").toUpperCase(),
        "url": String(a.url || ""),
        "headers": a.headers || {},
        "body": typeof a.body === "string" ? a.body : a.body ? JSON.stringify(a.body) : "",
        "timeout": a.timeout || 20000,
        "proxy": f || null
      };
      var i = await Q.http(j);
      var h = i && typeof i.body === "string" ? i.body : "";
      try {
        return JSON.parse(h);
      } catch (m) {
        return h;
      }
    }
  } catch (o) {
    R("HTTP请求失败: " + (o && o.message || o));
    return null;
  }
}
function W(a) {
  this.name = a;
  this.logSeparator = "\n";
}
W.prototype.isNode = function () {
  return true;
};
W.prototype.getdata = function () {
  return null;
};
W.prototype.setdata = function () {
  return false;
};
W.prototype.log = function () {
  try {
    R([].slice.call(arguments).join(this.logSeparator));
  } catch (b) {}
};
W.prototype.done = function () {};
var X = false;
if (!Q) {
  X = true;
  try {
    var Y = require("fs");
    T = function (a) {
      const b = {
        "dZAOp": function (f, g) {
          return f === g;
        },
        "djOKc": "Rjcar",
        "bsLOb": "utf8"
      };
      try {
        return Y.readFileSync(a, "utf8");
      } catch (g) {
        return null;
      }
    };
    U = function (a, b) {
      try {
        Y.writeFileSync(a, String(b));
        return true;
      } catch (g) {
        return false;
      }
    };
  } catch (aK) {}
  if (typeof fetch === "function") {
    async function aL(a, b, f) {
      const g = {
        "euUfp": "3|5|2|1|4|0",
        "Lzdot": "sign",
        "oUJXW": function (m, n) {
          return m(n);
        },
        "qJcZX": "enc",
        "osDeY": function (m, n) {
          return m(n);
        },
        "vUuCl": function (m, n) {
          return m + n;
        },
        "YAsXP": function (m, n) {
          return m * n;
        },
        "tpVTR": function (m, n) {
          return m - n;
        },
        "AbILW": function (m, n) {
          return m === n;
        },
        "tIFGQ": "GIvAZ",
        "UZKke": function (m, n) {
          return m(n);
        },
        "ITjyE": "GET",
        "ATJCM": function (m, n) {
          return m === n;
        },
        "MFEvZ": "HEAD",
        "KaHNU": function (m, n) {
          return m === n;
        },
        "YebKt": "string",
        "xEDur": function (m, n, o) {
          return m(n, o);
        },
        "EjNZz": function (m, n) {
          return m !== n;
        },
        "RIwOX": "dvkau",
        "GTlPp": function (m, n) {
          return m !== n;
        },
        "WNNMu": "LXggD",
        "ENVyC": "AZjYb",
        "zJpSE": function (m, n) {
          return m + n;
        },
        "Rctfc": "[fetch] HTTP请求失败: "
      };
      try {
        {
          var h = String(a.method || "GET").toUpperCase(),
            i = a.headers || {},
            j = h === "GET" || h === "HEAD" ? undefined : typeof a.body === "string" ? a.body : a.body ? JSON.stringify(a.body) : undefined,
            k = await fetch(String(a.url || ""), {
              "method": h,
              "headers": i,
              "body": j
            }),
            l = await k.text();
          try {
            return JSON.parse(l);
          } catch (n) {
            return l;
          }
        }
      } catch (r) {
        console.log("[fetch] HTTP请求失败: " + (r && r.message || r));
        return null;
      }
    }
  }
}
const Z = new W("ks200"),
  a0 = "ks200",
  a1 = "phid";
function a2() {
  try {
    var j = ["config.txt", "ks200.txt", ".env"];
    for (var l = 0; l < j.length; l++) {
      var m = j[l],
        n = T(m);
      if (n && String(n).length) {
        var o = {},
          p = String(n).split("\n");
        for (var r = 0; r < p.length; r++) {
          {
            var t = p[r].trim();
            if (!t || t.indexOf("#") === 0) continue;
            var u = t.indexOf("=");
            if (u > 0) {
              var v = t.slice(0, u).trim(),
                w = t.slice(u + 1).trim();
              o[v] = w;
            }
          }
        }
        return o;
      }
    }
    return {};
  } catch (y) {
    Z.log("⚠️ 配置文件读取失败: " + (y && y.message || y));
    return {};
  }
}
const a3 = a2();
let a7 = a3.phid || (Z.isNode() ? process.env[a1] : Z.getdata(a1)) || "",
  a8 = a3.km || (Z.isNode() ? process.env.km : Z.getdata("km")) || "",
  a9 = a3.jinbi || (Z.isNode() ? process.env.jinbi : Z.getdata("jinbi")) || "";
const aa = 0;
let ab = 0,
  ac = ["@", "\n"],
  ad = msg = "",
  ag = a3.ks200 || (Z.isNode() ? process.env[a0] : Z.getdata(a0)) || "",
  ah = null;
function ai() {
  return null;
}
let aj = [],
  ak = 0,
  al = 0,
  am = Date.now(),
  an = am - 25000;
const ao = new Date(),
  ap = ao.getHours();
let aq = [],
  ar = 20000,
  as = 30000;
const at = a3.xz || (Z.isNode() ? process.env.xz : Z.getdata("xz")) || "";
at === "0" && (ar = 0, as = 5000);
const au = 10;
async function av() {
  try {
    const f = "http://125.77.163.37:18999/jk.php",
      g = await fetch(f, {
        "method": "GET",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      }),
      h = await g.text();
    let i = null;
    try {
      i = JSON.parse(h);
    } catch (k) {
      i = h;
    }
    function j(m) {
      const n = {
        "qCAUf": function (C, D) {
          return C === D;
        },
        "ZETEm": "string",
        "oyrWb": function (C, D) {
          return C === D;
        },
        "RciZx": "object",
        "uGcrF": function (C, D) {
          return C(D);
        },
        "OMCIY": function (C, D) {
          return C === D;
        },
        "YGDZV": "tEDsV",
        "qsFXh": "odcFL",
        "JhrbT": function (C, D) {
          return C !== D;
        },
        "hgubP": "gMbhL",
        "uoMMa": "YWRTd",
        "XmYVH": function (C, D) {
          return C === D;
        }
      };
      {
        if (Array.isArray(m)) return m;
        if (!m) return null;
        if (typeof m === "string") {
          try {
            return j(JSON.parse(m));
          } catch (D) {
            return null;
          }
        }
        if (typeof m === "object") {
          function F(G) {
            if (!G) return [];
            if (Array.isArray(G)) return G.map(function (J) {
              {
                if (typeof J === "string") return {
                  "url": J
                };
                if (J && typeof J === "object" && J.url) return {
                  "url": J.url
                };
                return null;
              }
            }).filter(Boolean);
            if (typeof G === "object" && Array.isArray(G.interfaces)) return G.interfaces.map(function (J) {
              if (typeof J === "string") return {
                "url": J
              };
              if (J && typeof J === "object" && J.url) return {
                "url": J.url
              };
              return null;
            }).filter(Boolean);
            if (typeof G === "string") {
              var I = G.split(/[\n,;\s]+/).map(function (J) {
                return J.trim();
              }).filter(Boolean);
              return I.map(function (J) {
                return {
                  "url": J
                };
              });
            }
            return [];
          }
          var o = m;
          if (m && typeof m.data === "object") o = m.data;
          if (o && typeof o.apiGroups !== "undefined") {
            {
              var p = o.apiGroups;
              if (Array.isArray(p)) return p;
            }
          }
          var r = [],
            t = [m, m.data].filter(function (H) {
              return !!H && typeof H === "object";
            });
          for (var u = 0; u < t.length; u++) {
            var w = t[u];
            var v = F(w.sign || w.SIGN || w.Sign);
            var x = F(w.enc || w.ENC || w.Enc);
            if (v.length) r.push({
              "name": "sign",
              "interfaces": v
            });
            if (x.length) r.push({
              "name": "enc",
              "interfaces": x
            });
            if (r.length) return r;
          }
          var y = Object.keys(o || m || {});
          for (var z = 0; z < y.length; z++) {
            var A = y[z],
              B = F((o || m)[A]);
            B.length && r.push({
              "name": A,
              "interfaces": B
            });
          }
          if (r.length) return r;
        }
        return null;
      }
    }
    var b = j(i);
    return b && Array.isArray(b) && b.length > 0 ? (aq = b, true) : (console.log("获取接口列表失败，返回值异常"), false);
  } catch (m) {
    console.log("获取接口列表异常: " + (m && m.message || m));
    return false;
  }
}
function aw(a, b = "") {
  const g = aq.find(j => j.name === a);
  if (!g || !g.interfaces || g.interfaces.length === 0) return null;
  const h = Math.floor(Math.random() * g.interfaces.length),
    i = g.interfaces[h];
  return i;
}
function ax() {
  return Math.floor(Math.random() * (as - ar + 1)) + ar;
}
function ay() {
  return Math.floor(Math.random() * 8001) + 2000;
}
async function az() {
  try {
    if (!ag) {
      return;
    }
    if (aj.length === 0) return;
    for (const f of aj) {
      const g = {
          "Host": "nebula.kuaishou.com",
          "Connection": "keep-alive",
          "User-Agent": f.userAgent,
          "Cookie": "kuaishou.api_st=" + f.api_st + ";client_key=2ac2a76d;",
          "content-type": "application/json"
        },
        h = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo";
      try {
        {
          const j = await fetch(h, {
              "method": "GET",
              "headers": g
            }),
            k = await j.text();
          let l = null;
          try {
            l = JSON.parse(k);
          } catch (m) {
            l = null;
          }
          if (l && l.result == 1) {
            {
              const p = l.data.totalCoin,
                r = l.data.allCash;
              console.log("账号[" + f.index + "] " + f.remark + "您的金币: " + p + " 余额: " + r);
              if (a9) {
                {
                  const t = parseInt(a9);
                  if (p > t) {
                    console.log("账号[" + f.index + "] 金币(" + p + ")大于(" + t + ")，今天任务已完成");
                  } else console.log("账号[" + f.index + "] 金币(" + p + ")小于等于(" + t + ")，继续执行任务");
                }
              }
            }
          } else console.log("账号[" + f.index + "] 查询失败 ?，原因: 未知");
        }
      } catch (w) {}
    }
  } catch (x) {}
}
async function aA() {
  console.log("\n================== 获取ad ==================\n");
  await az();
  console.log("\n?? 本次执行共 " + aj.length + " 个账号\n");
  let b = 0;
  while (b < au) {
    b++;
    for (let g of aj) {
      const h = ax();
      console.log("账号[" + g.index + "]  随机延迟 " + Math.round(h / 1000) + "秒");
      g.initialDelay = h;
    }
    let f = [];
    for (let i of aj) {
      f.push((async () => {
        await new Promise(j => setTimeout(j, i.initialDelay));
        if (!i.isTaskStopped(672)) {
          await i.cid(672);
        } else {
          console.log("账号[" + i.index + "]  ad任务已达上限，已停止执行");
        }
        !i.isTaskStopped(606) ? await i.cid(606) : console.log("账号[" + i.index + "]  宝箱任务已达上限，已停止执行");
        !i.isTaskStopped(9362) ? await i.cid(9362) : console.log("账号[" + i.index + "]  饭补任务已达上限，已停止执行");
        !i.isTaskStopped(7038) ? await i.cid(7038) : console.log("账号[" + i.index + "]  搜索任务已达上限，已停止执行");
      })());
    }
    await Promise.all(f);
    if (b < au) {}
  }
}
class aB {
  constructor(a) {
    this.index = ++ak;
    this.remark = a.remark || "小主";
    this.salt = a.salt;
    this.userAgent = a.userAgent;
    this.sock5 = a.sock5;
    this.userId = a.userId;
    this.egid = a.egid;
    this.did = a.did;
    this.api_st = a.api_st;
    if (!this.salt || !this.userAgent || !this.userId || !this.egid || !this.did || !this.api_st) {
      console.log("账号[" + this.index + "] 参数不完整:", {
        "salt": this.salt,
        "userAgent": this.userAgent,
        "userId": this.userId,
        "egid": this.egid,
        "did": this.did,
        "api_st": this.api_st
      });
      this.valid = false;
      return;
    }
    this.valid = true;
    this.headers = {
      "Host": "nebula.kuaishou.cn",
      "Connection": "keep-alive",
      "User-Agent": this.userAgent,
      "Cookie": "kuaishou.api_st=" + this.api_st + ";client_key=2ac2a76d;",
      "content-type": "application/json"
    };
    this.hostt = "https://api.e.kuaishou.com";
    this.path = "/rest/r/ad/task/report";
    this.query = "mod=Xiaomi(23116PN5BC)&appver=13.2.41.9745&egid=" + this.egid + "&did=" + this.did;
    this.stoppedTasks = new Set();
  }
  ["isTaskStopped"](a) {
    return this.stoppedTasks.has(a);
  }
  ["stopTask"](a) {
    this.stoppedTasks.add(a);
  }
  async ["sig3"](a, b, f, g, h) {
    const i = {
      "QNoIl": function (k, l) {
        return k(l);
      },
      "Qlkqz": "HTTP不可用：AndroidBridge.http 缺失",
      "XWRGo": "5|0|4|3|2|1",
      "uztTm": function (k, l) {
        return k || l;
      },
      "JWdzh": function (k, l) {
        return k(l);
      },
      "LvBYX": function (k, l) {
        return k(l);
      },
      "SIJJo": function (k, l) {
        return k % l;
      },
      "ZFcfU": function (k, l) {
        return k + l;
      },
      "qOGgz": function (k, l) {
        return k * l;
      },
      "dgLHZ": function (k, l) {
        return k % l;
      },
      "Gwkbx": function (k, l) {
        return k & l;
      },
      "zwYip": function (k, l) {
        return k >> l;
      },
      "PTSzm": function (k, l) {
        return k * l;
      },
      "nTUFr": function (k, l) {
        return k === l;
      },
      "Nnuwa": function (k, l) {
        return k % l;
      },
      "igAWe": "ABCDEFGHIJKLMNOPQRSTSvhAxcu4rkZa5hx9ukCcyvqPjiefjKJ4U123456789+/=",
      "zCeie": function (k, l) {
        return k(l);
      },
      "RFyvc": function (k, l) {
        return k(l);
      },
      "ejaXS": function (k, l) {
        return k === l;
      },
      "aHnPE": "CXovI",
      "wIQmD": function (k, l) {
        return k === l;
      },
      "vbrvD": function (k, l) {
        return k !== l;
      },
      "kwUAv": "varLC",
      "QXpBX": function (k, l) {
        return k !== l;
      },
      "gPSCt": "ZzPnz",
      "mBPbI": function (k, l, m) {
        return k(l, m);
      },
      "eaHSV": "sign",
      "krXPd": function (k, l) {
        return k === l;
      },
      "cFsaX": "TFTmH",
      "luHNh": "ndKAg",
      "Iyvzh": "post",
      "oxDnw": "application/json",
      "Bxdwn": "POST",
      "VZnOA": function (k, l) {
        return k === l;
      },
      "UrkHB": "wBsQl",
      "Bosew": "EYebP",
      "PIIQI": function (k, l) {
        return k !== l;
      },
      "VWyip": "LYDak",
      "jePfy": function (k, l) {
        return k === l;
      },
      "EqZQa": function (k, l) {
        return k === l;
      },
      "uFlpu": "nVRqX",
      "FSQzG": "tPZdZ",
      "yzGBK": function (k, l) {
        return k === l;
      },
      "CQTzA": function (k, l) {
        return k !== l;
      },
      "UgNhQ": "srwLu",
      "DBJcN": function (k, l) {
        return k === l;
      },
      "IPESr": function (k, l) {
        return k === l;
      },
      "TNpAD": "cOJmG"
    };
    if (!this.valid) return;
    if (f === 672) {
      var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + an + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0},{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":3,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + am + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
    }
    if (f === 606) {
      var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + an + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":20346,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + am + ",\"subPageId\":100024064}&cs=false&client_key=2ac2a76d";
    }
    if (f === 9362) {
      var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + an + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + am + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
    }
    if (f === 7038) var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + an + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":96134,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + am + ",\"subPageId\":100074584}&cs=false&client_key=2ac2a76d";
    try {
      const n = aw("sign", this.index);
      if (!n) {
        return;
      }
      let o = {
          "method": "post",
          "url": "http://" + n.url + "?km=" + encodeURIComponent(a8) + "&user=" + this.userId,
          "headers": {
            "User-Agent": this.userAgent,
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            "query": this.query,
            "body": j,
            "salt": this.salt,
            "path": this.path
          })
        },
        p = null;
      try {
        const u = await fetch(o.url, {
            "method": "POST",
            "headers": o.headers,
            "body": o.body
          }),
          v = await u.text();
        try {
          p = JSON.parse(v);
        } catch (w) {
          p = null;
        }
      } catch (y) {
        p = null;
      }
      if (p && p.Sig && p.Sig3 && p.NsSig) {
        {
          let A = p.Sig,
            B = p.Sig3,
            C = p.NsSig;
          f === 672 && (await this.ad(A, B, C, j, f));
          f === 606 && (await this.boxad(A, B, C, j, f));
          if (f === 9362) {
            await this.fanbuad(A, B, C, j, f);
          }
          if (f === 7038) {
            await this.ad7038(A, B, C, j, f);
          }
        }
      } else return;
    } catch (G) {
      return;
    }
  }
  async ["cid"](a, b) {
    if (!this.valid) return;
    try {
      {
        let i = a;
        const j = aw("enc", this.index);
        if (!j) {
          console.log("账号[" + this.index + "] 无法获取enc接口");
          return;
        }
        let k = {
            "method": "get",
            "url": function () {
              const m = {
                "lylGb": function (o, p) {
                  return o + p;
                }
              };
              {
                var n = [];
                n.push("km=" + encodeURIComponent(a8));
                n.push("salt=" + encodeURIComponent(String(this.salt || "")));
                n.push("userId=" + encodeURIComponent(String(this.userId || "")));
                n.push("did=" + encodeURIComponent(String(this.did || "")));
                n.push("oaid=");
                n.push("apist=" + encodeURIComponent(String(this.api_st || "")));
                n.push("adType=" + encodeURIComponent(String(i)));
                return "http://" + j.url + "?" + n.join("&");
              }
            }.call(this),
            "headers": {
              "User-Agent": this.userAgent
            }
          },
          l = null;
        try {
          const m = await fetch(k.url, {
              "method": "GET",
              "headers": k.headers || {}
            }),
            n = await m.text();
          try {
            l = JSON.parse(n);
          } catch (p) {
            l = null;
          }
          if (!l) {
            {
              var h = [];
              h.push("km=" + encodeURIComponent(a8));
              h.push("salt=" + encodeURIComponent(String(this.salt || "")));
              h.push("userId=" + encodeURIComponent(String(this.userId || "")));
              h.push("did=" + encodeURIComponent(String(this.did || "")));
              h.push("oaid=");
              h.push("apist=" + encodeURIComponent(String(this.api_st || "")));
              h.push("adType=" + encodeURIComponent(String(i)));
              const u = "http://" + j.url,
                v = await fetch(u, {
                  "method": "POST",
                  "headers": Object.assign({}, k.headers || {}, {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }),
                  "body": h.join("&")
                }),
                w = await v.text();
              try {
                l = JSON.parse(w);
              } catch (x) {
                l = null;
              }
            }
          }
        } catch (y) {
          l = null;
        }
        if (l && l.result == 1 && l.feeds && l.feeds[0]) {
          if (l.feeds[0].caption) {
            console.log("账号[" + this.index + "] " + l.feeds[0].caption);
          }
          let A = l.feeds[0].exp_tag,
            B = A.split("/"),
            C = B[1],
            D = C.split("_")[0],
            E = l.feeds[0].ad.creativeId,
            F = D,
            G = l.feedType;
          if (!F || F === "undefined" || F === "") {
            return;
          }
          if (G === 0) {
            const J = ax();
            console.log("账号[" + this.index + "]  随机延迟 " + Math.round(J / 1000) + "秒");
            await new Promise(L => setTimeout(L, J));
            let K = "video";
            await this.sig3(E, F, a, K);
          }
        } else return;
      }
    } catch (M) {
      return;
    }
  }
  async ["boxad"](a, b, f, g, h, i) {
    try {
      let k = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": g
        },
        l = null;
      try {
        {
          const n = await fetch(k.url, {
              "method": "POST",
              "headers": k.headers,
              "body": g
            }),
            o = await n.text();
          try {
            l = JSON.parse(o);
          } catch (p) {
            l = null;
          }
        }
      } catch (v) {
        l = null;
      }
      if (l && l.result == 1) {
        {
          let y = l.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  开宝箱获得金币:" + y);
          const z = ay();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(z / 1000) + "秒");
          await new Promise(A => setTimeout(A, z));
        }
      } else {
        let A = l && l.result;
        const B = l && (l.message || l.error_msg) || "";
        if (A == 1003 || typeof B === "string" && B.includes("今日奖励领完啦")) {
          console.log("账号[" + this.index + "]  宝箱任务提示“今日奖励领完啦”，停止该任务");
          this.stopTask(606);
          return;
        }
        if (l) console.log(l);
      }
    } catch (C) {
      return;
    }
  }
  async ["ad"](a, b, f, g, h, i) {
    try {
      let k = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": g
        },
        l = null;
      try {
        const m = await fetch(k.url, {
            "method": "POST",
            "headers": k.headers,
            "body": g
          }),
          n = await m.text();
        try {
          l = JSON.parse(n);
        } catch (p) {
          l = null;
        }
      } catch (u) {
        l = null;
      }
      if (l && l.result == 1) {
        let w = l.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  看广告获得金额:" + w);
        const x = ay();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(x / 1000) + "秒");
        await new Promise(y => setTimeout(y, x));
      } else {
        let y = l && l.result;
        const z = l && (l.message || l.error_msg) || "";
        if (y == 1003 || typeof z === "string" && z.includes("今日奖励领完啦")) {
          {
            console.log("账号[" + this.index + "]  ad广告任务提示“今日奖励领完啦”，停止该任务");
            this.stopTask(672);
            return;
          }
        }
        if (l) console.log(l);
      }
    } catch (B) {
      return;
    }
  }
  async ["fanbuad"](a, b, f, g, h, i) {
    try {
      let k = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": g
        },
        l = null;
      try {
        const m = await fetch(k.url, {
            "method": "POST",
            "headers": k.headers,
            "body": g
          }),
          n = await m.text();
        try {
          l = JSON.parse(n);
        } catch (p) {
          l = null;
        }
      } catch (u) {
        l = null;
      }
      if (l && l.result == 1) {
        {
          let v = l.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  饭补看广告" + v + "金币奖励！");
          const w = ay();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(w / 1000) + "秒");
          await new Promise(x => setTimeout(x, w));
        }
      } else {
        const y = l && l.result,
          z = l && (l.message || l.error_msg) || "";
        if (y == 1003 || typeof z === "string" && z.includes("今日奖励领完啦")) {
          {
            console.log("账号[" + this.index + "]  饭补任务提示“今日奖励领完啦”，停止该任务");
            this.stopTask(9362);
            return;
          }
        }
        console.log("账号[" + this.index + "] 饭补奖励失败,多次失败请先手动点击饭补的广告是否正常");
        if (l) console.log(l);
      }
    } catch (B) {
      return;
    }
  }
  async ["ad7038"](a, b, f, g, h, i) {
    try {
      {
        let l = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/4.9.1",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "page-code": "NEW_TASK_CENTER",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
            },
            "body": g
          },
          m = null;
        try {
          const n = await fetch(l.url, {
              "method": "POST",
              "headers": l.headers,
              "body": g
            }),
            o = await n.text();
          try {
            m = JSON.parse(o);
          } catch (p) {
            m = null;
          }
        } catch (u) {
          m = null;
        }
        if (m && m.result == 1) {
          let v = m.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  搜索看广告获得金额:" + v);
          const w = ay();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(w / 1000) + "秒");
          await new Promise(x => setTimeout(x, w));
        } else {
          const x = m && m.result,
            y = m && (m.message || m.error_msg) || "";
          if (x == 1003 || typeof y === "string" && y.includes("今日奖励领完啦")) {
            console.log("账号[" + this.index + "]  搜索任务提示“今日奖励领完啦”，停止该任务");
            this.stopTask(7038);
            return;
          }
          console.log("账号[" + this.index + "]  搜索看广告奖励失败");
          if (m) console.log(m);
        }
      }
    } catch (z) {
      return;
    }
  }
}
async function aC(a, b) {
  try {
    {
      if (!ab) return true;
      if (!a) return true;
      if (X) return true;
      return true;
    }
  } catch (h) {
    return true;
  }
}
!(async () => {
  if (!(await aF())) return;
  try {
    {
      if (aj.length > 0) for (const g of aj) {
        try {
          await aC(g.sock5, g.index);
        } catch (h) {}
      }
    }
  } catch (i) {}
  const b = await av();
  if (!b) {
    return;
  }
  if (aj.length > 0) {
    await aA();
  } else {
    console.log("?没有有效的账号配置，程序退出");
  }
  await aJ(msg);
})().catch(() => {}).finally(() => Z.done());
function aD() {
  return Math.floor(Math.random() * 3) + 8;
}
function aE(a) {
  var f = "ABCDEFGHIJKLMNOPQRSTSvhAxcu4rkZa5hx9ukCcyvqPjiefjKJ4U123456789+/=",
    g = String(a || "").replace(/=+$/, ""),
    h = "";
  if (!g || g.length % 4 === 1) return "";
  for (var i = 0, j, k, l = 0; k = g.charAt(l++); ~k && (j = i % 4 ? j * 64 + k : k, i++ % 4) ? h += String.fromCharCode(255 & j >> (-2 * i & 6)) : 0) {
    k = f.indexOf(k);
  }
  try {
    return decodeURIComponent(escape(h));
  } catch (o) {
    return h;
  }
}
async function aF() {
  if (!a8) return console.log("?未找到km环境变量，请设置青龙面板的km变量"), false;
  if (ag) {
    {
      const b = ag.split("\n").map(h => h.trim()).filter(h => h),
        f = b.length > 1 ? b : ag.split("&").map(h => h.trim()).filter(h => h),
        g = [];
      for (const h of f) {
        const i = h.split("@").filter(t => t.trim());
        if (i.length < 3) {
          console.log("?账号格式错误: " + h);
          continue;
        }
        let j = 0,
          k = "小主";
        i[0].indexOf("=") === -1 && (k = i[0], j = 1);
        const l = i[j] || "",
          m = i[j + 1] || "",
          n = i[j + 2] || "",
          o = i[j + 3] || "";
        if (!l || !m || !n) {
          console.log("?账号信息不完整(跳过): " + h);
          continue;
        }
        const p = aG(l);
        if (!p) {
          console.log("?Cookie信息提取失败(跳过): " + k);
          continue;
        }
        const r = new aB({
          "remark": k,
          "salt": m,
          "userAgent": n,
          "sock5": o,
          ...p
        });
        if (!r.valid) {
          console.log("?账号参数不完整(跳过): " + k);
          continue;
        }
        g.push(r);
      }
      if (g.length === 0) return console.log("?未解析到任何有效账号，请检查变量内容"), false;
      aj = g;
      al = aj.length;
      ah = aj[0].sock5 || null;
      console.log("?共找到" + al + "个有效账号");
      return true;
    }
  } else {
    console.log("?未找到ks200环境变量");
    console.log("新格式为: cookie@salt@user-agent@sock5 或 remark@cookie@salt@user-agent@sock5");
    return false;
  }
}
function aG(a) {
  try {
    {
      const g = {},
        h = a.split(";");
      for (let m of h) {
        const [n, o] = m.trim().split("=");
        n && o && (g[n.trim()] = o.trim());
      }
      const i = g.userId || g.ud,
        j = g.egid,
        k = g.did,
        l = g["kuaishou.api_st"];
      if (i && j && k && l) {
        return {
          "userId": i,
          "egid": j,
          "did": k,
          "api_st": l
        };
      } else return console.log("Cookie中缺少必要字段:", {
        "userId": i,
        "egid": j,
        "did": k,
        "api_st": l
      }), null;
    }
  } catch (r) {
    console.log("Cookie解析失败:", r.message);
    return null;
  }
}
function aH(a) {
  return new Promise(function (f) {
    setTimeout(f, a * 1000);
  });
}
function aI(a) {
  Z.isNode() ? a && (console.log("" + a), msg += "\n" + a) : (console.log("" + a), msg += "\n" + a);
}
async function aJ(a) {
  const b = {
    "fwFCN": "?没有有效的账号配置，程序退出",
    "zILvw": function (g, h) {
      return g > h;
    },
    "eonWt": function (g, h) {
      return g(h);
    },
    "nlJxQ": "./sendNotify",
    "vTBeD": function (g, h) {
      return g !== h;
    },
    "zgYCU": "EnzDI",
    "sYzmT": "YJrAR"
  };
  if (!a) return;
  if (aa > 0) try {
    var f = require("./sendNotify");
    await f.sendNotify(Z.name, a);
  } catch (g) {} else console.log(a);
}
function W(a, b) {
  try {
    {
      if (typeof process !== "undefined" && JSON.stringify(process.env).indexOf("GITHUB") > -1) process.exit(0);
    }
  } catch (h) {}
  return new class {
    constructor(i, j) {
      this.name = a;
      this.logs = [];
      this.logSeparator = "\n";
      this.startTime = Date.now();
    }
    ["isNode"]() {
      return true;
    }
    ["msg"]() {}
    ["log"]() {
      try {
        console.log(Array.from(arguments).join(this.logSeparator));
      } catch (i) {}
    }
    ["done"]() {}
  }();
}