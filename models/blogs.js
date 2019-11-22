const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const blogs  = {
    async addBlogs(title,name,content,category){
        return await sqlClient.query(
            escape`INSERT INTO bloglist (title,name,content,category,date) 
                   VALUES 
                   (${title},${name},${content},${category},NOW())`
        )
    },
    async searchBlogs(categoryId){
        return await sqlClient.query(`SELECT * from bloglist where category = ${categoryId} order by date DESC`)
    },
    async setVoters(id){
        return await sqlClient.query(
            `update bloglist set voters = voters + 1 where id = ${id}`
        )
    },
}

module.exports = blogs