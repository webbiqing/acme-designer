const CONF = {
    //服务端口配置
    server:{
        port:8808
    },
    //mysql配置
    mysql:{
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'clown',
        password: 'wbqing',
        char: 'utf8mb4',
        timezone:"08:00"
    },
    /*mysql:{
        host: '47.105.81.163',
        port: 3306,
        user: 'root',
        database: 'clown',
        password: 'gaoxin',
        char: 'utf8mb4',
        timezone:"08:00"
    }*/

}

module.exports = CONF;