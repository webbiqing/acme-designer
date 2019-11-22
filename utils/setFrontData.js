/*
* @wbqing
* 返回给前端的数据规范
* @example:
* {
*   code:200,  success => 200  fail => 400
*   data:{},  or  data:[],
*   message:xxxx  服务端的响应信息
* }
* @param { type } success or fail
* @param { data } 返回给前端的数据
* @param { message } 服务端的响应信息
* */
module.exports = function (type,data,message) {
    return {
        code:type === 'success' ? 200 : 400,
        data:data || {},
        message:message || ''
    }
}