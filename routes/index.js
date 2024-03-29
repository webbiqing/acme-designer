/**
 *服务路由集合
 */
const router = require('koa-router')({
    prefix: '/acme/api'
})
const controllers = require('../controllers')

router.get('/login',controllers.login)
router.post('/register',controllers.register)

router.post('/add-blog',controllers.addBlog)
router.get('/search-blog',controllers.searchBlog)
router.get('/search-category',controllers.category)
router.post('/voters',controllers.setVoters)

router.post('/add-comment',controllers.addComment)
router.get('/search-comment',controllers.searchComment)
router.post('/parse-comment',controllers.parseComment)


module.exports = router