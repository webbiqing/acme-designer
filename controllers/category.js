const sqlClient = require("../tools/index")
const category = require("../models/category")
const setFrontData = require("../utils/setFrontData")

module.exports = async (ctx,next) => {
   let result =  await category.searchCategory();
   ctx.body = setFrontData('success',result,'成功')
}