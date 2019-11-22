const sqlClient = require("../tools/index")
const login = require("../models/login")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
    const {username,pwd} = ctx.request.query;
    let data = await login( username,pwd );
    if(data[0].countnum === 1){
        ctx.body = setFrontData('success',{},'登录成功')
    }else{
        ctx.body = setFrontData('fail',{},'登录异常')
    }
}
