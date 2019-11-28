const sqlClient = require("../tools/index")
const comment = require("../models/comment")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
   const { commentId, pageIndex, pageSize } = ctx.query;
   if(!commentId) return ctx.body = setFrontData('fail',{},'未知的分类');
   const page_index = pageIndex ? (pageIndex - 1) * pageSize : 0;
   const page_size = pageSize ? pageSize : 20;
   let result =  await comment.searchComment(commentId, page_index, page_size);
   ctx.body = setFrontData('success',result,'查询成功')
}
