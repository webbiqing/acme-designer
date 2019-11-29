const sqlClient = require("../tools/index")
const register = require("../models/register")
const setFrontData = require("../utils/setFrontData")
const encryto = require("../utils/encryto")

module.exports = async (ctx,next) => {
    const {username,pwd} = ctx.request.body;
    if(!(pwd && username)) return ctx.body = setFrontData('fail',{},'用户名或者密码不能为空！');
    const userResult = await register.findUserByUserName(username);
    if(userResult.length && userResult[0].countnum > 0){
        return ctx.body = setFrontData('fail',{userResult},'用户名已存在')
    }
    const password = encryto(pwd);
    let result =  await register.addUser(username,password);
    ctx.body = setFrontData('success',{result},'成功')
}