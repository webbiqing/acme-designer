const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const register = {
    async addUser(username,pwd){
        return await sqlClient.query(
            escape`INSERT INTO user (username,pwd,create_time) 
                   VALUES 
                   (${username},${pwd},NOW())`
        )
    },
    async findUserByUserName(username){
        return await sqlClient.query(
            escape`select count(*) as countnum from user where username = ${username}`
        )
    },
}

module.exports = register;