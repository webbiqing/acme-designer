const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const response = require('./middlewares/response')
const verify = require('./middlewares/verify')
var cors = require('koa2-cors');
const config = require('./config')

// error handler
onerror(app)

/*处理跨域的中间件*/
// 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json());
/*日志*/
app.use(logger());
/*响应*/
app.use(response);
app.use(cors());
/*token认证*/
app.use(verify);




// 路由
const router = require('./routes')
app.use(router.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(config.server.port, () => `listening on port ${config.server.port}`)

