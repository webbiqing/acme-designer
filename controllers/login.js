const sqlClient = require("../tools/index")
const login = require("../models/login")
const setFrontData = require("../utils/setFrontData")
const { generateToken } = require("../utils/tokenManage")
const { setToken } = require("../models/verify")
const jwt = require('jsonwebtoken');
const encryto = require("../utils/encryto")

module.exports = async (ctx,next) => {
    const {username,pwd} = ctx.request.query;
    // 判断是否为空
    if (username && pwd) {
        const password = encryto(pwd);
        // 检查用户名密码
        let result = await login( username,password );
        if (result[0].countnum === 1) {
            // 生成token
            const token = generateToken();
            try {
                // 将新生成的token存入数据库
                await setToken(username,token);
                // 登录成功，返回token
                ctx.status = 200;
                ctx.body = setFrontData('success',{token},'成功')
            } catch (error) {
                // 无法返回token，返回错误信息
                ctx.status = 200;
                ctx.body = setFrontData('fail',{},'认证失败')
            }

        } else {
            // 信息有误，登录失败
            ctx.status = 200;
            ctx.body = setFrontData('fail',{},'认证信息不通过')
        }

    }
}
