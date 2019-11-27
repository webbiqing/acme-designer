const sqlClient = require("../tools/index")
const register = require("../models/register")
const setFrontData = require("../utils/setFrontData")
const encryto = require("../utils/encryto")

module.exports = async (ctx,next) => {
    const {username,pwd} = ctx.request.body;
    if(!(pwd && username)) return ctx.body = setFrontData('fail',{},'用户名或者密码不能为空！');
    const password = encryto(pwd);
    let result =  await register(username,password);
    ctx.body = setFrontData('success',{result},'成功')
}