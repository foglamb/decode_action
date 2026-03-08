//Sun Mar 08 2026 10:20:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const MAX_EXTRA_AD_COUNT = 200,
  FIXED_DEVICE_CONFIG = {
    "ua": "kwai-android aegon/4.32.0",
    "model": "Xiaomi(24129PN5BC)",
    "android": {
      "sys": "ANDROID_15",
      "apiLevel": "35"
    },
    "screen": {
      "sw": "1440",
      "sh": "3200"
    },
    "net": "WIFI",
    "kcv": "1605",
    "boardPlatform": "kalama"
  },
  SCRIPT_VERSION = "版本1.4",
  VERSION_CHECK_URL = "https://xinghe.uu.pe/版本.html",
  UPDATE_TIP = "版本已有最新版，前往QQ群1076179487更新",
  fs = require("fs"),
  path = require("path"),
  https = require("https"),
  axios = require("axios"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
async function checkScriptVersion() {
  console.log("🔍 开始版本验证 - 本地版本：" + SCRIPT_VERSION);
  try {
    {
      const {
        response: _0x4fea07,
        body: _0x2ec004
      } = await sendRequest({
        "method": "GET",
        "url": VERSION_CHECK_URL,
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "zh-CN,zh;q=0.9"
        },
        "timeout": 10000
      }, null, "版本验证请求");
      if (!_0x4fea07 || _0x4fea07.statusCode !== 200 || !_0x2ec004) return console.log("⚠️ 版本验证页面请求失败，跳过验证继续执行"), true;
      const _0x447e43 = _0x2ec004.match(/版本[\d\.]+/);
      if (!_0x447e43) {
        console.log("⚠️ 版本验证页面未找到有效版本信息，跳过验证继续执行");
        return true;
      }
      const _0x4e6fe8 = _0x447e43[0];
      console.log("🌐 远程版本：" + _0x4e6fe8);
      if (_0x4e6fe8 !== SCRIPT_VERSION) return console.log("\n❌ " + UPDATE_TIP + "\n"), false;
      console.log("✅ 版本验证通过 - 本地版本与远程版本一致");
      console.log("✅ 永久免费公益群1076179487");
      return true;
    }
  } catch (_0x4c89c0) {
    console.log("⚠️ 版本验证异常：" + _0x4c89c0.message + "，跳过验证继续执行");
    return true;
  }
}
function generateRandomInteractionMessage() {
  const _0x494db3 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x494db3[Math.floor(Math.random() * _0x494db3.length)];
}
const enableDidChange = process.env.ENABLE_DID_CHANGE === "1" || process.env.ENABLE_DID_CHANGE === "true";
function getEnvNumber(_0x5afdfe, _0x58b9a0) {
  const _0x6665ff = parseInt(process.env[_0x5afdfe], 10);
  return isNaN(_0x6665ff) ? _0x58b9a0 : _0x6665ff;
}
const KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 5),
  KSROUNDS = getEnvNumber("KSROUNDS", 10),
  KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 25000),
  KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 3),
  enableExtraTaskCheck = process.env.ewrw === "1";
