const sqlClient = require("../tools/index")
const comment = require("../models/comment")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
   const {commentId} = ctx.query
   if(!commentId) return ctx.body = setFrontData('fail',{},'未知的分类')
   let result =  await comment.searchComment(commentId);
   ctx.body = setFrontData('success',result,'查询成功')
}
