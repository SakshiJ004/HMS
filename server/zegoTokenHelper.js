const crypto = require('crypto');

function generateToken04(appId, userId, secret, effectiveTimeInSeconds, payload) {
    const createTime = Math.floor(Date.now() / 1000);
    const expireTime = createTime + effectiveTimeInSeconds;

    const nonce = Math.floor(Math.random() * 2147483647);

    const header = {
        ver: 1,
        hash: 'sha256',
        nonce: nonce,
        appid: appId,
        user_id: userId,
        ctime: createTime,
        expire: expireTime,
    };

    const headerStr = Buffer.from(JSON.stringify(header)).toString('base64');

    const payloadStr = payload || '';

    const hashStr = `${headerStr}\n${payloadStr}`;

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(hashStr);
    const signature = hmac.digest('base64');

    const tokenObj = {
        header: header,
        payload: payloadStr,
        signature: signature
    };

    const tokenStr = Buffer.from(JSON.stringify(tokenObj)).toString('base64');

    return '04' + tokenStr;
}

module.exports = { generateToken04 };