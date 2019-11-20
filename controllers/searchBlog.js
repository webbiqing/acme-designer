const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")

module.exports = async (ctx,next) => {
   const {category} = ctx.query
   if(!category){
     return {
        code:400,
        message:'请先选择类别'
     }
   }
   let result =  await blogs.searchBlogs(category);
   ctx.body = result;
}