const debug = require('debug')('koa-weapp-demo')

/**
 * 响应处理模块
 */
module.exports = async (ctx, next)=> {
    try {
        // 调用下一个 middleware
        await next()

        // 处理响应结果
        // 如果直接写入在 body 中，则不作处理
        // 如果写在 ctx.body 为空，则使用 state 作为响应
        ctx.body = ctx.body ? ctx.body : {
            code: ctx.state.code !== undefined ? ctx.state.code : 400,
            data: ctx.state.data !== undefined ? ctx.state.data : {},
            message: ctx.state.message !== undefined ? ctx.state.message : '服务异常',
        }
    } catch (err) {
        // catch 住全局的错误信息
        debug('Catch Error: %o', err)

        // 设置状态码为 200 - 服务端错误
        ctx.status = err.status || 200

        // 输出详细的错误信息
        ctx.body = {
            code: 400,
            message: err && err.message ? err.message : err.toString()
        }
    }
}
