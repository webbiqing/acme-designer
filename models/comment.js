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
    async searchComment(blog_id, page_index, page_size) {
        const Result = await sqlClient.query(`SELECT * FROM comment where blog_id = ${blog_id} LIMIT ${page_index},${page_size};`);
        const TotalCount = await sqlClient.query(`SELECT COUNT(*) FROM comment WHERE blog_id=${blog_id};`)
        return {
            Result,
            TotalCount: TotalCount[0]["COUNT(*)"]
        }
    },
    async parseComment(commentId) {
        return await sqlClient.query(`UPDATE comment SET prase_count = prase_count + 1 where id = ${commentId}`);
    }
}

module.exports = comment