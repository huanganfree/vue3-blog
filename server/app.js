/**
 * 接口code返回定义：
 * 1.
 * 2.登录失效401，无权限403， 成功200
 * 3.成功为200，其他失败111000
 */
const express = require('express')
const app = express()
const loginRouter = require('./routers/login')

// 所有的路由，统一配置cors
app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

// 登录接口路由
app.use('/login', loginRouter)


app.listen(8000, () => {
  console.log('server is running in 8000!');
})