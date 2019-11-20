const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const blogs  = {
    async addBlogs(title,name,content,category){
        const date = new Date();
        return await sqlClient.query(
            escape`INSERT INTO bloglist (title,name,content,category,date) 
                   VALUES 
                   (${title},${name},${content},${category},NOW())`
        )
    },
    async searchBlogs(categoryId){
        return await sqlClient.query(`SELECT * from bloglist where category = ${categoryId} order by date DESC`)
    },
    async searchMainBlog(id){
        return await sqlClient.query(escape`SELECT a.name as category_name,a.id as category_id,b.name,b.id,title,content,date from category a, bloglist b where a.id = b.category and b.id = ${id}`)
    },
    async deleteBlog(id){
        return await sqlClient.query(escape`Delete from bloglist where id = ${id}`)
    },
    async updateBlog(title,name,content,category,id){
        return await sqlClient.query(escape`update bloglist set title = ${title},
                                                   name = ${name},
                                                   content = ${content},
                                                   category = ${category},
                                                   date = CURDATE()
                                                   where id = ${id}
                                                   `
                                                )
    }
}

module.exports = blogs