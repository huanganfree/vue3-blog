/**
 * 接口code返回定义：
 * 1.
 * 2.登录失效401，无权限403， 成功200
 * 3.成功为200，其他失败111000
 */
const express = require('express')
const app = express()
// const cookieSession = require('cookie-session')
const loginRouter = require('./routers/login')
const aboutRouter = require('./routers/about')
const uploadRouter = require('./routers/multer/upload')
const { port } = require('./utils/commonData')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public/', express.static('./public/')) // 开启静态资源服务

// 所有的路由，统一配置cors
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin',  req.get('Origin'))
  res.set("Access-Control-Allow-Headers", "Content-Type,Access-Token") // 必须设置
  res.set("Access-Control-Allow-Methods", "*")
  next()
})

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2'],
//   maxAge: 10 * 60 * 1000
// }))

app.use('/', [loginRouter, aboutRouter, uploadRouter])

app.listen(port, () => {
  console.log('server is running in 8000!');
})

