const crypto = require('crypto');

function generateToken04(appId, userId, secret, effectiveTimeInSeconds) {
    const createTime = Math.floor(Date.now() / 1000);
    const expireTime = createTime + effectiveTimeInSeconds;
    const nonce = Math.floor(Math.random() * 2147483647);

    const header = Buffer.from(JSON.stringify({
        ver: 1,
        hash: 'sha256',
        nonce: nonce,
        appid: appId,
        user_id: userId,
        ctime: createTime,
        expire: expireTime,
    })).toString('base64');

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(`${header}\n`);
    const signature = hmac.digest('base64');

    const token = Buffer.from(JSON.stringify({
        header: header,
        signature: signature
    })).toString('base64');

    return '04' + token;
}

module.exports = { generateToken04 };