function getTasksToExecute() {
  const _0x113ece = process.env.Task;
  if (!_0x113ece) {
    return ["look", "looks", "food", "foods"];
  }
  const _0x5f15bb = _0x113ece.split(",").map(_0x3ea8e7 => _0x3ea8e7.trim().toLowerCase()).filter(Boolean),
    _0x5a5739 = ["content", "contents", "look", "looks", "food", "foods", "box", "boxs"],
    _0x3c2c95 = _0x5f15bb.filter(_0x537ce4 => _0x5a5739.includes(_0x537ce4));
  if (_0x3c2c95.length === 0) {
    return ["look", "looks", "food", "foods"];
  }
  console.log("📋 从Task环境变量中解析到要执行的任务: " + _0x3c2c95.join(", "));
  return _0x3c2c95;
}
function getAccountConfigsFromEnv() {
  const _0x2ba0fb = [],
    _0x1f1d46 = new Set();
  if (process.env.ksck) {
    const _0x2658cc = process.env.ksck,
      _0xc079ff = _0x2658cc.split("&").map(_0x11e1a0 => _0x11e1a0.trim()).filter(Boolean);
    _0x2ba0fb.push(..._0xc079ff);
  }
  for (let _0x1dd85f = 1; _0x1dd85f <= 999; _0x1dd85f++) {
    {
      const _0x2fd391 = "ksck" + _0x1dd85f;
      if (process.env[_0x2fd391]) {
        const _0x98b1ab = process.env[_0x2fd391],
          _0x4d832f = _0x98b1ab.split("&").map(_0x52dfe6 => _0x52dfe6.trim()).filter(Boolean);
        _0x2ba0fb.push(..._0x4d832f);
      }
    }
  }
  const _0x4b8700 = [];
  for (const _0x19518d of _0x2ba0fb) {
    !_0x1f1d46.has(_0x19518d) && (_0x1f1d46.add(_0x19518d), _0x4b8700.push(_0x19518d));
  }
  return _0x4b8700;
}
let accountConfigs, accountCount, tasksToExecute, taskNameMap, maxConcurrency;
async function sendRequest(_0x225db4, _0x139ff9 = null, _0xf1ff34 = "Unknown Request") {
  const _0x28d3aa = {
    "method": _0x225db4.method || "GET",
    "url": _0x225db4.url,
    "headers": _0x225db4.headers || {},
    "timeout": _0x225db4.timeout || 15000,
    "validateStatus": () => true,
    "httpsAgent": new https.Agent({
      "rejectUnauthorized": false
    })
  };
  if (_0x225db4.body) _0x28d3aa.data = _0x225db4.body;else _0x225db4.form && (_0x28d3aa.data = querystring.stringify(_0x225db4.form), _0x28d3aa.headers["Content-Type"] = "application/x-www-form-urlencoded");
  if (_0x139ff9) {
    try {
      _0x28d3aa.httpsAgent = new SocksProxyAgent(_0x139ff9);
      _0x28d3aa.httpAgent = new SocksProxyAgent(_0x139ff9);
    } catch (_0x4574ac) {
      console.log("❌ [错误] " + _0xf1ff34 + " 代理URL无效(" + _0x4574ac.message + ")，尝试直连模式");
    }
  }
  try {
    const _0x188cb4 = await axios(_0x28d3aa),
      _0x137518 = _0x188cb4.data;
    if (_0x188cb4.status !== 200) return console.log("❌ [" + _0xf1ff34 + "] HTTP " + _0x188cb4.status + ": " + (typeof _0x137518 === "string" ? _0x137518.substring(0, 200) : JSON.stringify(_0x137518).substring(0, 200))), {
      "response": {
        "statusCode": _0x188cb4.status
      },
      "body": null
    };
    return {
      "response": {
        "statusCode": _0x188cb4.status
      },
      "body": _0x137518
    };
  } catch (_0x24d389) {
    {
      console.log("❌ [" + _0xf1ff34 + "] 请求异常: " + _0x24d389.message);
      if (_0x24d389.name === "AggregateError" && Array.isArray(_0x24d389.errors)) return {
        "response": null,
        "body": null
      };
      return {
        "response": null,
        "body": null
      };
    }
  }
}
async function testProxyConnectivity(_0x3006fc, _0x344194 = "代理连通性检测") {
  if (!_0x3006fc) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  const {
    response: _0xce7a01,
    body: _0x5da974
  } = await sendRequest({
    "method": "GET",
    "url": "https://ip9.com.cn/get",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    },
    "timeout": 8000
  }, _0x3006fc, _0x344194 + " → ip9.com.cn");
  if (!_0x5da974) {
    return {
      "ok": false,
      "msg": "❌ 无法通过代理访问 ip9.com.cn",
      "ip": ""
    };
  }
  let _0x2013bb = "";
  if (typeof _0x5da974 === "string") {
    try {
      const _0xdd3c0c = JSON.parse(_0x5da974);
      _0x2013bb = _0xdd3c0c.ip || _0xdd3c0c.IP || _0xdd3c0c.addr || _0xdd3c0c.ip_address || _0xdd3c0c.query || _0xdd3c0c.data && _0xdd3c0c.data.ip || "";
    } catch {
      const _0x121ac0 = String(_0x5da974).match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
      _0x2013bb = _0x121ac0 ? _0x121ac0[0] : "";
    }
  } else _0x5da974 && typeof _0x5da974 === "object" && (_0x2013bb = _0x5da974.ip || _0x5da974.IP || _0x5da974.addr || _0x5da974.ip_address || _0x5da974.query || _0x5da974.data && _0x5da974.data.ip || "");
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x2013bb || "未知"),
    "ip": _0x2013bb || "未知"
  };
}
async function getNickname(_0x192d45, _0x4891c4, _0x5bd7b4 = "?") {
  const _0x3bca99 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=timer",
    _0x32d0e2 = _0x192d45.replace(/kpn=KUAISHOU/, "kpn=NEBULA"),
    {
      response: _0x1891e7,
      body: _0x41c480
    } = await sendRequest({
      "method": "GET",
      "url": _0x3bca99,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": FIXED_DEVICE_CONFIG.ua,
        "Cookie": _0x32d0e2,
        "referer": "https://nebula.kuaishou.com/nebula/task/earning",
        "X-Requested-With": "com.kuaishou.nebula"
      },
      "timeout": 12000
    }, _0x4891c4, "账号[" + _0x5bd7b4 + "] 获取昵称");
  if (_0x41c480 && _0x41c480.result === 1 && _0x41c480.data) return {
    "nickname": _0x41c480.data.userData?.["nickname"] || null,
    "totalCoin": _0x41c480.data.totalCoin ?? null,
    "totalCash": _0x41c480.data.totalCash ?? null
  };
  return null;
}
async function getAccountBasicInfo(_0x37123b, _0x177c0b, _0x1f8411 = "?") {
  const _0x25ac87 = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
    _0x5a4e1e = _0x37123b.replace(/kpn=NEBULA/, "kpn=KUAISHOU"),
    {
      response: _0x15a890,
      body: _0x3c0663
    } = await sendRequest({
      "method": "GET",
      "url": _0x25ac87,
      "headers": {
        "Host": "encourage.kuaishou.com",
        "User-Agent": FIXED_DEVICE_CONFIG.ua,
        "Cookie": _0x5a4e1e,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x177c0b, "账号[" + _0x1f8411 + "] 获取基本信息");
  if (_0x3c0663 && _0x3c0663.result === 1 && _0x3c0663.data) return {
    "nickname": _0x3c0663.data.userData?.["nickname"] || _0x1f8411,
    "totalCoin": _0x3c0663.data.coinAmount ?? null,
    "allCash": _0x3c0663.data.cashAmountDisplay ?? null
  };
  return null;
}
function centerAlign(_0x4d7e62, _0x136329) {
  _0x4d7e62 = String(_0x4d7e62);
  if (_0x4d7e62.length >= _0x136329) return _0x4d7e62.substring(0, _0x136329);
  const _0x4be9a4 = _0x136329 - _0x4d7e62.length,
    _0x501d60 = Math.floor(_0x4be9a4 / 2),
    _0x342b26 = _0x4be9a4 - _0x501d60;
  return " ".repeat(_0x501d60) + _0x4d7e62 + " ".repeat(_0x342b26);
}
async function simulatePreheat() {
  const _0x5e6792 = Math.floor(Math.random() * 2) + 1;
  console.log("🔥 模拟刷" + _0x5e6792 + "条短视频预热...");
  for (let _0x2827eb = 0; _0x2827eb < _0x5e6792; _0x2827eb++) {
    const _0x504b5b = Math.floor(Math.random() * 10) + 10;
    await new Promise(_0x3f8f64 => setTimeout(_0x3f8f64, _0x504b5b * 1000));
    console.log("   第" + (_0x2827eb + 1) + "条短视频观看完成，等待" + _0x504b5b + "秒");
  }
}
async function simulateAdWatch(_0x5efc8f) {
  const _0xbe42f0 = Math.floor(Math.random() * 10) + 35;
  console.log("👀 预计奖励" + _0x5efc8f + "金币，" + generateRandomInteractionMessage() + " " + _0xbe42f0 + "秒");
  let _0x2f775f = 0;
  while (_0x2f775f < _0xbe42f0 * 1000) {
    {
      const _0x16818d = Math.floor(Math.random() * 5) + 5,
        _0xab5703 = Math.min(_0x2f775f + _0x16818d * 1000, _0xbe42f0 * 1000),
        _0x56d8ca = _0xab5703 - _0x2f775f;
      await new Promise(_0x5528d3 => setTimeout(_0x5528d3, _0x56d8ca));
      _0x2f775f = _0xab5703;
      _0x2f775f < _0xbe42f0 * 1000 && console.log("   模拟点击屏幕空白处");
    }
  }
}
async function simulateAdClick(_0x3e703a) {
  if (!_0x3e703a.adUrl || _0x3e703a.estimatedReward < 3000) return;
  console.log("🎯 高价值广告，模拟点击广告按钮...");
  await new Promise(_0x53a02d => setTimeout(_0x53a02d, (Math.floor(Math.random() * 3) + 2) * 1000));
  console.log("🔗 模拟访问广告落地页...");
  try {
    {
      const _0x43c809 = {
        "method": "GET",
        "url": _0x3e703a.adUrl,
        "headers": {
          "User-Agent": FIXED_DEVICE_CONFIG.ua,
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "zh-CN,zh;q=0.9"
        },
        "timeout": 60000
      };
      await axios(_0x43c809);
      const _0xf981ca = Math.floor(Math.random() * 5) + 10;
      await new Promise(_0xd45948 => setTimeout(_0xd45948, _0xf981ca * 1000));
      console.log("   广告落地页访问完成，等待" + _0xf981ca + "秒");
    }
  } catch (_0x2dbceb) {
    console.log("   广告落地页访问失败（不影响任务提交）: " + _0x2dbceb.message);
  }
}
class KuaishouAdTask {
  constructor({
    index: _0x2ec18c,
    salt: _0x42d03d,
    cookie: _0x40be29,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = [],
    remark = ""
  }) {
    this.index = _0x2ec18c;
    this.salt = _0x42d03d;
    this.cookie = _0x40be29;
    this.nickname = nickname || remark || "账号" + _0x2ec18c;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.maxExtraAdCount = MAX_EXTRA_AD_COUNT;
    this.extraAdExecutedCount = 0;
    this.extraTaskLowRewardStreak = {};
    this.extraTaskKeys = tasksToExecute.filter(_0x1fddb2 => _0x1fddb2.endsWith("s"));
    this.extraTaskKeys.forEach(_0x2deccb => {
      this.extraTaskLowRewardStreak[_0x2deccb] = 0;
    });
    this.normalTaskKeys = tasksToExecute.filter(_0x5312e3 => !_0x5312e3.endsWith("s"));
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "User-Agent": FIXED_DEVICE_CONFIG.ua,
      "Accept-Language": "zh-cn",
      "Cookie": this.cookie,
      "Content-Type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.queryParams = "mod=" + encodeURIComponent(FIXED_DEVICE_CONFIG.model) + "&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.sessionStore = {};
    this.extraToNormalMap = {
      "boxs": "box",
      "looks": "look",
      "foods": "food",
      "contents": "content",
      "bizstrs": "bizstr"
    };
    this.taskConfigsOfficial = {
      "box": {
        "name": "宝箱广告",
        "businessId": 604,
        "posId": 20347,
        "subPageId": 100024063,
        "pageId": 100011251,
        "requestSceneType": 1,
        "taskType": 1
      },
      "boxs": {
        "name": "宝箱广告[追加]",
        "businessId": 604,
        "posId": 20347,
        "subPageId": 100024063,
        "pageId": 100011251,
        "requestSceneType": 7,
        "taskType": 2
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "pageId": 100011251,
        "requestSceneType": 1,
        "taskType": 1
      },
      "looks": {
        "name": "看广告得金币[追加]",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "pageId": 100011251,
        "requestSceneType": 7,
        "taskType": 2
      },
      "food": {
        "name": "饭补",
        "businessId": 921,
        "posId": 29742,
        "subPageId": 100029908,
        "requestSceneType": 1,
        "taskType": 1
      },
      "foods": {
        "name": "饭补[追加]",
        "businessId": 921,
        "posId": 29742,
        "subPageId": 100029908,
        "requestSceneType": 7,
        "taskType": 2
      },
      "content": {
        "name": "看内容广告得金币",
        "businessId": 7044,
        "posId": 182533,
        "subPageId": 100138797,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "contents": {
        "name": "看内容广告得金币[追加]",
        "businessId": 7044,
        "posId": 182533,
        "subPageId": 100138797,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskConfigsNebula = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "boxs": {
        "name": "宝箱广告[追加]",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "looks": {
        "name": "看广告得金币[追加]",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      },
      "food": {
        "name": "饭补",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "foods": {
        "name": "饭补[追加]",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      },
      "content": {
        "name": "看内容广告得金币",
        "businessId": 7044,
        "posId": 182533,
        "subPageId": 100138797,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "contents": {
        "name": "看内容广告得金币[追加]",
        "businessId": 7044,
        "posId": 182533,
        "subPageId": 100138797,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskConfigs = this.isKuaishouOfficial ? this.taskConfigsOfficial : this.taskConfigsNebula;
    this.taskStats = {};
    tasksToExecute.forEach(_0x2350d9 => {
      this.taskConfigs[_0x2350d9] && (this.taskStats[_0x2350d9] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = KSLOW_REWARD_THRESHOLD;
    this.lowRewardLimit = KSLOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.stopExtraTasks = false;
    this.totalReward = 0;
    this.taskLimitReached = {};
    tasksToExecute.forEach(_0x530a4a => {
      this.taskConfigs[_0x530a4a] && (this.taskLimitReached[_0x530a4a] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x4a1cf0 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x4a1cf0 && _0x4a1cf0.totalCoin) {
          const _0x4a2511 = parseInt(_0x4a1cf0.totalCoin);
          if (_0x4a2511 >= this.coinLimit) {
            console.log("⚠️ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0x4a2511 + "，超过 " + this.coinLimit + " 阈值，停止任务");
            this.coinExceeded = true;
            this.stopAllTasks = true;
            this.stopExtraTasks = true;
            return true;
          }
        }
        return false;
      }
    } catch (_0x3e3bb5) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x3e3bb5.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x1d86f5 = this.cookie.match(/egid=([^;]+)/),
          _0x46fa9b = this.cookie.match(/did=([^;]+)/),
          _0x1e0c4d = this.cookie.match(/userId=([^;]+)/),
          _0x41d909 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x1d76a0 = this.cookie.match(/kpn=([^;]+)/),
          _0x551f3e = this.cookie.match(/earphoneMode=([^;]+)/);
        this.egid = _0x1d86f5 ? _0x1d86f5[1] : "";
        this.did = _0x46fa9b ? _0x46fa9b[1] : "";
        this.userId = _0x1e0c4d ? _0x1e0c4d[1] : "";
        this.kuaishouApiSt = _0x41d909 ? _0x41d909[1] : "";
        this.kpn = _0x1d76a0 ? _0x1d76a0[1] : "KUAISHOU";
        this.earphoneMode = _0x551f3e ? _0x551f3e[1] : "1";
        this.mod = FIXED_DEVICE_CONFIG.model;
        this.sys = FIXED_DEVICE_CONFIG.android.sys;
        this.androidApiLevel = FIXED_DEVICE_CONFIG.android.apiLevel;
        this.sw = FIXED_DEVICE_CONFIG.screen.sw;
        this.sh = FIXED_DEVICE_CONFIG.screen.sh;
        this.net = FIXED_DEVICE_CONFIG.net;
        this.kcv = FIXED_DEVICE_CONFIG.kcv;
        this.boardPlatform = FIXED_DEVICE_CONFIG.boardPlatform;
        this.isKuaishouOfficial = this.kpn === "KUAISHOU";
        this.versionLabel = this.isKuaishouOfficial ? "普通" : "极速";
        this.appver = "13.9.10.10684";
        this.signServiceUrl = this.isKuaishouOfficial ? "http://111.170.14.34:16668" : "http://111.170.14.34:16667";
        this.clientKey = this.isKuaishouOfficial ? "3c2cd3f3" : "2ac2a76d";
        this.appId = this.isKuaishouOfficial ? "kuaishou" : "kuaishou_nebula";
        this.appName = this.isKuaishouOfficial ? "快手" : "快手极速版";
        this.packageName = this.isKuaishouOfficial ? "com.smile.gifmaker" : "com.kuaishou.nebula";
        (!this.egid || !this.did) && console.log("⚠️ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie无egid/did，继续尝试执行");
      }
    } catch (_0x2c5fdb) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x2c5fdb.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n👤 [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    console.log("📊 追加广告已执行：" + this.extraAdExecutedCount + "/" + this.maxExtraAdCount + " 个");
    for (const [_0x43079f, _0xa83808] of Object.entries(this.taskStats)) {
      {
        const _0x49600c = this.taskConfigs[_0x43079f].name;
        console.log(" " + _0x49600c + ": 成功" + _0xa83808.success + "次, 失败" + _0xa83808.failed + "次, 总奖励" + _0xa83808.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0x3bf9ac, _0x5b4323, _0x244bc6 = 3, _0x403e7c = 2000) {
    let _0x1c825b = 0,
      _0x3ba73a = null;
    while (_0x1c825b < _0x244bc6) {
      {
        try {
          const _0x52e4d9 = await _0x3bf9ac();
          if (_0x52e4d9) return _0x52e4d9;
          _0x3ba73a = new Error(_0x5b4323 + " 返回空结果");
        } catch (_0x1c9af4) {
          _0x3ba73a = _0x1c9af4;
        }
        _0x1c825b++;
        _0x1c825b < _0x244bc6 && (await new Promise(_0x3a3264 => setTimeout(_0x3a3264, _0x403e7c)));
      }
    }
    console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5b4323 + " 失败");
    return null;
  }
  async ["getAdInfo"](_0x2a0b65, _0x2836d3) {
    try {
      const _0x4561c2 = "/rest/e/reward/mixed/ad",
        _0x23846d = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": this.clientKey,
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x548738 = {
          "earphoneMode": this.earphoneMode,
          "mod": this.mod,
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": this.net,
          "kcv": this.kcv,
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": this.boardPlatform,
          "kpn": this.kpn,
          "androidApiLevel": this.androidApiLevel,
          "country_code": "cn",
          "sys": this.sys,
          "sw": this.sw,
          "sh": this.sh,
          "abi": "arm64",
          "userRecoBit": "0"
        },
        _0x38c361 = {
          "appInfo": {
            "appId": this.appId,
            "name": this.appName,
            "packageName": this.packageName,
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": this.sys.replace("ANDROID_", ""),
            "deviceId": this.did,
            "screenSize": {
              "width": parseInt(this.sw) || 1080,
              "height": parseInt(this.sh) || 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0x2836d3.pageId || 100011251,
            "subPageId": _0x2836d3.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": "{}",
            "mediaExtData": "{}"
          }]
        },
        _0xfd16eb = Buffer.from(JSON.stringify(_0x38c361)).toString("base64");
      let _0x265448 = await this.getSign(_0xfd16eb);
      if (!_0x265448) return console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " getSign失败，无法获取" + _0x2836d3.name), null;
      _0x23846d.encData = _0x265448.encdata;
      _0x23846d.sign = _0x265448.sign;
      let _0x24f915 = await this.requestSignService({
        "urlpath": _0x4561c2,
        "reqdata": querystring.stringify(_0x23846d) + "&" + querystring.stringify(_0x548738),
        "api_client_salt": this.salt
      });
      if (!_0x24f915) {
        console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " requestSignService失败，无法获取" + _0x2836d3.name);
        return null;
      }
      _0x24f915.kaw && _0x24f915.kas && (this.headers.kaw = _0x24f915.kaw, this.headers.kas = _0x24f915.kas);
      const _0x5a7b97 = {
          ..._0x548738,
          "sig": _0x24f915.sig,
          "__NS_sig3": _0x24f915.nssig3,
          "__NS_xfalcon": _0x24f915.xfalcon,
          "__NStokensig": _0x24f915.nstokensig
        },
        _0x22d733 = "https://api.e.kuaishou.com" + _0x4561c2 + "?" + querystring.stringify(_0x5a7b97),
        {
          response: _0x1f6572,
          body: _0x58b5db
        } = await sendRequest({
          "method": "POST",
          "url": _0x22d733,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "Accept-Language": "zh-cn",
            "X-REQUESTID": generateLegacy(),
            "User-Agent": FIXED_DEVICE_CONFIG.ua,
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x23846d,
          "timeout": 15000
        }, this.proxyUrl, "[" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
      if (!_0x58b5db) return null;
      if (_0x58b5db.errorMsg === "OK" && _0x58b5db.feeds && _0x58b5db.feeds[0] && _0x58b5db.feeds[0].ad) {
        {
          const _0x52901f = _0x58b5db.feeds[0].caption || _0x58b5db.feeds[0].ad?.["caption"] || "";
          _0x52901f && console.log("✅ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 成功获取到广告信息：" + _0x52901f);
          const _0x133357 = _0x58b5db.feeds[0].exp_tag || "",
            _0x346ddf = _0x133357.split("/")[1]?.["split"]("_")?.[0] || "",
            _0xb156ff = _0x58b5db.feeds[0].ad?.["adDataV2"]?.["inspirePersonalize"];
          let _0x2ab99f = 0,
            _0x442dde = 0;
          const _0x470609 = _0x58b5db.feeds[0].ad?.["extData"] || "{}";
          try {
            {
              const _0x58a0b9 = JSON.parse(_0x470609);
              _0x442dde = _0x58a0b9.awardCoin;
            }
          } catch (_0x50e78b) {
            _0x442dde = 0;
          }
          if (_0x442dde && _0x442dde !== "" && _0x442dde !== 0) {
            _0x2ab99f = _0x442dde;
          } else {
            if (_0xb156ff?.["neoValue"] && _0xb156ff.neoValue !== "" && _0xb156ff.neoValue !== 0) _0x2ab99f = _0xb156ff.neoValue;else _0xb156ff?.["awardValue"] && _0xb156ff.awardValue !== "" && _0xb156ff.awardValue !== 0 && (_0x2ab99f = _0xb156ff.awardValue);
          }
          const _0x53138b = _0x58b5db.feeds[0].ad?.["adDataV2"]?.["deepRewardedInfo"],
            _0x3f0555 = _0x53138b?.["adlessWithPopWindow"] === true,
            _0x3ebf74 = _0x3f0555 ? parseInt(_0x53138b?.["deepRewardedCoin"] || "0", 10) : 0;
          let _0x1e2632 = 0,
            _0xb56e83 = "",
            _0x39225f = 1;
          const _0x2c5d48 = _0x58b5db.feeds[0].ad?.["adDataV2"]?.["inspireAdInfo"]?.["inspireAdBillTime"] || 0,
            _0x58b06a = _0x58b5db.feeds[0].ad?.["adDataV2"]?.["inspireAdInfo"]?.["adExtInfo"] || "";
          try {
            {
              const _0x376a3c = JSON.parse(_0x58b5db.feeds[0].ad?.["extData"] || "{}");
              _0x1e2632 = _0x376a3c.inspireTaskId || 0;
              _0xb56e83 = _0x376a3c.inspireSessionId || "";
              _0x39225f = _0x376a3c.requestSceneType || 1;
            }
          } catch (_0x2880d0) {}
          const _0x342ab5 = _0x58b5db.feeds[0].ad?.["url"] || "",
            _0x57bb08 = _0x58b5db.feeds[0].ad?.["packageName"] || "",
            _0x15ea88 = _0x58b5db.feeds[0].ad?.["appName"] || "",
            _0x441205 = _0x57bb08 && _0x15ea88 && _0x15ea88.toLowerCase().includes(".apk");
          _0x2836d3.taskType === 1 && (this.sessionStore[_0x2a0b65] = {
            "sessionId": _0xb56e83,
            "startTime": Date.now(),
            "normalAdBillTime": _0x2c5d48
          });
          return {
            "cid": _0x58b5db.feeds[0].ad.creativeId,
            "llsid": _0x346ddf,
            "estimatedReward": _0x2ab99f,
            "hasExtraTask": _0x3f0555,
            "extraReward": _0x3ebf74,
            "inspireTaskId": _0x1e2632,
            "inspireSessionId": _0xb56e83,
            "requestSceneType": _0x39225f,
            "inspireAdBillTime": _0x2c5d48,
            "adExtInfo": _0x58b06a,
            "adUrl": _0x342ab5,
            "packageName": _0x57bb08,
            "appName": _0x15ea88,
            "isApkDownload": _0x441205
          };
        }
      }
      return null;
    } catch (_0x3e03c7) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x3e03c7.message);
      return null;
    }
  }
  async ["generateSignature"](_0x54d899, _0x570165, _0x47570e) {
    try {
      {
        const _0x49ee44 = Math.floor(_0x54d899.inspireAdBillTime / 1000),
          _0x5095c3 = _0x47570e.taskType === 2;
        let _0x570e34, _0x19600c, _0x1b40fc;
        if (_0x5095c3) {
          const _0x18bddb = this.extraToNormalMap[_0x570165],
            _0x2845ed = this.sessionStore[_0x18bddb];
          if (!_0x2845ed) return console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 未找到" + _0x18bddb + "的会话信息"), null;
          _0x570e34 = _0x2845ed.sessionId;
          _0x19600c = _0x2845ed.startTime;
          _0x1b40fc = _0x19600c + _0x2845ed.normalAdBillTime + _0x54d899.inspireAdBillTime;
        } else _0x570e34 = _0x54d899.inspireSessionId, _0x19600c = Date.now() - _0x54d899.inspireAdBillTime, _0x1b40fc = _0x19600c + _0x54d899.inspireAdBillTime;
        const _0x7e3fb5 = [{
            "creativeId": _0x54d899.cid,
            "extInfo": "",
            "llsid": _0x54d899.llsid,
            "adExtInfo": _0x54d899.adExtInfo,
            "inflow": _0x5095c3,
            "materialTime": _0x49ee44,
            "watchAdTime": _0x49ee44,
            "requestSceneType": _0x5095c3 ? _0x47570e.requestSceneType : _0x54d899.requestSceneType,
            "taskType": _0x47570e.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          _0xe74c26 = JSON.stringify({
            "businessId": _0x47570e.businessId,
            "endTime": _0x1b40fc,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": _0x7e3fb5,
            "pageId": _0x47570e.pageId || 100011251,
            "posId": _0x47570e.posId,
            "reportType": 0,
            "sessionId": _0x570e34,
            "startTime": _0x19600c,
            "subPageId": _0x47570e.subPageId
          }),
          _0x95b15d = "bizStr=" + encodeURIComponent(_0xe74c26) + "&cs=false&client_key=" + this.clientKey + "&kuaishou.api_st=" + this.kuaishouApiSt,
          _0x34be7f = this.queryParams + "&" + _0x95b15d,
          _0x5dda9a = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "reqdata": _0x34be7f,
            "api_client_salt": this.salt
          }, "[" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
        if (!_0x5dda9a) return null;
        _0x5dda9a.kaw && _0x5dda9a.kas && (this.headers.kaw = _0x5dda9a.kaw, this.headers.kas = _0x5dda9a.kas);
        return {
          "sig": _0x5dda9a.sig,
          "nssig3": _0x5dda9a.nssig3,
          "xfalcon": _0x5dda9a.xfalcon,
          "nstokensig": _0x5dda9a.nstokensig,
          "post": _0x95b15d
        };
      }
    } catch (_0x8c16d0) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0x8c16d0.message);
      return null;
    }
  }
  async ["submitReport"](_0x1a8206, _0x536f2b, _0x112773, _0x330694, _0x3723c1, _0x24d2de, _0x2609c6) {
    try {
      const _0x55dc58 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x1a8206 + "&__NS_sig3=" + _0x536f2b + "&__NS_xfalcon=" + _0x112773 + "&__NStokensig=" + _0x330694),
        {
          response: _0x1d6453,
          body: _0x5d3ae4
        } = await sendRequest({
          "method": "POST",
          "url": _0x55dc58,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "Accept-Language": "zh-cn",
            "X-REQUESTID": generateLegacy(),
            "User-Agent": FIXED_DEVICE_CONFIG.ua,
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "body": _0x3723c1,
          "timeout": 15000
        }, this.proxyUrl, "[" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0x5d3ae4) {
        return {
          "success": false,
          "reward": 0
        };
      }
      if (_0x5d3ae4.result === 1 || _0x5d3ae4.result === 500) {
        {
          const _0x3dfbb2 = _0x5d3ae4.data?.["neoAmount"] || 0;
          this.totalReward += _0x3dfbb2;
          const _0x1ac701 = "💰 [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x2609c6.name + "获得" + _0x3dfbb2 + "金币奖励！累计获得" + this.totalReward + "金币";
          console.log(_0x1ac701);
          if (_0x24d2de.endsWith("s")) {
            this.extraAdExecutedCount++;
            console.log("📊 追加广告总进度：" + this.extraAdExecutedCount + "/" + this.maxExtraAdCount + " 个");
            if (this.extraAdExecutedCount >= this.maxExtraAdCount) {
              console.log("✅ 追加广告已达到" + this.maxExtraAdCount + "个上限，停止追加任务");
              this.stopExtraTasks = true;
            }
          }
          if (_0x3dfbb2 <= 1) {
            if (_0x24d2de.endsWith("s")) {
              this.extraTaskLowRewardStreak[_0x24d2de] = (this.extraTaskLowRewardStreak[_0x24d2de] || 0) + 1;
              console.log("⚠️ 追加任务" + this.taskConfigs[_0x24d2de].name + "连续低奖励 " + this.extraTaskLowRewardStreak[_0x24d2de] + "/3 次");
              if (this.extraTaskLowRewardStreak[_0x24d2de] >= 3) {
                this.extraTaskKeys = this.extraTaskKeys.filter(_0x549af0 => _0x549af0 !== _0x24d2de);
                console.log("❌ 追加任务" + this.taskConfigs[_0x24d2de].name + "连续3次低奖励，移除执行列表");
              }
            } else this.normalTaskKeys = this.normalTaskKeys.filter(_0x3ed6df => _0x3ed6df !== _0x24d2de), console.log("⚠️ 主任务" + this.taskConfigs[_0x24d2de].name + "奖励过低，移除执行列表"), this.normalTaskKeys.length + this.extraTaskKeys.length <= 0 && (this.stopAllTasks = true);
            this.lowRewardStreak++;
            enableDidChange == 1 && (this.did = generateKuaishouDid());
            this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 连续" + this.lowRewardLimit + "次低奖励，停止全部任务"), this.stopAllTasks = true, this.stopExtraTasks = true);
          } else {
            _0x24d2de.endsWith("s") && (this.extraTaskLowRewardStreak[_0x24d2de] = 0);
            this.lowRewardStreak = 0;
          }
          this.taskStats[_0x24d2de].success++;
          this.taskStats[_0x24d2de].totalReward += _0x3dfbb2;
          return {
            "success": true,
            "reward": _0x3dfbb2
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x5d3ae4.result)) {
        console.log("⚠️ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x2609c6.name + " 已达上限");
        this.taskLimitReached[_0x24d2de] = true;
        _0x24d2de.endsWith("s") ? this.extraTaskKeys = this.extraTaskKeys.filter(_0x4fc39a => _0x4fc39a !== _0x24d2de) : this.normalTaskKeys = this.normalTaskKeys.filter(_0x10992c => _0x10992c !== _0x24d2de);
        this.taskStats[_0x24d2de].failed++;
        return {
          "success": false,
          "reward": 0
        };
      }
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x2609c6.name + " 奖励失败，result=" + _0x5d3ae4.result + " msg=" + (_0x5d3ae4.data || ""));
      this.taskStats[_0x24d2de].failed++;
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x3b7cad) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x3b7cad.message);
      this.taskStats[_0x24d2de].failed++;
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["visitAdUrl"](_0x4dcc27) {
    return {
      "success": false,
      "type": "none",
      "filePath": null
    };
  }
  async ["downloadApk"](_0x7a7dcf, _0xc6b4a9, _0x264a34) {
    return {
      "success": false,
      "type": "apk",
      "filePath": _0xc6b4a9
    };
  }
  async ["visitUrl"](_0x2d62a5) {
    return {
      "success": false,
      "type": "url",
      "filePath": null
    };
  }
  ["deleteApkFile"](_0x2579db) {
    try {
      _0x2579db && fs.existsSync(_0x2579db) && (fs.unlinkSync(_0x2579db), console.log("🗑️ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 已清理APK文件"));
    } catch (_0x5aa289) {}
  }
  async ["getSign"](_0x20faaf) {
    const _0x41f4bd = this.signServiceUrl + "/encsign";
    let _0x4aee4a, _0x5e763c;
    for (let _0x5ca094 = 0; _0x5ca094 < 3; _0x5ca094++) {
      try {
        ({
          response: _0x4aee4a,
          body: _0x5e763c
        } = await sendRequest({
          "method": "POST",
          "url": _0x41f4bd,
          "body": JSON.stringify({
            "data": _0x20faaf
          }),
          "timeout": 30000,
          "headers": {
            "Content-Type": "application/json"
          }
        }, this.proxyUrl, "getSign"));
      } catch (_0x3c9402) {
        console.log("getSign 请求异常: " + _0x3c9402.message);
      }
      if (_0x5e763c && _0x5e763c.data && _0x5e763c.data.encdata) break;
    }
    if (_0x5e763c && _0x5e763c.data && _0x5e763c.data.encdata) return _0x5e763c.data;
    console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " getSign失败，接口返回: " + JSON.stringify(_0x5e763c));
    return null;
  }
  async ["requestSignService"](_0x1911b2, _0x5af981) {
    const _0x36e5ee = this.signServiceUrl + "/nssig";
    let _0x4d8879, _0x24cbcd;
    for (let _0x127c03 = 0; _0x127c03 < 3; _0x127c03++) {
      try {
        {
          ({
            response: _0x4d8879,
            body: _0x24cbcd
          } = await sendRequest({
            "method": "POST",
            "url": _0x36e5ee,
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0"
            },
            "body": JSON.stringify({
              "path": _0x1911b2.urlpath,
              "data": _0x1911b2.reqdata,
              "salt": _0x1911b2.api_client_salt
            }),
            "timeout": 30000
          }, this.proxyUrl, _0x5af981 + "（签名服务）"));
          if (_0x24cbcd && _0x24cbcd.data && _0x24cbcd.data.sig) break;
        }
      } catch (_0x34a64a) {
        console.log("requestSignService 请求异常: " + _0x34a64a.message);
      }
    }
    if (_0x24cbcd && _0x24cbcd.data && _0x24cbcd.data.sig) return {
      "sig": _0x24cbcd.data.sig,
      "nssig3": _0x24cbcd.data.nssig3,
      "xfalcon": _0x24cbcd.data.xfalcon,
      "nstokensig": _0x24cbcd.data.nstokensig,
      "kaw": _0x24cbcd.data.kaw,
      "kas": _0x24cbcd.data.kas
    };
    console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败，接口返回: " + JSON.stringify(_0x24cbcd));
    return null;
  }
  async ["executeTask"](_0xe74dbb) {
    const _0x3cf23b = this.taskConfigs[_0xe74dbb];
    if (!_0x3cf23b) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 未知任务: " + _0xe74dbb);
      return false;
    }
    if (this.taskLimitReached[_0xe74dbb]) return false;
    let _0x4eda32 = null;
    try {
      const _0x429918 = await this.retryOperation(() => this.getAdInfo(_0xe74dbb, _0x3cf23b), "获取" + _0x3cf23b.name + "信息", 3);
      if (!_0x429918) return this.taskStats[_0xe74dbb].failed++, false;
      await simulatePreheat();
      await simulateAdWatch(_0x429918.estimatedReward);
      await simulateAdClick(_0x429918);
      const _0x5b3e0a = await this.retryOperation(() => this.generateSignature(_0x429918, _0xe74dbb, _0x3cf23b), "生成" + _0x3cf23b.name + "签名", 3);
      if (!_0x5b3e0a) return this.taskStats[_0xe74dbb].failed++, this.deleteApkFile(_0x4eda32?.["filePath"]), false;
      const _0x35cdfb = await this.retryOperation(() => this.submitReport(_0x5b3e0a.sig, _0x5b3e0a.nssig3, _0x5b3e0a.xfalcon, _0x5b3e0a.nstokensig, _0x5b3e0a.post, _0xe74dbb, _0x3cf23b), "提交" + _0x3cf23b.name + "报告", 3);
      this.deleteApkFile(_0x4eda32?.["filePath"]);
      return _0x35cdfb?.["success"] || false;
    } catch (_0x3e5482) {
      console.log("❌ [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0xe74dbb + "): " + _0x3e5482.message);
      this.taskStats[_0xe74dbb].failed++;
      this.deleteApkFile(_0x4eda32?.["filePath"]);
      return false;
    }
  }
  async ["executeExtraTasksInOrder"]() {
    if (this.stopExtraTasks || this.stopAllTasks || this.extraAdExecutedCount >= this.maxExtraAdCount) {
      console.log("📛 追加任务执行终止（已停止/达到总上限）");
      return;
    }
    console.log("\n🚀 开始执行追加任务，目标" + this.maxExtraAdCount + "次");
    while (!this.stopExtraTasks && !this.stopAllTasks && this.extraAdExecutedCount < this.maxExtraAdCount) {
      for (const _0x43a0f6 of this.extraTaskKeys) {
        if (this.stopExtraTasks || this.stopAllTasks || this.extraAdExecutedCount >= this.maxExtraAdCount) {
          break;
        }
        if (!this.extraTaskKeys.includes(_0x43a0f6) || this.taskLimitReached[_0x43a0f6]) {
          continue;
        }
        if (await this.checkCoinLimit()) break;
        const _0x2170db = this.taskConfigs[_0x43a0f6];
        console.log("\n🎯 执行追加任务：" + _0x2170db.name + "（第" + (this.extraAdExecutedCount + 1) + "/" + this.maxExtraAdCount + "次）");
        await this.executeSingleExtraTask(_0x43a0f6, _0x2170db);
        const _0x309fa9 = Math.floor(Math.random() * 30) + 20;
        console.log("⏳ 任务间隔等待" + _0x309fa9 + "秒");
        await new Promise(_0x5039a1 => setTimeout(_0x5039a1, _0x309fa9 * 1000));
      }
    }
    this.stopExtraTasks = true;
    console.log("\n🏁 所有追加任务执行完成");
  }
  async ["executeSingleExtraTask"](_0x354f3c, _0x3a55c2) {
    if (await this.checkCoinLimit()) return;
    const _0x18cdea = await this.retryOperation(() => this.getAdInfo(_0x354f3c, _0x3a55c2), "获取" + _0x3a55c2.name + "广告信息");
    if (!_0x18cdea) {
      this.taskStats[_0x354f3c].failed++;
      return;
    }
    await simulateAdWatch(_0x18cdea.estimatedReward);
    _0x18cdea.estimatedReward >= 30 && (await simulateAdClick(_0x18cdea));
    const _0x16c7d3 = await this.retryOperation(() => this.generateSignature(_0x18cdea, _0x354f3c, _0x3a55c2), "生成" + _0x3a55c2.name + "签名");
    if (!_0x16c7d3) {
      {
        this.taskStats[_0x354f3c].failed++;
        return;
      }
    }
    await this.submitReport(_0x16c7d3.sig, _0x16c7d3.nssig3, _0x16c7d3.xfalcon, _0x16c7d3.nstokensig, _0x16c7d3.post, _0x354f3c, _0x3a55c2);
  }
  async ["executeAllTasksByPriority"]() {
    for (let _0x1990a3 = 1; _0x1990a3 <= KSROUNDS; _0x1990a3++) {
      {
        if (this.stopAllTasks) {
          console.log("🏁 [" + this.nickname + "] 触发停止条件，结束剩余轮次");
          break;
        }
        console.log("\n========== 🔥 开始执行第 " + _0x1990a3 + "/" + KSROUNDS + " 轮主任务 ==========");
        for (const _0x3757e9 of this.normalTaskKeys) {
          {
            if (this.stopAllTasks) break;
            if (!this.taskConfigs[_0x3757e9]) continue;
            console.log("🚀 开始主任务：" + this.taskConfigs[_0x3757e9].name);
            await this.executeTask(_0x3757e9);
          }
        }
        if (this.stopAllTasks) break;
        this.stopExtraTasks = false;
        this.extraTaskKeys.length > 0 && this.extraAdExecutedCount < this.maxExtraAdCount ? (console.log("\n========== 🎁 第 " + _0x1990a3 + " 轮主任务结束，开始执行追加任务 =========="), console.log("📌 当前追加进度：" + this.extraAdExecutedCount + "/" + this.maxExtraAdCount), await this.executeExtraTasksInOrder()) : console.log("\n⏭️ 第 " + _0x1990a3 + " 轮跳过追加任务（无剩余任务或已达上限）");
        await this.checkCoinLimit();
      }
    }
    console.log("\n🏁 [" + this.versionLabel + "-" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 所有轮次执行完成");
    return true;
  }
}
function parseAccountConfig(_0x2725ce) {
  const _0x1f0a91 = String(_0x2725ce || "").trim().split("#");
  if (_0x1f0a91.length < 2) return null;
  let _0x46502f = "",
    _0xdeb985 = "",
    _0x34aa29 = "",
    _0x1f9200 = null;
  if (_0x1f0a91.length === 2) {
    _0xdeb985 = _0x1f0a91[0];
    _0x34aa29 = _0x1f0a91[1];
  } else {
    if (_0x1f0a91.length === 3) /socks5:\/\//i.test(_0x1f0a91[2]) ? (_0xdeb985 = _0x1f0a91[0], _0x34aa29 = _0x1f0a91[1], _0x1f9200 = _0x1f0a91[2]) : (_0x46502f = _0x1f0a91[0], _0xdeb985 = _0x1f0a91[1], _0x34aa29 = _0x1f0a91[2]);else {
      if (_0x1f0a91.length >= 4) {
        _0x46502f = _0x1f0a91[0];
        _0xdeb985 = _0x1f0a91[1];
        _0x34aa29 = _0x1f0a91.slice(2, _0x1f0a91.length - 1).join("#");
        _0x1f9200 = _0x1f0a91[_0x1f0a91.length - 1];
      }
    }
  }
  if (_0x1f9200) {
    {
      if (_0x1f9200.includes("|")) {
        const _0x329cd0 = _0x1f9200.split("|");
        if (_0x329cd0.length >= 2) {
          {
            const [_0xa1f0bb, _0x5113c9, _0x13fe01, _0x361dda] = _0x329cd0;
            _0x1f9200 = "socks5://" + _0x13fe01 + ":" + _0x361dda + "@" + _0xa1f0bb + ":" + _0x5113c9;
          }
        } else _0x1f9200 = null, console.log("⚠️ 代理字段格式错误，忽略：" + _0x1f9200);
      } else !/^socks5:\/\//i.test(_0x1f9200) && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x1f9200), _0x1f9200 = null);
    }
  }
  return {
    "remark": _0x46502f || "",
    "salt": _0x34aa29,
    "cookie": _0xdeb985,
    "proxyUrl": _0x1f9200
  };
}
function loadAccountsFromEnv() {
  const _0x7f288f = getAccountConfigsFromEnv(),
    _0x5d8a80 = [];
  for (const _0x1526b1 of _0x7f288f) {
    const _0x1c75e0 = parseAccountConfig(_0x1526b1);
    _0x1c75e0 ? _0x5d8a80.push(_0x1c75e0) : console.log("❌ 账号格式错误：" + _0x1526b1);
  }
  _0x5d8a80.forEach((_0xec598, _0x71535d) => {
    _0xec598.index = _0x71535d + 1;
  });
  return _0x5d8a80;
}
async function concurrentExecute(_0x17cbdd, _0x1fc660, _0x412806) {
  const _0x2b3d26 = new Array(_0x17cbdd.length);
  let _0x48796d = 0;
  async function _0x50971e() {
    while (true) {
      {
        const _0x21920a = _0x48796d++;
        if (_0x21920a >= _0x17cbdd.length) return;
        const _0x2ff000 = _0x17cbdd[_0x21920a];
        try {
          _0x2b3d26[_0x21920a] = await _0x412806(_0x2ff000, _0x21920a);
        } catch (_0x5cbb7f) {
          console.log("❌ 并发执行异常（index=" + (_0x21920a + 1) + "）：" + _0x5cbb7f.message);
          _0x2b3d26[_0x21920a] = null;
        }
      }
    }
  }
  const _0x46c99e = Array.from({
    "length": Math.min(_0x1fc660, _0x17cbdd.length)
  }, _0x50971e);
  await Promise.all(_0x46c99e);
  return _0x2b3d26;
}
async function processAccount(_0x342f3b) {
  const _0x52569a = _0x342f3b.cookie.match(/kpn=([^;]+)/),
    _0x44b551 = _0x52569a ? _0x52569a[1] : "KUAISHOU",
    _0x3b48dc = _0x44b551 === "KUAISHOU" ? "普通" : "极速",
    _0xde466 = await getNickname(_0x342f3b.cookie, _0x342f3b.proxyUrl, _0x342f3b.index),
    _0xd81a00 = _0xde466?.["nickname"] || "账号" + _0x342f3b.index,
    _0x26c49a = await getAccountBasicInfo(_0x342f3b.cookie, _0x342f3b.proxyUrl, _0x342f3b.index);
  if (_0x26c49a || _0xde466) {
    {
      const _0x3f426e = _0x26c49a?.["totalCoin"] != null ? _0x26c49a.totalCoin : "未知",
        _0x55eaeb = _0x26c49a?.["allCash"] != null ? _0x26c49a.allCash : "未知",
        _0x342a30 = _0xde466?.["totalCoin"] != null ? _0xde466.totalCoin : "未知",
        _0xf8061c = _0xde466?.["totalCash"] != null ? _0xde466.totalCash : "未知";
      if (_0x342f3b.proxyUrl) {
        const _0x11fb80 = await testProxyConnectivity(_0x342f3b.proxyUrl, "代理测试");
        if (_0x11fb80.ok) console.log("✅ [" + _0x3b48dc + "-" + _0xd81a00 + "]" + (_0x342f3b.remark ? "（" + _0x342f3b.remark + "）" : "") + " 登录成功！💰 普通金币: " + _0x3f426e + "，💸 余额: " + _0x55eaeb + "，（极速金币：" + _0x342a30 + "，余额：" + _0xf8061c + "）🌐 IP: " + _0x11fb80.ip);else {
          console.log("❌ [" + _0x3b48dc + "-" + _0xd81a00 + "]" + (_0x342f3b.remark ? "（" + _0x342f3b.remark + "）" : "") + " 代理连接失败：" + _0x11fb80.msg);
        }
      } else console.log("✅ [" + _0x3b48dc + "-" + _0xd81a00 + "]" + (_0x342f3b.remark ? "（" + _0x342f3b.remark + "）" : "") + " 登录成功！💰 普通金币: " + _0x3f426e + "，💸 余额: " + _0x55eaeb + "，（极速金币：" + _0x342a30 + "，余额：" + _0xf8061c + "）🌐 直连模式");
    }
  } else console.log("❌ [" + _0x3b48dc + "-" + _0xd81a00 + "]" + (_0x342f3b.remark ? "（" + _0x342f3b.remark + "）" : "") + " 基本信息获取失败，继续执行");
  let _0x445dee;
  if (_0x44b551 === "KUAISHOU") _0x445dee = _0x26c49a;else {
    _0x445dee = {
      "nickname": _0xd81a00,
      "totalCoin": _0xde466?.["totalCoin"] ?? null,
      "allCash": _0xde466?.["totalCash"] ?? null
    };
  }
  const _0x1d0637 = new KuaishouAdTask({
    ..._0x342f3b,
    "nickname": _0xd81a00,
    "tasksToExecute": tasksToExecute
  });
  await _0x1d0637.checkCoinLimit();
  if (_0x1d0637.coinExceeded) {
    console.log("⚠️ [" + _0x1d0637.versionLabel + "-" + _0x1d0637.nickname + "]" + (_0x342f3b.remark ? "（" + _0x342f3b.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
    let _0x159212;
    if (_0x44b551 === "KUAISHOU") _0x159212 = await getAccountBasicInfo(_0x342f3b.cookie, _0x342f3b.proxyUrl, _0x342f3b.index);else {
      {
        const _0x8de299 = await getNickname(_0x342f3b.cookie, _0x342f3b.proxyUrl, _0x342f3b.index);
        _0x159212 = {
          "nickname": _0x8de299?.["nickname"] || _0xd81a00,
          "totalCoin": _0x8de299?.["totalCoin"] ?? null,
          "allCash": _0x8de299?.["totalCash"] ?? null
        };
      }
    }
    const _0x519578 = _0x445dee?.["totalCoin"] || 0,
      _0x3205d7 = _0x159212?.["totalCoin"] || 0,
      _0x373520 = _0x3205d7 - _0x519578,
      _0x1afb7b = _0x445dee?.["allCash"] || 0,
      _0x4827cb = _0x159212?.["allCash"] || 0,
      _0xdfc942 = _0x4827cb - _0x1afb7b;
    return {
      "index": _0x342f3b.index,
      "remark": _0x342f3b.remark || "无备注",
      "nickname": _0xd81a00,
      "initialCoin": _0x519578,
      "finalCoin": _0x3205d7,
      "coinChange": _0x373520,
      "initialCash": _0x1afb7b,
      "finalCash": _0x4827cb,
      "cashChange": _0xdfc942,
      "stats": _0x1d0637.getTaskStats(),
      "coinLimitExceeded": true
    };
  }
  await _0x1d0637.executeAllTasksByPriority();
  let _0x6d6b2e;
  if (_0x44b551 === "KUAISHOU") _0x6d6b2e = await getAccountBasicInfo(_0x342f3b.cookie, _0x342f3b.proxyUrl, _0x342f3b.index);else {
    {
      const _0x5452b9 = await getNickname(_0x342f3b.cookie, _0x342f3b.proxyUrl, _0x342f3b.index);
      _0x6d6b2e = {
        "nickname": _0x5452b9?.["nickname"] || _0xd81a00,
        "totalCoin": _0x5452b9?.["totalCoin"] ?? null,
        "allCash": _0x5452b9?.["totalCash"] ?? null
      };
    }
  }
  const _0x54c1b6 = _0x445dee?.["totalCoin"] || 0,
    _0x54b9e0 = _0x6d6b2e?.["totalCoin"] || 0,
    _0x5a8c0c = _0x54b9e0 - _0x54c1b6,
    _0x324c25 = _0x445dee?.["allCash"] || 0,
    _0x1c6839 = _0x6d6b2e?.["allCash"] || 0,
    _0x4655be = _0x1c6839 - _0x324c25;
  _0x1d0637.printTaskStats();
  return {
    "index": _0x342f3b.index,
    "remark": _0x342f3b.remark || "无备注",
    "nickname": _0xd81a00,
    "initialCoin": _0x54c1b6,
    "finalCoin": _0x54b9e0,
    "coinChange": _0x5a8c0c,
    "initialCash": _0x324c25,
    "finalCash": _0x1c6839,
    "cashChange": _0x4655be,
    "stats": _0x1d0637.getTaskStats(),
    "coinLimitExceeded": _0x1d0637.coinExceeded
  };
}
function printAccountsSummary(_0x29c09a) {
  if (!_0x29c09a.length) {
    console.log("\n📊 没有可显示的账号信息。");
    return;
  }
  const _0x218cf7 = _0x29c09a.reduce((_0x5a7719, _0x5606c0) => _0x5a7719 + (parseInt(_0x5606c0.initialCoin) || 0), 0),
    _0x3cb254 = _0x29c09a.reduce((_0x39bf28, _0x1da591) => _0x39bf28 + (parseInt(_0x1da591.finalCoin) || 0), 0),
    _0x76f28c = _0x3cb254 - _0x218cf7,
    _0x7a8eb = _0x29c09a.reduce((_0x4c669e, _0x10c163) => _0x4c669e + (parseFloat(_0x10c163.initialCash) || 0), 0),
    _0x38f5bd = _0x29c09a.reduce((_0x5205bf, _0x16c15b) => _0x5205bf + (parseFloat(_0x16c15b.finalCash) || 0), 0),
    _0x2300dd = _0x38f5bd - _0x7a8eb;
  let _0x2ab893 = 0,
    _0x3db986 = 0,
    _0x1d2f40 = 0;
  _0x29c09a.forEach(_0x31c763 => {
    _0x31c763.stats && Object.values(_0x31c763.stats).forEach(_0x621749 => {
      _0x2ab893 += _0x621749.success + _0x621749.failed;
      _0x3db986 += _0x621749.success;
      _0x1d2f40 += _0x621749.totalReward;
    });
  });
  const _0x29729e = _0x2ab893 > 0 ? (_0x3db986 / _0x2ab893 * 100).toFixed(1) : "0.0",
    _0x328349 = _0x29c09a.filter(_0x406b64 => _0x406b64.coinLimitExceeded).length;
  console.log("\n=======");
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x29c09a.length).padEnd(22) + ("超过金币阈值账号: " + _0x328349).padEnd(22) + ("总任务数: " + _0x2ab893).padEnd(22) + ("任务成功率: " + _0x29729e + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x76f28c).padEnd(26) + ("总金币奖励: " + _0x1d2f40).padEnd(26) + ("总余额变化: " + _0x2300dd.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x5b9172 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x172408 = [6, 16, 16, 12, 12, 12, 12, 12, 12];
  let _0x356482 = "|";
  _0x5b9172.forEach((_0x36550d, _0x437500) => {
    _0x356482 += centerAlign(_0x36550d, _0x172408[_0x437500]) + "|";
  });
  console.log(_0x356482);
  let _0xabb7fa = "|";
  _0x172408.forEach(_0x10de62 => {
    _0xabb7fa += "-".repeat(_0x10de62) + "|";
  });
  console.log(_0xabb7fa);
  _0x29c09a.forEach(_0x29bf01 => {
    let _0x24a10e = "|";
    _0x24a10e += centerAlign(_0x29bf01.index, _0x172408[0]) + "|";
    _0x24a10e += centerAlign(_0x29bf01.remark, _0x172408[1]) + "|";
    const _0x493149 = (_0x29bf01.nickname || "-") + (_0x29bf01.coinLimitExceeded ? " ⚠️" : "");
    _0x24a10e += centerAlign(_0x493149.substring(0, _0x172408[2] - 2), _0x172408[2]) + "|";
    _0x24a10e += centerAlign(_0x29bf01.initialCoin, _0x172408[3]) + "|";
    _0x24a10e += centerAlign(_0x29bf01.finalCoin, _0x172408[4]) + "|";
    const _0x55b40e = _0x29bf01.coinChange >= 0 ? "+" + _0x29bf01.coinChange : _0x29bf01.coinChange;
    _0x24a10e += centerAlign(_0x55b40e, _0x172408[5]) + "|";
    _0x24a10e += centerAlign(_0x29bf01.initialCash, _0x172408[6]) + "|";
    _0x24a10e += centerAlign(_0x29bf01.finalCash, _0x172408[7]) + "|";
    const _0x556d6c = _0x29bf01.cashChange >= 0 ? "+" + _0x29bf01.cashChange.toFixed(2) : _0x29bf01.cashChange.toFixed(2);
    _0x24a10e += centerAlign(_0x556d6c, _0x172408[8]) + "|";
    console.log(_0x24a10e);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
function generateLegacy() {
  const _0x115ae1 = Date.now(),
    _0x4c215 = Math.floor(Math.random() * 100000),
    _0x5d14d1 = String(_0x4c215).padStart(5, "0");
  return "" + _0x115ae1 + _0x5d14d1;
}
function generateKuaishouDid() {
  try {
    {
      const _0x597fdf = _0x229eca => {
          const _0x32d337 = "0123456789abcdef";
          let _0x56701b = "";
          for (let _0x2ceb83 = 0; _0x2ceb83 < _0x229eca; _0x2ceb83++) {
            _0x56701b += _0x32d337.charAt(Math.floor(Math.random() * _0x32d337.length));
          }
          return _0x56701b;
        },
        _0x307159 = _0x597fdf(16);
      return "ANDROID_" + _0x307159;
    }
  } catch (_0x2a12c3) {
    console.log("❌ 生成did失败: " + _0x2a12c3.message);
    const _0x248b8f = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x248b8f.substring(0, 16);
  }
}
async function main() {
  const _0x1b7e8a = await checkScriptVersion();
  !_0x1b7e8a && (console.log("🚫 版本验证失败，脚本终止执行"), process.exit(1));
  accountConfigs = getAccountConfigsFromEnv();
  accountCount = accountConfigs.length;
  tasksToExecute = getTasksToExecute();
  taskNameMap = {
    "food": "food（饭补）",
    "foods": "foods（饭补追加）",
    "box": "box（宝箱广告）",
    "boxs": "boxs（宝箱广告追加）",
    "look": "look（看广告得金币）",
    "looks": "looks（看广告得金币追加）",
    "content": "content（看内容广告得金币）",
    "contents": "contents（看内容广告得金币追加）"
  };
  const _0x431d97 = 2,
    _0x2640fb = 200,
    _0x1ee6b2 = parseInt(process.env.MAX_CONCURRENCY, 10);
  maxConcurrency = isNaN(_0x1ee6b2) ? _0x431d97 : Math.min(Math.max(_0x1ee6b2, 1), _0x2640fb);
  console.log("📋 任务类型设置：" + tasksToExecute.map(_0x3be9d7 => taskNameMap[_0x3be9d7] || _0x3be9d7).join(", "));
  console.log("🔄 主任务执行轮数：" + KSROUNDS + "轮");
  console.log("🎯 追加任务目标总数量：" + MAX_EXTRA_AD_COUNT + "个");
  console.log("⚠️ 金币上限设置：" + KSCOIN_LIMIT);
  console.log("📋 并发数设置：" + maxConcurrency);
  console.log("✅ 成功加载 " + accountCount + " 个账号");
  console.log("=======");
  accountCount > _0x2640fb && (console.log("❌ 错误: 检测到 " + accountCount + " 个账号配置��最多只允许" + _0x2640fb + "个"), process.exit(1));
  const _0x49d182 = loadAccountsFromEnv();
  console.log("=======");
  console.log("📊 共找到 " + _0x49d182.length + " 个有效账号");
  if (!_0x49d182.length) process.exit(1);
  const _0x23fb86 = [];
  await concurrentExecute(_0x49d182, maxConcurrency, async _0x15d719 => {
    try {
      {
        const _0x1ef3be = await processAccount(_0x15d719);
        _0x23fb86.push({
          "index": _0x15d719.index,
          "remark": _0x15d719.remark || "无备注",
          "nickname": _0x1ef3be?.["nickname"] || "账号" + _0x15d719.index,
          "initialCoin": _0x1ef3be?.["initialCoin"] || 0,
          "finalCoin": _0x1ef3be?.["finalCoin"] || 0,
          "coinChange": _0x1ef3be?.["coinChange"] || 0,
          "initialCash": _0x1ef3be?.["initialCash"] || 0,
          "finalCash": _0x1ef3be?.["finalCash"] || 0,
          "cashChange": _0x1ef3be?.["cashChange"] || 0,
          "stats": _0x1ef3be?.["stats"] || {},
          "coinLimitExceeded": _0x1ef3be?.["coinLimitExceeded"] || false
        });
      }
    } catch (_0x2519e4) {
      console.log("❌ [" + _0x15d719.index + "]" + (_0x15d719.remark ? "（" + _0x15d719.remark + "）" : "") + " 执行异常：" + _0x2519e4.message);
      _0x23fb86.push({
        "index": _0x15d719.index,
        "remark": _0x15d719.remark || "无备注",
        "nickname": "账号" + _0x15d719.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x2519e4.message
      });
    }
  });
  _0x23fb86.sort((_0x3537e2, _0x3519bc) => _0x3537e2.index - _0x3519bc.index);
  console.log("\n✅ 全部完成。");
  printAccountsSummary(_0x23fb86);
}
main().catch(_0x3c4b91 => {
  console.log("❌ 脚本执行异常：", _0x3c4b91.message);
  process.exit(1);
});