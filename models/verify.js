const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

const verifys = {
    async setToken(username,token){
        return await sqlClient.query(
            escape`INSERT INTO acme_user_token (username,token,create_time) VALUES (${username},${token},NOW())`
        )
    },
    async getTokenUser(token){
        return await sqlClient.query(
            escape`SELECT * from acme_user_token where token = ${token}`
        )
    },
}

module.exports = verifys;