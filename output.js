//Wed Aug 20 2025 18:55:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const an = require("crypto"),
  ao = require("zlib"),
  ap = require("axios"),
  {
    setTimeout: aq
  } = require("timers/promises"),
  {
    SocksProxyAgent: ar
  } = require("socks-proxy-agent"),
  as = require("p-limit"),
  at = as.default || as,
  au = "喜番",
  av = "2.0.0",
  aw = "xifan",
  ax = true,
  ay = false;
function az() {
  const f = new Date(),
    g = h => String(h).padStart(2, "0");
  return g(f.getHours()) + ":" + g(f.getMinutes()) + ":" + g(f.getSeconds());
}
function aA(e, f) {
  console.log("ℹ️ " + az() + " [" + e + "] " + f);
}
function aB(e, f) {
  console.log("⚠️ " + az() + " [" + e + "] " + f);
}
function aC(e, f) {
  console.log("❌ " + az() + " [" + e + "] " + f);
}
function aD(e) {
  if (!e || e.length <= 10) return e || "";
  return "" + e.slice(0, 5) + "*".repeat(Math.max(0, e.length - 10)) + e.slice(-5);
}
function aE(e, f = 3, g = 3) {
  if (!e) return "";
  if (e.length <= f + g) return "*".repeat(Math.max(3, e.length));
  return e.slice(0, f) + "***" + e.slice(-g);
}
function aF(e) {
  return ao.gzipSync(e).toString("base64");
}
function aG(e) {
  return ao.gunzipSync(e).toString("base64");
}
function aH(e) {
  const g = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    h = Buffer.from(e, "base64"),
    i = an.createCipheriv("aes-128-ecb", g, null);
  i.setAutoPadding(true);
  const j = Buffer.concat([i.update(h), i.final()]);
  return j.toString("base64");
}
function aI(e) {
  const g = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    h = Buffer.from(e, "base64"),
    i = an.createDecipheriv("aes-128-ecb", g, null);
  i.setAutoPadding(true);
  const j = Buffer.concat([i.update(h), i.final()]),
    k = Buffer.from(j).toString("base64"),
    l = Buffer.from(k, "base64"),
    m = aG(l),
    n = Buffer.from(m, "base64").toString("utf8");
  return n;
}
function aJ(e) {
  const g = JSON.parse(aI(e));
  g.timestamp = String(Math.round(Date.now()));
  const h = JSON.stringify(g),
    i = aF(Buffer.from(h, "utf8"));
  return aH(i);
}
function aK(e, f) {
  const h = JSON.parse(aI(e)),
    i = String(Math.round(Date.now()));
  if ("inspireHomeParam" in h) delete h.inspireHomeParam;
  h.timestamp = i;
  h.inspireEventReportParam = f;
  const j = JSON.stringify(h),
    k = aF(Buffer.from(j, "utf8"));
  return aH(k);
}
function aL(e, f, g, h) {
  const j = JSON.parse(aI(e)),
    k = String(Math.round(Date.now()));
  if ("inspireHomeParam" in j) delete j.inspireHomeParam;
  j.timestamp = k;
  j.inspireTaskReportParam = {
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": "0",
        "taskToken": g
      },
      "idempotentId": h
    }],
    "continuousTimes": 0,
    "taskId": f
  };
  const l = JSON.stringify(j),
    m = aF(Buffer.from(l, "utf8"));
  return aH(m);
}
function aM(e, f) {
  const h = JSON.parse(aI(e)),
    i = String(Math.round(Date.now()));
  h.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": i,
    "values": [-0.6101697683334351 + aO(0, 5), -0.8641080856323242 + aO(0, 5), 10.127023696899414 + aO(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": i,
    "values": [0.0007635590736754239 + aO(0, 5), 0.0009162708884105086 + aO(0, 5), -0.00007635590736754239 + aO(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": i,
    "values": [-0.5920952558517456 + aO(0, 5), -0.829244077205658 + aO(0, 5), 9.753571510314941 + aO(0, 5)]
  }];
  h.timestamp = i;
  h.impInfo = [{
    "posId": f,
    "entryScene": f,
    "adNum": 1,
    "adStyle": 2,
    "screenOrientation": 1
  }];
  const j = JSON.stringify(h),
    k = aF(Buffer.from(j, "utf8"));
  return aH(k);
}
function aN(e, f, g, h, i, j, k, l, m, n = 0) {
  const p = JSON.parse(aI(e)),
    q = String(Math.round(Date.now()));
  p.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": q,
    "values": [-0.6101697683334351 + aO(0, 5), -0.8641080856323242 + aO(0, 5), 10.127023696899414 + aO(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": q,
    "values": [0.0007635590736754239 + aO(0, 5), 0.0009162708884105086 + aO(0, 5), -0.00007635590736754239 + aO(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": q,
    "values": [-0.5920952558517456 + aO(0, 5), -0.829244077205658 + aO(0, 5), 9.753571510314941 + aO(0, 5)]
  }];
  p.timestamp = q;
  p.inspireTaskReportParam = {
    "posId": f,
    "ecpm": g,
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": h,
        "creativeId": i,
        "taskToken": j
      },
      "idempotentId": k
    }],
    "taskSessionId": l,
    "continuousTimes": n,
    "taskId": m
  };
  const r = JSON.stringify(p),
    s = aF(Buffer.from(r, "utf8"));
  return aH(s);
}
function aO(e, f) {
  return Math.floor(Math.random() * (f - e + 1)) + e;
}
function aP(e) {
  if (!e) return ap.create();
  const f = new ar(e);
  return ap.create({
    "httpAgent": f,
    "httpsAgent": f
  });
}
let aQ = {
    "sig1": [],
    "sig3": []
  },
  aR = false,
  aS = null;
async function aT() {
  if (aR) return;
  if (aS) return aS;
  aS = (async () => {
    try {
      {
        const g = await ap.get("http://210.16.163.50:19999/jk.php", {
            "timeout": 20000
          }),
          h = Array.isArray(g.data) ? g.data : [],
          i = h.find(k => k && k.name === "sig1"),
          j = h.find(k => k && k.name === "sig3");
        aQ.sig1 = (i?.["interfaces"] || []).map(k => k.url).filter(Boolean);
        aQ.sig3 = (j?.["interfaces"] || []).map(k => k.url).filter(Boolean);
      }
    } catch {}
    aR = true;
  })();
  return aS;
}
function aU(e) {
  const g = aQ[e] || [];
  if (!g.length) return null;
  const h = g[Math.floor(Math.random() * g.length)];
  return h.startsWith("http") ? h : "http://" + h;
}
function aV(e, f) {
  const h = process.env.xfkm || "";
  try {
    const i = new URL(e.startsWith("http") ? e : "http://" + e);
    i.searchParams.set("xfkm", h);
    i.searchParams.set("user", f || "");
    return i.toString();
  } catch {
    return e;
  }
}
async function aW(f, g, h) {
  const i = {
    "UbzQY": "宝箱广告数据结构无效，跳过宝箱广告任务",
    "gEVLJ": function (k, l, m) {
      return k(l, m);
    },
    "qbwIb": "无可用Sig3接口",
    "IKRyx": function (k, l) {
      return k * l;
    },
    "FOcOu": "http",
    "IRxRp": "GWL8jXHLnzp63QDH",
    "dHkZp": "utf8",
    "zkFKM": "base64",
    "ODZFO": "aes-128-ecb",
    "sFBfZ": function (k) {
      return k();
    },
    "wdKLs": function (k, l) {
      return k <= l;
    },
    "WJrlv": function (k, l) {
      return k !== l;
    },
    "mItpj": "SBzot",
    "jgvEo": function (k, l) {
      return k + l;
    },
    "BsVZx": function (k, l) {
      return k(l);
    },
    "ujnNd": "sig3",
    "GSRpy": function (k, l, m) {
      return k(l, m);
    },
    "TFtDU": function (k, l, m) {
      return k(l, m);
    },
    "yuEQt": "application/json",
    "AciwQ": function (k, l) {
      return k === l;
    },
    "FdjMH": "SgZIG",
    "UaZeF": "XjJrw",
    "FQYwR": function (k, l) {
      return k === l;
    },
    "wDGYC": "success",
    "kfoQY": function (k, l) {
      return k === l;
    },
    "PyzfH": "string",
    "gQgQd": function (k, l) {
      return k === l;
    },
    "zzjvv": function (k, l) {
      return k === l;
    },
    "hIzLj": function (k, l, m) {
      return k(l, m);
    },
    "gtLBK": function (k, l, m) {
      return k(l, m);
    },
    "UBUgS": function (k, l) {
      return k !== l;
    },
    "LBKMm": "wJyEF",
    "NHjfg": function (k, l) {
      return k === l;
    },
    "MQQaR": "rVAfW",
    "AabEe": function (k, l, m) {
      return k(l, m);
    }
  };
  let j = 0;
  await aT();
  while (j <= 5) {
    try {
      const [l, m = ""] = f.split("&&", 2),
        n = "https://tube.e.kuaishou.com" + l,
        o = aU("sig3");
      if (!o) return aC("签名", "无可用Sig3接口"), null;
      const p = aV(o, h),
        q = await g.post(p, JSON.stringify({
          "url": n,
          "body": m
        }), {
          "headers": {
            "Content-Type": "application/json"
          },
          "timeout": 20000
        });
      if (q.status === 200) {
        {
          const r = q.data;
          if (r?.["status"] === "success" && r?.["data"]?.["sig3"]) return r.data.sig3;
        }
      }
      aC("签名", "签名失败: 状态码=" + q.status + ", 响应=" + (typeof q.data === "string" ? q.data : JSON.stringify(q.data)));
      return null;
    } catch (t) {
      const u = t?.["response"]?.["status"],
        v = t?.["response"]?.["data"];
      if (u === 403 && v) try {
        const w = typeof v === "string" ? JSON.parse(v) : v;
        if (w?.["error"]) aC("签名", "Sig3验证失败: " + w.error);else aC("签名", "Sig3验证失败: HTTP " + u);
      } catch {
        aC("签名", "Sig3验证失败: HTTP " + u + " - " + (typeof v === "string" ? v : JSON.stringify(v)));
      } else {
        if (u) {
          aC("签名", "获取Sig3失败重试: HTTP " + u + " 响应=" + (typeof v === "string" ? v : JSON.stringify(v)));
        } else {
          aC("签名", "获取Sig3失败重试: " + t);
        }
      }
      j += 1;
    }
  }
  return null;
}
async function aX(f, g, h) {
  let j = 0;
  await aT();
  while (j <= 5) {
    try {
      const [k, l = ""] = f.split("&&", 2),
        m = aU("sig1");
      if (!m) return aC("签名", "无可用Sig1接口"), null;
      const n = aV(m, h),
        o = {
          "path": k,
          "params": l
        },
        p = await g.post(n, o, {
          "timeout": 20000
        });
      if (p.status === 200) {
        const q = p.data;
        if (q?.["status"] === "success") return q.signature;
        aC("签名", "签名失败: " + (q?.["message"] || "未知错误"));
      } else aC("签名", "服务器返回错误: " + p.status + " 内容: " + (typeof p.data === "string" ? p.data : JSON.stringify(p.data)));
    } catch (r) {
      const s = r?.["response"]?.["status"],
        t = r?.["response"]?.["data"];
      if (s === 403 && t) {
        try {
          {
            const v = typeof t === "string" ? JSON.parse(t) : t;
            if (v?.["error"]) aC("签名", "Sig1验证失败: " + v.error);else aC("签名", "Sig1验证失败: HTTP " + s);
          }
        } catch {
          aC("签名", "Sig1验证失败: HTTP " + s + " - " + (typeof t === "string" ? t : JSON.stringify(t)));
        }
      } else {
        if (s) aC("签名", "获取Sig1失败重试: HTTP " + s + " 响应=" + (typeof t === "string" ? t : JSON.stringify(t)));else {
          aC("签名", "获取Sig1失败重试: " + r);
        }
      }
      j += 1;
    }
  }
  return null;
}
class aY {
  constructor(f) {
    const h = f.split("@");
    this.bz = h[0];
    this.ck = h[1];
    this.message = h[2];
    this.sua = h[3];
    this.bua = h[4];
    if (h.length === 6) {
      {
        const k = h[5];
        let l, n, o, p;
        try {
          if (k.includes("|")) {
            const q = k.split("|");
            [l, n, o, p] = [q[0], q[1], q[2], q[3]];
          } else {
            if (k.includes("#")) {
              const r = k.split("#");
              [l, n, o, p] = [r[0], r[1], r[2], r[3]];
            } else aC(this.bz, "SOCKS5 代理格式不正确，请按要求填写");
          }
          this.proxyUrl = "socks5h://" + o + ":" + p + "@" + l + ":" + n;
          aA(this.bz, "代理: " + aD(l));
          this.http = aP(this.proxyUrl);
        } catch (t) {
          aC(this.bz, "SOCKS5 代理解析失败，请检查格式");
          this.http = ap.create();
        }
      }
    } else this.proxyUrl = null, this.http = ap.create(), aA(this.bz, "未配置代理。多账号请确保一号一代理。");
    this.ua = this.sua + "-ksad-android-3.3.55.2";
    const i = /userId=([^;]+)/.exec(this.ck || "");
    if (i) this.user_id = i[1];else throw new Error("请检查Cookie格式");
    this.AdXunHuan = 0;
    this.BoxAdXunHuan = 0;
    this.max_gold = parseInt(process.env.MAXgol || "1500000", 10);
  }
  ["log"](e, f = "info") {
    if (f === "info") aA(this.bz, e);else {
      if (f === "error") aC(this.bz, e);else {
        if (f === "warning") aB(this.bz, e);else aA(this.bz, e);
      }
    }
  }
  async ["checkSock5"]() {
    if (!this.proxyUrl) return {
      "available": true
    };
    try {
      {
        const h = Date.now();
        await this.http.get("http://www.baidu.com", {
          "timeout": 10000
        });
        const i = (Date.now() - h) / 1000;
        return {
          "available": true,
          "response_time": Number(i.toFixed(2)),
          "error": null
        };
      }
    } catch (j) {
      return {
        "available": false,
        "response_time": null,
        "error": String(j)
      };
    }
  }
  async ["User_info"](e = true) {
    const f = {
        "ZQKKr": "广告上报失败（A）",
        "ULYpQ": "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
        "uuXau": "3.3.55.2",
        "ZJhTe": "2.7.2.2",
        "GIgzE": "1091400011",
        "fAXHj": function (m, n) {
          return m(n);
        },
        "inyzX": "Keep-Alive",
        "zUDZu": "gzip",
        "HanKT": function (m, n, o, p) {
          return m(n, o, p);
        },
        "rdXCO": function (m, n) {
          return m + n;
        },
        "hWOlE": "/rest/e/tube/inspire/home&&",
        "ycaAO": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Zszar": "application/json; charset=utf-8",
        "juRJv": function (m, n) {
          return m === n;
        },
        "MCIxT": function (m, n) {
          return m >= n;
        },
        "omawY": function (m, n) {
          return m || n;
        },
        "qdISx": "QEFNg",
        "vtFHJ": "bSgTT",
        "cQkVX": "warning",
        "pgzRx": function (m, n) {
          return m === n;
        },
        "uBNbk": "BKdMg",
        "Osdwv": function (m, n) {
          return m / n;
        },
        "hfxJg": function (m, n) {
          return m || n;
        },
        "CsqFO": "Cookie 失效，请重新抓取",
        "HPlfP": function (m, n) {
          return m === n;
        },
        "YlNJF": function (m, n) {
          return m !== n;
        },
        "FWABH": "HLkCH",
        "xOkAx": function (m, n) {
          return m === n;
        }
      },
      g = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
      h = {
        "version": "3.3.55.2",
        "appVersion": "2.7.2.2",
        "appId": "1091400011",
        "message": aJ(this.message)
      };
    let i = JSON.stringify(h);
    i = i.replaceAll("/", "\\/");
    const j = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await aW("/rest/e/tube/inspire/home&&" + i, this.http, this.user_id),
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
    if (l?.["result"] === 1) {
      const m = JSON.parse(aI(l.data)),
        n = m.accountInfoV2?.["coinAccount"]?.["amount"],
        o = m.accountInfoV2?.["cashAccount"]?.["amountDisplay"];
      if (Number(n || 0) >= this.max_gold) {
        this.log("金币达到阈值(" + this.max_gold + ")，停止执行", "warning");
        return false;
      }
      e && this.log("余额: 金币=" + n + " (≈" + Number(n || 0) / 30000 + ") | 现金=" + o);
      const p = m.watchTubeTaskInfo?.["tasks"] || [];
      this.watchTubeTask = p[0];
      if (!m.dailyTaskInfo) this.log("Cookie 失效，请重新抓取");
      const q = m.dailyTaskInfo?.["tasks"] || [];
      for (const u of q) {
        if (u.id === 6002) {
          {
            if (e) await this.SignIn(u);
          }
        }
        if (u.id === 6005) this.adData = u;
      }
      return true;
    }
    this.log("用户信息获取失败: " + JSON.stringify(l));
    return false;
  }
  async ["Treasure_Box"]() {
    const f = "https://tube.e.kuaishou.com/rest/e/tube/inspire/treasureBox",
      g = aJ(this.message);
    let h = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": g
    });
    h = h.replaceAll("/", "\\/");
    const i = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await aW("/rest/e/tube/inspire/treasureBox&&" + h, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      j = await this.http.post(f, h, {
        "headers": i
      }),
      k = j.data;
    if (k?.["result"] === 1) {
      {
        const l = JSON.parse(aI(k.data));
        this.BoxAdInfo = l?.["popupInfo"]?.["buttonInfo"]?.["linkUrl"];
        const m = l.id,
          n = l.taskToken,
          o = l?.["popupInfo"]?.["stages"] || [];
        let p = "";
        for (const q of o) {
          {
            if (q.status === 13) {
              p = q.stageIndex;
              break;
            } else {
              if (q.status === 10) {
                const s = Math.floor((q.countdown || 0) / 1000 / 60),
                  t = q.subtitle;
                this.log("宝箱" + t + "，预计剩余 " + s + " 分钟");
              }
            }
          }
        }
        if (p !== "") {
          const v = await this.Task_Report(m, n, p);
          if (v?.["taskFinished"]) this.log("宝箱开启成功，本次获得 " + v.amount + " 金币");
        }
      }
    } else this.log("宝箱信息拉取失败: " + JSON.stringify(k));
  }
  async ["Event_Report"](e) {
    const g = "https://tube.e.kuaishou.com/rest/e/tube/inspire/event/report",
      h = aK(this.message, e);
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
        "Ks-Sig3": await aW("/rest/e/tube/inspire/event/report&&" + i, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      k = await this.http.post(g, i, {
        "headers": j
      });
    return k.data;
  }
  async ["Task_Report"](e, f, g) {
    const i = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      j = aL(this.message, e, f, g);
    let k = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": j
    });
    k = k.replaceAll("/", "\\/");
    const l = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await aW("/rest/e/tube/inspire/task/report&&" + k, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      m = await this.http.post(i, k, {
        "headers": l
      }),
      n = m.data;
    if (n?.["result"] === 1) return JSON.parse(aI(n.data));
    this.log("任务上报未通过");
    return null;
  }
  async ["SignIn"](e) {
    const g = e.popupInfo,
      h = g.taskId,
      i = g.taskToken,
      j = g.stages || [];
    let k = null;
    for (const m of j) {
      if (m.title === "今天") {
        k = m;
        break;
      }
    }
    if (!k) {
      this.log("今日已签到");
      return;
    }
    const l = k.stageIndex;
    if (k.status === 10) {
      this.log("进行签到");
      const n = await this.Task_Report(h, i, l);
      if (n?.["statusCode"] === 1003) this.log(n.errorMessage);
    }
  }
  async ["GetAd"](e) {
    const g = "https://open.e.kuaishou.com/rest/e/v3/open/univ",
      h = aM(this.message, e);
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
        "Ks-Sig1": await aX("/rest/e/v3/open/univ&&" + i, this.http, this.user_id),
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
    if (l?.["result"] === 1) return JSON.parse(aI(l.impAdInfo));
    this.log("拉取广告失败");
    return [];
  }
  async ["Upload_Video_Time"]() {
    const f = Date.now(),
      g = {
        "eventType": "WATCH_TUBE",
        "eventTime": f,
        "data": "{\"tubeId\":\"3412489\",\"episodeNumber\":1,\"photoId\":\"77298100\",\"watchTime\":30}"
      },
      h = await this.Event_Report(g);
    if (h?.["result"] === 1) this.log("时长上报完成");
  }
  async ["watchTube"]() {
    const f = this.watchTubeTask?.["taskStatus"];
    if (f === 13) {
      {
        const h = await this.Task_Report(this.watchTubeTask.id, this.watchTubeTask.extParam.taskToken, this.watchTubeTask.process);
        if (h?.["taskFinished"]) this.log("任务完成，领取 " + h.amount + " 金币");
      }
    } else {
      if (f === 10) {
        this.log(this.watchTubeTask?.["subtitle"] || "继续观看以解锁奖励");
        await this.Upload_Video_Time();
      }
    }
  }
  async ["WatchAD"]() {
    if (!this.adData) return this.log("今日广告任务已完成"), false;
    const f = this.adData.extParam.taskToken,
      g = this.adData.id;
    let h = this.adData.buttonInfo.linkUrl;
    while (h.length % 4 !== 0) h += "=";
    const i = JSON.parse(Buffer.from(h, "base64").toString("utf8")),
      j = i.posId,
      k = await this.GetAd(j);
    let l, m, n, o;
    if (k.length >= 1) {
      {
        const w = k[0];
        l = w.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
        m = w.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
        const x = JSON.parse(w.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        n = x.transId;
        o = String(n || "").split("_");
      }
    } else {
      const z = Date.now();
      l = 148407627585 + aO(0, 1000000);
      m = aO(400, 50400);
      n = "2008597857549383489_" + l + "_" + z;
      o = n.split("_");
    }
    const p = aN(this.message, j, m, o[0], l, f, o[0] + "_" + o[1], o[2], g);
    await aq(aO(16, 32) * 1000);
    const q = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let s = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": p
    });
    s = s.replaceAll("/", "\\/");
    const t = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await aW("/rest/e/tube/inspire/task/report&&" + s, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      u = await this.http.post(q, s, {
        "headers": t
      }),
      v = u.data;
    if (v?.["result"] === 1) {
      const A = JSON.parse(aI(v.data));
      if (A?.["taskFinished"]) {
        this.log("广告完成，获得 " + A.amount + " 金币");
        if (A.amount === 50) {
          this.log("此号疑似黑号");
          return false;
        }
        if (A.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
        if (A.popUp && A.popUp.id === "continuousWatchAdPopup") {
          const C = A.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
          let D = C;
          while (D.length % 4 !== 0) D += "=";
          const E = JSON.parse(Buffer.from(D, "base64").toString("utf8")),
            F = E.extParams,
            G = E.posId,
            H = E.businessId;
          await aq(aO(2, 6) * 1000);
          this.AdXunHuan = 0;
          await this.MoreWatchAD(F, G, H);
        }
      } else {
        this.log("广告上报失败（A）");
        return false;
      }
    } else return this.log("广告上报失败（B）"), false;
    return true;
  }
  async ["MoreWatchAD"](e, f, g) {
    this.AdXunHuan += 1;
    const i = await this.GetAd(f);
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
      {
        const y = Date.now();
        j = 148407627585 + aO(0, 1000000);
        k = aO(400, 50400);
        l = "2008597857549383489_" + j + "_" + y;
        m = l.split("_");
      }
    }
    const n = aN(this.message, f, k, m[0], j, e, m[0] + "_" + m[1], m[2], g, this.AdXunHuan);
    await aq(aO(18, 30) * 1000);
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
        "Ks-Sig3": await aW("/rest/e/tube/inspire/task/report&&" + p, this.http, this.user_id),
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
      const z = JSON.parse(aI(t.data));
      if (z?.["taskFinished"]) {
        {
          if (z.amount === 50) return this.log("此号疑似黑号"), false;
          if (z.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
          this.log("嵌套广告第 " + this.AdXunHuan + " 次完成，获得 " + z.amount + " 金币");
          if (z.popUp && z.popUp.id === "continuousWatchAdPopup") {
            const B = z.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
            let C = B;
            while (C.length % 4 !== 0) C += "=";
            const D = JSON.parse(Buffer.from(C, "base64").toString("utf8")),
              E = D.extParams,
              F = D.posId,
              G = D.businessId;
            await aq(aO(2, 6) * 1000);
            await this.MoreWatchAD(E, F, G);
          } else this.log("嵌套广告累计次数：" + this.AdXunHuan), this.AdXunHuan = 0;
        }
      } else this.log("广告上报失败（A）");
    } else this.log("广告上报失败（B）");
    return true;
  }
  async ["BoxAd"]() {
    this.BoxAdXunHuan = 0;
    let g = this.BoxAdInfo || "";
    if (!g || g.trim() === "") {
      this.log("宝箱广告信息为空，跳过宝箱广告任务");
      return;
    }
    try {
      while (g.length % 4 !== 0) g += "=";
      const h = JSON.parse(Buffer.from(g, "base64").toString("utf8"));
      if (!h || !h.businessId || !h.extParams || !h.posId) {
        {
          this.log("宝箱广告数据结构无效，跳过宝箱广告任务");
          return;
        }
      }
      const i = h.businessId,
        j = h.extParams,
        k = h.posId;
      await this.WatchBoxAd(j, k, i);
    } catch (m) {
      this.log("宝箱广告数据解析失败: " + m.message + "，跳过宝箱广告任务");
      return;
    }
  }
  async ["WatchBoxAd"](f, g, h) {
    this.BoxAdXunHuan += 1;
    if (!(await this.User_info(false))) {
      this.log("账号金币已达上限，停止执行");
      return false;
    }
    const j = await this.GetAd(g);
    let k, l, m, n;
    if (j.length >= 1) {
      const w = j[0];
      k = w.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      l = w.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const x = JSON.parse(w.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        m = x.transId;
        n = String(m || "").split("_");
      } catch (y) {
        {
          this.log("广告回调信息解析失败: " + y.message + "，使用默认值");
          const A = Date.now();
          k = k || 148407627585 + aO(0, 1000000);
          l = l || aO(400, 50400);
          m = "2008597857549383489_" + k + "_" + A;
          n = m.split("_");
        }
      }
    } else {
      const B = Date.now();
      k = 148407627585 + aO(0, 1000000);
      l = aO(400, 50400);
      m = "2008597857549383489_" + k + "_" + B;
      n = m.split("_");
    }
    const o = aN(this.message, g, l, n[0], k, f, n[0] + "_" + n[1], n[2], h, this.BoxAdXunHuan);
    await aq(aO(18, 30) * 1000);
    const p = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let q = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": o
    });
    q = q.replaceAll("/", "\\/");
    const s = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await aW("/rest/e/tube/inspire/task/report&&" + q, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      t = await this.http.post(p, q, {
        "headers": s
      }),
      u = t.data;
    if (u?.["result"] === 1) {
      try {
        const D = JSON.parse(aI(u.data));
        if (D?.["taskFinished"]) {
          {
            if (D.amount === 50) return this.log("此号疑似黑号"), false;
            if (D.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
            this.log("宝箱广告第 " + this.BoxAdXunHuan + " 次完成，获得 " + D.amount + " 金币");
            if (D.popUp && D.popUp.id === "continuousWatchAdPopup") {
              const E = D.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
              if (E && E.trim() !== "") {
                try {
                  let F = E;
                  while (F.length % 4 !== 0) F += "=";
                  const G = JSON.parse(Buffer.from(F, "base64").toString("utf8"));
                  if (G && G.extParams && G.posId && G.businessId) {
                    const H = G.extParams,
                      I = G.posId,
                      J = G.businessId;
                    await aq(aO(2, 6) * 1000);
                    const K = await this.WatchBoxAd(H, I, J);
                    if (!K) return false;
                  } else this.log("嵌套广告数据结构无效，停止嵌套广告");
                } catch (L) {
                  this.log("嵌套广告数据解析失败: " + L.message + "，停止嵌套广告");
                }
              } else this.log("嵌套广告链接为空，停止嵌套广告");
            } else {
              this.log("本次共执行[" + this.BoxAdXunHuan + "]次宝箱广告");
              this.BoxAdXunHuan = 0;
            }
          }
        } else this.log("广告上报失败（A）");
      } catch (Q) {
        this.log("广告响应解析失败: " + Q.message);
        return false;
      }
    } else {
      this.log("广告上报失败（B）");
    }
    return true;
  }
  async ["main"]() {
    await this.User_info();
    await this.Treasure_Box();
    await aq(aO(3, 6) * 1000);
    while (true) {
      if (!(await this.User_info(false))) return;
      if (!(await this.WatchAD())) break;
      await aq(aO(15, 40) * 1000);
    }
    await this.BoxAd();
    await this.watchTube();
  }
}
async function aZ() {
  const f = process.env[aw];
  if (!f) {
    console.warn("请先设置环境变量[" + aw + "]");
    return;
  }
  const g = process.env.xfkm;
  if (!g || !g.trim()) {
    console.error("未检测到环境变量[xfkm]，请先在青龙面板设置 xfkm 后再运行。");
    return;
  }
  if (ax) try {
    {
      const n = await ap.get("http://210.16.163.50:19999/gg.php", {
        "timeout": 10000
      });
      let o = n?.["data"] ?? "";
      if (Buffer.isBuffer(o)) o = o.toString("utf8");
      o = String(o).trim();
      o && o !== "0" && console.log(o, "\n\n\n");
    }
  } catch {}
  if (ay) {
    const p = aO(10, 60);
    console.log("已启用随机延时：" + p + " 秒");
    await aq(p * 1000);
  }
  const h = b0(f);
  console.log("账号数量：" + h.length);
  console.log("▶ 开始运行：" + au + " " + av);
  const i = Date.now(),
    j = parseInt(process.env.maxth || "1", 10),
    k = at(Math.max(1, j));
  await Promise.all(h.map((q, s) => k(async () => {
    try {
      const t = new aY(q),
        u = await t.checkSock5();
      if (!u.available) t.log("代理不可用 错误信息: [" + u.error + "]", "error");else {
        if (u.response_time != null) t.log("代理可用 响应时间: [" + u.response_time + "秒]");
      }
      await t.main();
    } catch (v) {
      console.error("账号" + (s + 1) + "执行错误:", v);
    }
  })));
  const l = (Date.now() - i) / 1000;
  console.log("\n■ 运行结束：" + au);
  console.log("⏱ 总耗时：" + l.toFixed(2) + " 秒");
}
function b0(e) {
  if (e.includes("\n")) return e.split("\n").filter(Boolean);
  if (e.includes("&")) return e.split("&").filter(Boolean);
  return [e];
}
require.main === module && aZ().catch(e => {
  console.error(e);
  process.exit(1);
});