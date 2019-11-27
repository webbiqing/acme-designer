const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const comment  = {
    async addComment(blog_id,content,create_user){
        return await sqlClient.query(
            escape`INSERT INTO comment (blog_id,content,create_user,create_time) 
                   VALUES 
                   (${blog_id},${content},${create_user},NOW())`
        )
    },
    async searchComment(blog_id) {
        return await sqlClient.query(`SELECT * FROM comment where blog_id = ${blog_id}`)
    }
}

module.exports = comment