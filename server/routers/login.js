const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  console.log('req==', req.session);
  next()
})

router.post('/login', function(req, res) {
  const { username, password } = req.body || {}
  console.log('username==', username);
  dbQueryPromise(`SELECT password FROM user WHERE username='${username}'`) //mysql中间件无法识别传入参数
    .then((results) => {
      console.log('results==', results);
      const [obj] = results
      if(!results.length) {
        res.json({
          code: 111000,
          message: '用户名或密码不正确'
        })
      } else if(obj.password !== password) {
        res.json({
          code: 111000,
          message: '用户名或密码不正确'
        })
      } else if(obj.password == password) {
        req.session.username = password
        res.json({
          code: 200,
          message: '登录成功'
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router