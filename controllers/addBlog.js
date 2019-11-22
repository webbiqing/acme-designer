const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
    const {title, name, content,category} = ctx.request.body
    let result =  await blogs.addBlogs(title,name,content,category);
    ctx.body = setFrontData('success',{},'成功')
}