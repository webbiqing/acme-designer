const sqlClient = require("../tools/index")
const comment = require("../models/comment")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
    const { blog_id,content,create_user,create_time } = ctx.request.body;
    if(!blog_id){
        return ctx.body = setFrontData('fail',{},'关联id为空，不能进行评论！');
    }
    let result =  await comment.addComment(blog_id,content,create_user,create_time);
    ctx.body = setFrontData('success',{result},'成功')
}