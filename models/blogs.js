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
        return await sqlClient.query(`
            SELECT bl.*,com.count from bloglist bl,
            (SELECT count(*) count,blog_id FROM \`comment\` GROUP BY blog_id) com
            WHERE bl.category = ${categoryId} and bl.id = com.blog_id order by bl.date DESC
        `)
    },
    async setVoters(id){
        return await sqlClient.query(
            `update bloglist set voters = voters + 1 where id = ${id}`
        )
    },
}

module.exports = blogs