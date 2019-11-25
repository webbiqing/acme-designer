const fs = require('fs');
const { setToken } = require("../models/verify")
const jwt = require('jsonwebtoken');

// 读取私钥
const priCert = require("../privateKey/rs_private_key");

// 生成token
function generateToken() {
    const created = Math.floor(Date.now() / 1000) + (30 * 60);
    return jwt.sign({
        data: 'createToken'
    }, priCert);
}

// 对密码加密
/*function encrytoPwd(pwd) {
    const hmac = crypto.createHmac('sha256', 'a secret');
    hmac.update(pwd);
    return hmac.digest('hex');
}*/

module.exports = { generateToken }