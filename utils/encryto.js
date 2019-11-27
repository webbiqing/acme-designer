/*
* @wbqing
* 加密
* @param { pwd } 加密文本
* */
// 读取私钥
const priCert = require("../privateKey/rs_private_key");
const crypto = require('crypto');

module.exports = function encrytoPwd(pwd) {
    const hmac = crypto.createHmac('sha256', priCert);
    hmac.update(pwd);
    return hmac.digest('hex');
}