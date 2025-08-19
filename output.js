//Tue Aug 19 2025 11:20:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const Z = new aE("ks200"),
  a0 = "ks200";
let a5 = (Z.isNode() ? process.env.phid : Z.getdata("phid")) || "",
  a6 = (Z.isNode() ? process.env.km : Z.getdata("km")) || "",
  a7 = (Z.isNode() ? process.env.jinbi : Z.getdata("jinbi")) || "";
let ab = 0,
  ac = ["@", "\n"],
  ad = msg = "",
  ae = (Z.isNode() ? process.env[a0] : Z.getdata(a0)) || "",
  af = [],
  ag = 0,
  ah = 0,
  ai = Date.now(),
  aj = ai - 25000;
const ak = new Date(),
  al = ak.getHours();
let am = [],
  an = 30000,
  ao = 38000;
const ap = (Z.isNode() ? process.env.xz : Z.getdata("xz")) || "";
"0" === ap && (an = 0, ao = 5000);
async function ar() {
  try {
    {
      let g = {
          "method": "get",
          "url": "http://210.16.163.50:8999/jk.php",
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        },
        h = await aA(g);
      return !(!h || !Array.isArray(h)) && (am = h, true);
    }
  } catch (j) {
    return false;
  }
}
function as(f, g = "") {
  const j = am.find(l => l.name === f);
  if (!j || !j.interfaces || 0 === j.interfaces.length) return null;
  const k = Math.floor(Math.random() * j.interfaces.length);
  return j.interfaces[k];
}
function at() {
  return Math.floor(Math.random() * (ao - an + 1)) + an;
}
async function au() {
  const f = {
    "adzfM": function (g, h) {
      return g != h;
    },
    "LtIRu": "undefined",
    "JBVcE": function (g, h, j) {
      return g(h, j);
    },
    "VSvQQ": function (g, h) {
      return g * h;
    },
    "XyotR": "@chavy_boxjs_userCfgs.httpapi",
    "XAxIT": "@chavy_boxjs_userCfgs.httpapi_timeout",
    "UvMWP": "cron",
    "rzLJY": "*/*",
    "IqlZd": function (g, h) {
      return g != h;
    },
    "IXzCT": function (g, h) {
      return g == h;
    },
    "glogc": function (g, h) {
      return g === h;
    },
    "ONWDF": "icHEU",
    "adnSV": "qUQar",
    "kwfhI": ".$1",
    "JgVGD": function (g, h) {
      return g(h);
    },
    "LKsiA": "hhVdq",
    "batzu": "data",
    "jeKhG": "end",
    "FrmZC": "error",
    "TJoLY": function (g, h) {
      return g + h;
    },
    "vIrsA": function (g, h) {
      return g > h;
    },
    "JNReK": function (g, h) {
      return g + h;
    },
    "aUZEW": function (g, h) {
      return g + h;
    },
    "IMBoD": "object",
    "fIlsA": function (g, h) {
      return g(h);
    },
    "xFMcM": "got",
    "EIXZo": function (g, h) {
      return g(h);
    },
    "OfYLr": "tough-cookie",
    "YsYHd": function (g, h) {
      return g === h;
    },
    "FYqRo": function (g, h) {
      return g === h;
    },
    "POJed": "base64",
    "nJBuC": "utf-8",
    "uhbBJ": function (g, h) {
      return g !== h;
    },
    "UpBKG": "agdOE",
    "gsras": "未找到ks200账号环境变量",
    "GITJr": function (g, h) {
      return g > h;
    },
    "dVtBH": function (g, h) {
      return g !== h;
    },
    "LizLh": "wyiln",
    "WORDS": function (g, h) {
      return g < h;
    },
    "EnmCr": "YLLfm",
    "TvJPq": function (g, h) {
      return g + h;
    },
    "dkUkz": function (g, h) {
      return g >= h;
    },
    "piEVb": "GET",
    "svqPT": "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
    "jmbqN": "nebula.kuaishou.com",
    "vrWmu": "keep-alive",
    "NcuBF": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36 Yoda/3.0.8-rc5 ksNebula/10.11.30.4945 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/az4 ICFO/0 StatusHT/29 TitleHT/44 NetType/LTE ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0 ISLM/-1",
    "bCJou": "application/json",
    "KEcUS": function (g, h) {
      return g !== h;
    },
    "jCmom": "NUnBE",
    "Mgser": "PiyAs",
    "YKvlo": function (g, h) {
      return g(h);
    },
    "HyZPA": "https",
    "luETy": "url",
    "NYChV": function (g, h) {
      return g == h;
    },
    "jPwco": function (g, h) {
      return g === h;
    },
    "JdasO": "trzoa",
    "wFeKR": "STWOw",
    "JOCgP": function (g, h) {
      return g > h;
    },
    "pURKl": function (g, h) {
      return g + h;
    },
    "VvbRk": function (g, h) {
      return g + h;
    },
    "KrFKl": "ouqBj",
    "PHHKK": "ZUNaM",
    "esslr": function (g, h) {
      return g + h;
    },
    "bWMWj": function (g, h) {
      return g !== h;
    },
    "Yaaxh": "xvCtc",
    "FQzYL": "查询金币余额时出错:"
  };
  try {
    {
      if (!ae) return void console.log("未找到ks200账号环境变量");
      let h = ac[0];
      for (let k of ac) if (ae.indexOf(k) > -1) {
        {
          h = k;
          break;
        }
      }
      const j = ae.split(h).filter(m => m.trim());
      for (let m = 0; m < j.length; m++) {
        {
          const r = j[m].trim();
          if (!r) continue;
          const u = r.split("#");
          if (u.length < 5) {
            console.log("账号 " + (m + 1) + " 格式错误，请使用salt#kuaishou.api_st#userId#egid#did#备注");
            continue;
          }
          const v = u[1],
            w = (u[2], u.length >= 6 ? u[5] : "小主"),
            x = {
              "method": "GET",
              "url": "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
              "headers": {
                "Host": "nebula.kuaishou.com",
                "Connection": "keep-alive",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36 Yoda/3.0.8-rc5 ksNebula/10.11.30.4945 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/az4 ICFO/0 StatusHT/29 TitleHT/44 NetType/LTE ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0 ISLM/-1",
                "Cookie": "kuaishou.api_st=" + v + ";client_key=2ac2a76d;",
                "content-type": "application/json"
              }
            };
          try {
            {
              const y = require("https"),
                z = require("url").parse(x.url),
                A = {
                  "hostname": z.hostname,
                  "port": z.port || 443,
                  "path": z.path,
                  "method": x.method,
                  "headers": x.headers
                },
                B = await new Promise((C, D) => {
                  const F = y.request(A, G => {
                    let I = "";
                    G.on("data", J => {
                      I += J;
                    });
                    G.on("end", () => {
                      try {
                        const K = JSON.parse(I);
                        C(K);
                      } catch (L) {
                        D(L);
                      }
                    });
                  });
                  F.on("error", G => {
                    D(G);
                  });
                  F.end();
                });
              if (1 == B.result) {
                const C = B.data.totalCoin,
                  D = B.data.allCash;
                if (console.log("账号[" + (m + 1) + "] " + w + "您的金币: " + C + " 余额: " + D), a7) {
                  {
                    const F = parseInt(a7);
                    C > F ? (console.log("账号[" + (m + 1) + "] 金币(" + C + ")大于(" + F + ")，今天任务已完成"), process.exit(0)) : console.log("账号[" + (m + 1) + "] 金币(" + C + ")小于等于(" + F + ")，继续执行任务");
                  }
                } else console.log("账号[" + (m + 1) + "] 防黑号小技巧:小主可创建jinbi变量,设置每天的获取金币数量！");
              } else console.log("账号[" + (m + 1) + "] 查询失败 ❌，原因: " + B.error_msg);
            }
          } catch (H) {
            console.log("账号[" + (m + 1) + "] 查询异常: " + H);
          }
        }
      }
    }
  } catch (J) {
    console.log("查询金币余额时出错:", J);
  }
}
async function av() {
  console.log("\n================== 获取ad ==================\n");
  await au();
  let g = 0;
  for (; g < 10;) {
    g++;
    for (let i of af) {
      {
        const j = at();
        console.log("账号[" + i.index + "]  随机延迟 " + Math.round(j / 1000) + "秒");
        i.initialDelay = j;
      }
    }
    let h = [];
    for (let l of af) h.push((async () => {
      await new Promise(m => setTimeout(m, l.initialDelay));
      await l.cid(672);
      await l.cid(606);
    })());
    await Promise.all(h);
  }
}
class aw {
  constructor(f) {
    if (this.index = ++ag, this.ck = f.split("#"), this.ck.length < 5) return console.log("账号[" + this.index + "] CK格式错误: " + f), console.log("至少需要5个参数: salt#kuaishou.api_st#userId#egid#did#备注"), void (this.valid = false);
    this.valid = true;
    this.remark = this.ck.length >= 6 ? this.ck[5] : "小主";
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36 Yoda/3.0.8-rc5 ksNebula/10.11.30.4945 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/az4 ICFO/0 StatusHT/29 TitleHT/44 NetType/LTE ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0 ISLM/-1",
      "Cookie": "kuaishou.api_st=" + this.ck[1].replace("kuaishou.api_st=", "") + ";client_key=2ac2a76d;",
      "content-type": "application/json"
    };
    this.hostt = "https://api.e.kuaishou.com";
    this.salt = this.ck[0];
    this.path = "/rest/r/ad/task/report";
    this.query = "mod=Xiaomi(23116PN5BC)&appver=13.2.41.9745&egid=" + this.ck[3] + "&did=" + this.ck[4];
  }
  async ["sig3"](f, g, h, j, k) {
    const l = {
      "wLmQR": function (p, r) {
        return p === r;
      },
      "GWGRD": function (p, r) {
        return p * r;
      },
      "aGnto": function (p, r, u, v) {
        return p(r, u, v);
      },
      "FMNfx": function (p, r) {
        return p === r;
      },
      "QFRCw": "sqiek",
      "EUAkC": "uvluy",
      "BLkHe": function (p, r, u) {
        return p(r, u);
      },
      "jgQQj": "sign",
      "bandI": "post",
      "jHgNo": function (p, r) {
        return p(r);
      },
      "ZbpQW": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "vToMA": function (p, r) {
        return p === r;
      },
      "JOmNK": function (p, r) {
        return p !== r;
      },
      "BjKMb": "pduEf",
      "ZwMed": "JOrbY"
    };
    if (this.valid) {
      if (672 === h) var m = "bizStr={\"businessId\":" + h + ",\"endTime\":" + aj + ",\"extParams\":\"\",\"mediaScene\":\"" + j + "\",\"neoInfos\":[{\"creativeId\":" + f + ",\"extInfo\":\"\",\"llsid\":" + g + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0},{\"creativeId\":" + f + ",\"extInfo\":\"\",\"llsid\":" + g + ",\"requestSceneType\":1,\"taskType\":3,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ai + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
      if (606 === h) m = "bizStr={\"businessId\":" + h + ",\"endTime\":" + aj + ",\"extParams\":\"\",\"mediaScene\":\"" + j + "\",\"neoInfos\":[{\"creativeId\":" + f + ",\"extInfo\":\"\",\"llsid\":" + g + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":20346,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ai + ",\"subPageId\":100024064}&cs=false&client_key=2ac2a76d";
      try {
        {
          const r = as("sign", this.index);
          if (!r) return;
          const u = af.length;
          let v = {
              "method": "post",
              "url": "http://" + r.url + "?km=" + encodeURIComponent(a6) + "&shuliang=" + u,
              "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
              },
              "body": JSON.stringify({
                "query": this.query,
                "body": m,
                "salt": this.salt,
                "path": this.path
              })
            },
            w = await aA(v, k);
          if (w && w.Sig && w.Sig3 && w.NsSig) {
            let x = w.Sig,
              y = w.Sig3,
              z = w.NsSig;
            672 === h && (await this.ad(x, y, z, m));
            606 === h && (await this.boxad(x, y, z, m));
          } else aC("账号[" + this.index + "]  接口失败 ❌ 了呢,原因" + w), console.log(w);
        }
      } catch (A) {
        console.log(A);
      }
    }
  }
  async ["cid"](f, g) {
    const h = {
      "NJeEo": function (j, k) {
        return j(k);
      },
      "JPeCe": function (j, k, l) {
        return j(k, l);
      },
      "laPrK": "enc",
      "eqLIx": "get",
      "YsZvs": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "uQWuD": function (j, k, l) {
        return j(k, l);
      },
      "aiset": function (j, k) {
        return j == k;
      },
      "YhBxl": function (j, k) {
        return j !== k;
      },
      "CrDHa": "AjMpW",
      "MGrXi": function (j, k) {
        return j === k;
      },
      "bEqSz": "undefined",
      "nLZBN": function (j, k) {
        return j === k;
      },
      "qYhiU": function (j) {
        return j();
      },
      "BxmsV": function (j, k) {
        return j / k;
      },
      "mYHVt": "video",
      "cCtHj": "未知错误",
      "ozZDD": function (j, k) {
        return j !== k;
      },
      "WnzNd": "iaapt",
      "mmKdS": "DXwaT"
    };
    if (this.valid) try {
      let j = f;
      const k = as("enc", this.index);
      if (!k) return void console.log("账号[" + this.index + "] 无法获取enc接口");
      let l = {
          "method": "get",
          "url": "http://" + k.url + "?km=" + encodeURIComponent(a6),
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          },
          "qs": {
            "salt": this.ck[0],
            "userId": this.ck[2],
            "did": this.ck[4],
            "oaid": "",
            "apist": this.ck[1],
            "adType": j
          }
        },
        m = await aA(l, g);
      if (m && 1 == m.result && m.feeds && m.feeds[0]) {
        {
          m.feeds[0].caption && console.log("账号[" + this.index + "] " + m.feeds[0].caption);
          let r = m.feeds[0].exp_tag.split("/")[1].split("_")[0],
            u = m.feeds[0].ad.creativeId,
            v = r,
            w = m.feedType;
          if (!v || "undefined" === v || "" === v) return;
          if (0 === w) {
            const x = at();
            console.log("账号[" + this.index + "]  随机延迟 " + Math.round(x / 1000) + "秒");
            await new Promise(z => setTimeout(z, x));
            let y = "video";
            await this.sig3(u, v, f, y);
          }
        }
      } else console.log("账号[" + this.index + "]  获取cid失败 ❌ 了呢,原因" + (m.errorMsg || m.error_msg || "未知错误")), m.result || m.errorMsg || m.error_msg, console.log(m);
    } catch (z) {
      console.log(z);
    }
  }
  async ["boxad"](f, g, h, j, k) {
    const l = {
      "qqPPj": function (m) {
        return m();
      },
      "PTKcR": function (m) {
        return m();
      },
      "nSGgN": function (m, p) {
        return m / p;
      },
      "LGcPm": "post",
      "WTOMc": "api.e.kuaishou.cn",
      "uRhAd": "kwai-android aegon/3.56.0",
      "xoLMu": function (m, p) {
        return m + p;
      },
      "AxuOJ": "kuaishou.api_st=",
      "bCavq": "NEW_TASK_CENTER",
      "sgVfA": "application/x-www-form-urlencoded",
      "CvElb": "model=V2049A;os=Android;nqe-score=33;network=WIFI;",
      "XwxeL": function (m, p, r) {
        return m(p, r);
      },
      "GjAsg": function (m, p) {
        return m == p;
      },
      "abPsj": function (m, p) {
        return m !== p;
      },
      "MFAiQ": "efZpW",
      "qzEqG": function (m, p) {
        return m === p;
      },
      "LNqbg": function (m, p) {
        return m !== p;
      },
      "Owdvc": "HaPhW"
    };
    try {
      let m = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + f + "&__NS_sig3=" + g + "&__NS_xfalcon=&__NStokensig=" + h,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou.api_st=" + this.ck[1].replace("kuaishou.api_st=", ""),
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": j
        },
        p = await aA(m, k);
      if (1 == p.result) {
        {
          let u = p.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  开宝箱获得金币:" + u);
          p.data.neoAmount;
          0 === this.j && p.data.neoAmount;
        }
      } else {
        p.result;
        console.log(p);
      }
    } catch (w) {
      console.log(w);
    }
  }
  async ["ad"](f, g, h, j, k) {
    try {
      {
        let m = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + f + "&__NS_sig3=" + g + "&__NS_xfalcon=&__NStokensig=" + h,
            "headers": {
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou.api_st=" + this.ck[1].replace("kuaishou.api_st=", ""),
              "page-code": "NEW_TASK_CENTER",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
            },
            "body": j
          },
          p = await aA(m, k);
        if (1 == p.result) {
          let r = p.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  看广告获得金额:" + r);
          this.j = p.data.awardAmount;
        } else p.result, p.error_msg, p.message, p.result, console.log(p);
      }
    } catch (v) {
      console.log(v);
    }
  }
}
function ax() {
  return Math.floor(3 * Math.random()) + 8;
}
function ay(f) {
  return Buffer.from(f, "base64").toString("utf-8");
}
async function az() {
  if (!a6) return console.log("❌未找到km环境变量，请设置青龙面板的km变量"), false;
  if (ae) {
    let g = ac[0];
    for (let h of ac) if (ae.indexOf(h) > -1) {
      g = h;
      break;
    }
    for (let i of ae.split(g)) i && (i.split("#").length >= 5 ? af.push(new aw(i)) : (console.log("❌CK格式错误，跳过: " + i), console.log("正确格式为: salt#kuaishou.api_st#userId#egid#did#备注"), console.log("备注参数可选，如果不提供则默认为'小主'")));
    ah = af.length;
    return 0 === ah ? (console.log("❌没有找到有效的账号配置"), false) : (console.log("✅共找到" + ah + "个有效账号"), true);
  }
  console.log("❌未找到CK环境变量");
  console.log("格式为: salt#kuaishou.api_st#userId#egid#did#备注");
  console.log("备注参数可选，如果不提供则默认为'小主'");
  console.log("多账号用@或换行符隔开");
  return false;
}
async function aA(f, g) {
  const h = {
    "HNZGx": "open-url",
    "QakpN": "media-url",
    "rHcMY": function (j, k) {
      return j + k;
    },
    "zxlaI": function (j, k) {
      return j / k;
    },
    "PPfic": function (j, k) {
      return j + k;
    },
    "Bdgof": function (j, k) {
      return j - k;
    },
    "TzBAK": function (j, k) {
      return j == k;
    },
    "DTKdU": function (j, k) {
      return j + k;
    },
    "jjWMT": function (j, k) {
      return j + k;
    },
    "uUOlO": function (j, k) {
      return j === k;
    },
    "LfCxt": "null",
    "xayZp": function (j, k) {
      return j || k;
    },
    "wzdfT": "eWRhr",
    "xPMVJ": "string",
    "gDMAF": "object",
    "BcgwG": "CpyPx",
    "TnyZu": "TJMFG",
    "mOatu": function (j, k) {
      return j(k);
    },
    "oDBSD": function (j, k) {
      return j !== k;
    },
    "Mmjtg": "zpAYE",
    "iOVbi": "VyxXh",
    "zNRLU": "otiBc",
    "YTnKo": "VMDZT",
    "gEFAx": function (j) {
      return j();
    },
    "fBxTw": function (j, k) {
      return j === k;
    },
    "diIhV": "StOMf",
    "Kerql": function (j, k) {
      return j === k;
    },
    "BREsY": "VvCWl",
    "QOSgo": function (j, k, l) {
      return j(k, l);
    },
    "UNvJT": "request"
  };
  var i = require("request");
  return new Promise(j => {
    const k = {
      "oaDcX": function (l, m) {
        return l + m;
      },
      "hSJlF": function (l, m) {
        return l / m;
      },
      "owXik": function (l, m) {
        return l + m;
      },
      "usRuG": function (l, m) {
        return l + m;
      },
      "eyzgm": function (l, m) {
        return l - m;
      },
      "HfZpU": function (l, m) {
        return l == m;
      },
      "jXDUj": function (l, m) {
        return l + m;
      },
      "ByNTT": function (l, m) {
        return l + m;
      },
      "vJDNT": function (l, m) {
        return l === m;
      },
      "wEMWV": "null",
      "wFMCg": function (l, m) {
        return l || m;
      },
      "YtXMI": "eWRhr",
      "KiKNc": "string",
      "cuEva": "object",
      "FqrEA": "CpyPx",
      "CVTQH": "TJMFG",
      "BSkJl": function (l, m) {
        return l(m);
      },
      "nZuqR": function (l, m) {
        return l !== m;
      },
      "bkxCc": "zpAYE",
      "gHrGF": "VyxXh",
      "cZMcc": function (l, m) {
        return l(m);
      },
      "paCDw": "otiBc",
      "TQYGp": function (l, m) {
        return l !== m;
      },
      "EiBfe": "VMDZT",
      "DsnVp": function (l) {
        return l();
      }
    };
    {
      if (!g) {
        {
          let l = arguments.callee.toString(),
            m = /function\s*(\w*)/i.exec(l);
          g = m[1];
        }
      }
      ab && (console.log("\n【debug】===============这是" + g + "请求信息==============="), console.log(f));
      i(f, function (p, r) {
        if (p) throw new Error(p);
        let v = r.body;
        try {
          if (ab && (console.log("\n\n【debug】===============这是" + g + "返回数据=============="), console.log(v)), "string" == typeof v) {
            if (function (w) {
              {
                if ("string" == typeof w) try {
                  if ("object" == typeof JSON.parse(w)) return true;
                } catch (x) {
                  return false;
                }
                return false;
              }
            }(v)) {
              {
                let w = JSON.parse(v);
                ab && (console.log("\n【debug】=============这是" + g + "json解析后数据============"), console.log(w));
                j(w);
              }
            } else j(v);
          } else {
            j(v);
          }
        } catch (z) {
          console.log(p, r);
          console.log("\n " + g + "失败了!请稍后尝试!!");
        } finally {
          j();
        }
      });
    }
  });
}
function aB(f) {
  return new Promise(function (h) {
    setTimeout(h, 1000 * f);
  });
}
function aC(f) {
  Z.isNode() ? f && (console.log("" + f), msg += "\n" + f) : (console.log("" + f), msg += "\n" + f);
}
async function aD(f) {
  f && console.log(f);
}
function aE(f, g) {
  const h = {
    "QODSF": function (j, k) {
      return j !== k;
    },
    "ajsUx": "PTDiX",
    "AnRkB": "kHQXy",
    "MTSxU": function (j, k) {
      return j(k);
    },
    "rfNkO": function (j, k) {
      return j(k);
    },
    "VZjev": function (j, k) {
      return j == k;
    },
    "pJQDN": "string",
    "DTCha": function (j, k) {
      return j === k;
    },
    "Iwnbg": "POST",
    "CYohD": function (j, k) {
      return j === k;
    },
    "PIteQ": "NphzP",
    "vRBSg": "box.dat",
    "IvZtl": function (j, k) {
      return j != k;
    },
    "LDIqU": "undefined",
    "cgxiO": function (j, k) {
      return j(k);
    },
    "uAvHS": "path",
    "pcFQm": "gabxy",
    "wTVZI": function (j, k) {
      return j != k;
    },
    "bBAxL": function (j, k) {
      return j + k;
    },
    "YXqni": function (j, k) {
      return j * k;
    },
    "oaqXD": "DcKSV",
    "EbLlL": "hgrou",
    "NPqzP": function (j, k) {
      return j !== k;
    },
    "BQDnj": "vvaAT",
    "XTxtF": "cEIOM",
    "JmMaW": function (j, k) {
      return j === k;
    },
    "MFSiG": "iqxNl",
    "RcMQh": "QWvGz",
    "hjaAK": function (j, k, l, m) {
      return j(k, l, m);
    },
    "MWEdt": "Vkksy",
    "MuTKT": "dsMLC",
    "qReVr": "FEBrf",
    "amiYk": "@chavy_boxjs_userCfgs.httpapi",
    "Xmnub": "@chavy_boxjs_userCfgs.httpapi_timeout",
    "dTzDL": function (j, k) {
      return j * k;
    },
    "JKyAs": "cron",
    "eEZZu": "*/*",
    "XdXHI": function (j, k) {
      return j(k);
    },
    "WomMB": "fIJOA",
    "rZVTi": function (j, k) {
      return j(k);
    },
    "rnvdD": function (j, k) {
      return j > k;
    },
    "YWwXr": function (j, k) {
      return j(k);
    },
    "dSMfy": function (j, k) {
      return j && k;
    },
    "GQeLV": "KxMqB",
    "jUYuW": function (j, k) {
      return j != k;
    },
    "xbUPK": "NmZGd",
    "zMgwm": function (j, k) {
      return j(k);
    },
    "ZwHFL": function (j, k) {
      return j(k);
    },
    "GfLjH": function (j, k) {
      return j !== k;
    },
    "UIhUl": "XajcJ",
    "Tsell": ".$1",
    "tpcul": function (j, k) {
      return j(k);
    },
    "fAjfO": function (j, k) {
      return j === k;
    },
    "phVkb": function (j, k) {
      return j - k;
    },
    "gSWdO": function (j, k) {
      return j !== k;
    },
    "FQLIL": function (j, k) {
      return j - k;
    },
    "epMET": "null",
    "piQkz": function (j, k) {
      return j || k;
    },
    "LWJvt": function (j, k) {
      return j !== k;
    },
    "NlsiT": "vqjZX",
    "bTdHu": function (j, k) {
      return j === k;
    },
    "rnsFT": "fYYgE",
    "rWsTt": "GrqkO",
    "PQMKT": "Nxcqy",
    "GCyYI": "IrVYB",
    "eJevB": "YNodM",
    "PXpJx": function (j, k) {
      return j(k);
    },
    "YFpvl": "got",
    "qiJeX": "tough-cookie",
    "fGtJT": function (j, k) {
      return j === k;
    },
    "OIssx": function (j, k) {
      return j !== k;
    },
    "aofxV": "dzdCS",
    "unOnu": "PecWD",
    "CxSuE": function (j, k) {
      return j + k;
    },
    "Fblwn": function (j, k) {
      return j - k;
    },
    "AonvH": "KREyJ",
    "sApXn": "eshyO",
    "nTngk": "VjaKq",
    "MvCYX": function (j, k) {
      return j && k;
    },
    "VYZIh": function (j, k, l, m) {
      return j(k, l, m);
    },
    "kOEcS": "object",
    "rdtkL": "cNXyx",
    "HQKLD": "lIUNR",
    "xxXze": "set-cookie",
    "QjwUF": function (j, k) {
      return j !== k;
    },
    "piZAq": "vABbV",
    "dNgwz": "zWDoY",
    "mSKPR": "Content-Type",
    "RxypO": "Content-Length",
    "LQwKT": "redirect",
    "KXlUw": "jOcuN",
    "JbYms": "qYPMM",
    "VJGnW": "czLyn",
    "OvncN": "application/x-www-form-urlencoded",
    "cgiXF": "==============📣系统通知📣==============",
    "enXCp": "JxWjN",
    "ruzUm": function (j, k) {
      return j + k;
    },
    "gOeXB": function (j, k) {
      return j / k;
    },
    "kYZpj": function (j, k) {
      return j - k;
    },
    "uvLhY": function (j, k) {
      return j + k;
    },
    "GdDLI": function (j, k) {
      return j + k;
    },
    "GBMni": function (j, k) {
      return j + k;
    },
    "YqLha": "eAIlY",
    "pSjAn": "CMKMF",
    "borhS": function (j, k) {
      return j == k;
    },
    "sUNDA": "open-url",
    "BTwKk": "media-url",
    "NCmYb": "nqtcX",
    "zgqgm": "mTXEU",
    "wyLKQ": function (j, k, l, m, n) {
      return j(k, l, m, n);
    },
    "HwoTR": "ufLUZ",
    "unVAr": "ifyow",
    "SovoB": function (j, k) {
      return j > k;
    },
    "xEdqH": function (j, k) {
      return j && k;
    },
    "rzoVg": "UVXvt",
    "XFkft": "GITHUB"
  };
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class i {
    constructor(j) {
      this.env = j;
    }
    ["send"](j, k = "GET") {
      j = "string" == typeof j ? {
        "url": j
      } : j;
      let m = this.get;
      "POST" === k && (m = this.post);
      return new Promise((n, o) => {
        m.call(this, j, (p, r, u) => {
          p ? o(p) : n(r);
        });
      });
    }
    ["get"](j) {
      return this.send.call(this.env, j);
    }
    ["post"](j) {
      return this.send.call(this.env, j, "POST");
    }
  }
  return new class {
    constructor(j, k) {
      this.name = j;
      this.http = new i(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, k);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](j, k = null) {
      try {
        return JSON.parse(j);
      } catch {
        return k;
      }
    }
    ["toStr"](j, k = null) {
      try {
        return JSON.stringify(j);
      } catch {
        return k;
      }
    }
    ["getjson"](j, k) {
      {
        let l = k;
        if (this.getdata(j)) try {
          l = JSON.parse(this.getdata(j));
        } catch {}
        return l;
      }
    }
    ["setjson"](j, k) {
      try {
        return this.setdata(JSON.stringify(j), k);
      } catch {
        return false;
      }
    }
    ["getScript"](j) {
      return new Promise(l => {
        this.get({
          "url": j
        }, (n, o, p) => l(p));
      });
    }
    ["runScript"](j, k) {
      return new Promise(p => {
        {
          let u = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          u = u ? u.replace(/\n/g, "").trim() : u;
          let v = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          v = v ? 1 * v : 20;
          v = k && k.timeout ? k.timeout : v;
          const [w, x] = u.split("@"),
            y = {
              "url": "http://" + x + "/v1/scripting/evaluate",
              "body": {
                "script_text": j,
                "mock_type": "cron",
                "timeout": v
              },
              "headers": {
                "X-Key": w,
                "Accept": "*/*"
              }
            };
          this.post(y, (z, A, B) => p(B));
        }
      }).catch(n => this.logErr(n));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const j = this.path.resolve(this.dataFile),
          k = this.path.resolve(process.cwd(), this.dataFile),
          l = this.fs.existsSync(j),
          m = !l && this.fs.existsSync(k);
        if (!l && !m) return {};
        {
          const n = l ? j : k;
          try {
            return JSON.parse(this.fs.readFileSync(n));
          } catch (o) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const k = this.path.resolve(this.dataFile),
            l = this.path.resolve(process.cwd(), this.dataFile),
            m = this.fs.existsSync(k),
            n = !m && this.fs.existsSync(l),
            p = JSON.stringify(this.data);
          m ? this.fs.writeFileSync(k, p) : n ? this.fs.writeFileSync(l, p) : this.fs.writeFileSync(k, p);
        }
      }
    }
    ["lodash_get"](j, k, l) {
      {
        const n = k.replace(/\[(\d+)\]/g, ".$1").split(".");
        let p = j;
        for (const r of n) if (p = Object(p)[r], undefined === p) return l;
        return p;
      }
    }
    ["lodash_set"](j, k, l) {
      Object(j) !== j || (Array.isArray(k) || (k = k.toString().match(/[^.[\]]+/g) || []), k.slice(0, -1).reduce((m, n, o) => Object(m[n]) === m[n] ? m[n] : m[n] = (Math.abs(k[o + 1]) | 0) == +k[o + 1] ? [] : {}, j)[k[k.length - 1]] = l);
      return j;
    }
    ["getdata"](j) {
      let k = this.getval(j);
      if (/^@/.test(j)) {
        const [, l, m] = /^@(.*?)\.(.*?)$/.exec(j),
          n = l ? this.getval(l) : "";
        if (n) try {
          const p = JSON.parse(n);
          k = p ? this.lodash_get(p, m, "") : k;
        } catch (r) {
          k = "";
        }
      }
      return k;
    }
    ["setdata"](j, k) {
      let m = false;
      if (/^@/.test(k)) {
        {
          const [, r, u] = /^@(.*?)\.(.*?)$/.exec(k),
            v = this.getval(r),
            w = r ? "null" === v ? null : v || "{}" : "{}";
          try {
            {
              const x = JSON.parse(w);
              this.lodash_set(x, u, j);
              m = this.setval(JSON.stringify(x), r);
            }
          } catch (z) {
            {
              const A = {};
              this.lodash_set(A, u, j);
              m = this.setval(JSON.stringify(A), r);
            }
          }
        }
      } else m = this.setval(j, k);
      return m;
    }
    ["getval"](j) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(j) : this.isQuanX() ? $prefs.valueForKey(j) : this.isNode() ? (this.data = this.loaddata(), this.data[j]) : this.data && this.data[j] || null;
    }
    ["setval"](j, k) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(j, k) : this.isQuanX() ? $prefs.setValueForKey(j, k) : this.isNode() ? (this.data = this.loaddata(), this.data[k] = j, this.writedata(), true) : this.data && this.data[k] || null;
    }
    ["initGotEnv"](j) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      j && (j.headers = j.headers ? j.headers : {}, undefined === j.headers.Cookie && undefined === j.cookieJar && (j.cookieJar = this.ckjar));
    }
    ["get"](j, k = () => {}) {
      const l = {
        "ZalsA": function (m, n) {
          return m && n;
        },
        "QvMDd": function (m, n, o, p) {
          return m(n, o, p);
        },
        "IOvNL": function (m, n) {
          return m == n;
        },
        "lyMsV": "string",
        "tsTMX": function (m, n) {
          return m == n;
        },
        "FsIJh": "object",
        "wWuyb": function (m, n) {
          return m(n);
        },
        "xguVx": function (m, n) {
          return m === n;
        },
        "REeQv": "cNXyx",
        "cppHi": "lIUNR",
        "tvCLf": "set-cookie",
        "xUOgr": function (m, n) {
          return m !== n;
        },
        "rMpVB": "vABbV",
        "MaFMx": "zWDoY",
        "WvYyY": function (m, n) {
          return m(n);
        }
      };
      j.headers && (delete j.headers["Content-Type"], delete j.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (j.headers = j.headers || {}, Object.assign(j.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(j, (m, n, o) => {
        !m && n && (n.body = o, n.statusCode = n.status);
        k(m, n, o);
      })) : this.isQuanX() ? (this.isNeedRewrite && (j.opts = j.opts || {}, Object.assign(j.opts, {
        "hints": false
      })), $task.fetch(j).then(m => {
        {
          const {
            statusCode: p,
            statusCode: r,
            headers: u,
            body: v
          } = m;
          k(null, {
            "status": p,
            "statusCode": r,
            "headers": u,
            "body": v
          }, v);
        }
      }, m => k(m))) : this.isNode() && (this.initGotEnv(j), this.got(j).on("redirect", (m, n) => {
        try {
          if (m.headers["set-cookie"]) {
            const r = m.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            r && this.ckjar.setCookieSync(r, null);
            n.cookieJar = this.ckjar;
          }
        } catch (u) {
          this.logErr(u);
        }
      }).then(m => {
        {
          const {
            statusCode: r,
            statusCode: u,
            headers: v,
            body: w
          } = m;
          k(null, {
            "status": r,
            "statusCode": u,
            "headers": v,
            "body": w
          }, w);
        }
      }, m => {
        {
          const {
            message: o,
            response: p
          } = m;
          k(o, p, p && p.body);
        }
      }));
    }
    ["post"](j, k = () => {}) {
      if (j.body && j.headers && !j.headers["Content-Type"] && (j.headers["Content-Type"] = "application/x-www-form-urlencoded"), j.headers && delete j.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (j.headers = j.headers || {}, Object.assign(j.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(j, (m, n, o) => {
        !m && n && (n.body = o, n.statusCode = n.status);
        k(m, n, o);
      });else {
        if (this.isQuanX()) j.method = "POST", this.isNeedRewrite && (j.opts = j.opts || {}, Object.assign(j.opts, {
          "hints": false
        })), $task.fetch(j).then(m => {
          {
            const {
              statusCode: r,
              statusCode: u,
              headers: v,
              body: w
            } = m;
            k(null, {
              "status": r,
              "statusCode": u,
              "headers": v,
              "body": w
            }, w);
          }
        }, m => k(m));else {
          if (this.isNode()) {
            this.initGotEnv(j);
            const {
              url: m,
              ...n
            } = j;
            this.got.post(m, n).then(p => {
              const {
                statusCode: r,
                statusCode: u,
                headers: v,
                body: w
              } = p;
              k(null, {
                "status": r,
                "statusCode": u,
                "headers": v,
                "body": w
              }, w);
            }, o => {
              const {
                message: p,
                response: r
              } = o;
              k(p, r, r && r.body);
            });
          }
        }
      }
    }
    ["time"](j, k = null) {
      {
        const m = k ? new Date(k) : new Date();
        let n = {
          "M+": m.getMonth() + 1,
          "d+": m.getDate(),
          "H+": m.getHours(),
          "m+": m.getMinutes(),
          "s+": m.getSeconds(),
          "q+": Math.floor((m.getMonth() + 3) / 3),
          "S": m.getMilliseconds()
        };
        /(y+)/.test(j) && (j = j.replace(RegExp.$1, (m.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let o in n) new RegExp("(" + o + ")").test(j) && (j = j.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o]).substr(("" + n[o]).length)));
        return j;
      }
    }
    ["msg"](j = f, k = "", l = "", m) {
      const r = u => {
        {
          if (!u) return u;
          if ("string" == typeof u) return this.isLoon() ? u : this.isQuanX() ? {
            "open-url": u
          } : this.isSurge() ? {
            "url": u
          } : undefined;
          if ("object" == typeof u) {
            if (this.isLoon()) return {
              "openUrl": u.openUrl || u.url || u["open-url"],
              "mediaUrl": u.mediaUrl || u["media-url"]
            };
            if (this.isQuanX()) return {
              "open-url": u["open-url"] || u.url || u.openUrl,
              "media-url": u["media-url"] || u.mediaUrl
            };
            if (this.isSurge()) return {
              "url": u.url || u.openUrl || u["open-url"]
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(j, k, l, r(m)) : this.isQuanX() && $notify(j, k, l, r(m))), !this.isMuteLog) {
        {
          let u = ["", "==============📣系统通知📣=============="];
          u.push(j);
          k && u.push(k);
          l && u.push(l);
          console.log(u.join("\n"));
          this.logs = this.logs.concat(u);
        }
      }
    }
    ["log"](...j) {
      j.length > 0 && (this.logs = [...this.logs, ...j]);
      console.log(j.join(this.logSeparator));
    }
    ["logErr"](j, k) {
      !this.isSurge() && !this.isQuanX() && !this.isLoon() ? this.log("", "❗️" + this.name + ", 错误!", j.stack) : this.log("", "❗️" + this.name + ", 错误!", j);
    }
    ["wait"](j) {
      return new Promise(k => setTimeout(k, j));
    }
    ["done"](j = {}) {
      {
        const k = (new Date().getTime() - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + k + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(j);
      }
    }
  }(f, g);
}
(async () => {
  if (!(await az())) return;
  (await ar()) && (af.length > 0 ? await av() : console.log("❌没有有效的账号配置，程序退出"), await aD(msg));
})().catch(f => console.log(f)).finally(() => Z.done());