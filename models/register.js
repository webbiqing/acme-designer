const sqlClient = require("../tools/index")
const escape = require('../tools/escape')

module.exports = async function(username,pwd,){
    return await sqlClient.query(
        escape`INSERT INTO user (username,pwd,create_time) 
                   VALUES 
                   (${username},${pwd},NOW())`
    )
}