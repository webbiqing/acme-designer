const sqlClient = require("../tools/index")
const comment = require("../models/comment")
const verify = require("../models/verify")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
    const { blog_id,content } = ctx.request.body;
    const dataArr = ctx.request.headers.authorization.split(' ');
    const token = dataArr[1];
    let userResult = await verify.getTokenUser(token);
    if(!userResult.length) return ctx.body = setFrontData('fail',{},'未找到该用户！');
    if(!blog_id) return ctx.body = setFrontData('fail',{},'关联id为空，不能进行评论！');
    let result =  await comment.addComment(blog_id,content,userResult[0].username);
    ctx.body = setFrontData('success',{result},'成功')
}