const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
   const {category} = ctx.query
   if(!category) return ctx.body = setFrontData('fail',{},'未知的分类')
   let result =  await blogs.searchBlogs(category);
   ctx.body = setFrontData('success',result,'查询成功')
}
