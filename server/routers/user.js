const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  next()
})

router.post('/login', function(req, res) {
  const { username, password } = req.body || {}
  dbQueryPromise(`SELECT * FROM user WHERE username='${username}'`) //mysql中间件无法识别传入参数
    .then((results) => {
      console.log('results-login==', results);
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
        req.session.userId = obj.id // 每次登录重置id
        req.session.username = obj.username
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

router.post('/register', function(req, res) {
  const { username, password } = req.body || {}
  dbQueryPromise(`SELECT password FROM user WHERE username='${username}'`)
    .then((results) => {
      console.log('results-register==', results);
      if(results.length) {
        res.json({
          code: 111000,
          message: '该用户名已被占用'
        })
      } else {
        dbQueryPromise(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`)
          .then((results) => {
            console.log('results-register-insert==', results);
            const { insertId } = results
            if(insertId){
              res.json({
                code: 200,
                message: '注册成功'
              })
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
    })
})

router.get('/logout', function(req, res) {
  req.session.username = null
  res.json({
    code: 200,
    message: '退出登录成功'
  })
})

module.exports = router