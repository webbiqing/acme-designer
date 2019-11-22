const sqlClient = require("../tools/index")
const blogs = require("../models/blogs")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
    const {id} = ctx.request.body;
    let result =  await blogs.setVoters(id);
    ctx.body = setFrontData('success',result,'成功了')
}
