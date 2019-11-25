const verify = require('jsonwebtoken');
const fs = require('fs');
const setFrontData = require("../utils/setFrontData");
const priCert = require("../privateKey/rs_private_key");
const filterList = require("../utils/filterVerify");

module.exports = async (ctx, next)=> {
    const dataString = ctx.request.headers.authorization;
    /*
    * 设置过滤不需要校验token 的列表
    * */
    if(filterList.some(item=> ctx.originalUrl.includes(item))){
        return await next();
    }
    try {
        const dataArr = dataString.split(' ');
        const token = dataArr[1];
        let playload = await verify.verify(token, priCert);
        const { data } = playload;
        if (data === 'createToken') {
            ctx.status = 200 //这里非常重要，只有设置了status，koa-router才识别请求正确继续进入路由
            await next()
        }

    } catch (error) {
        ctx.body = {
            code:401,
            data:{},
            message:'认证失败！'
        }
    }
}
