const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  next()
})

router.post('/', function (req, res) {
  console.log(req);
  dbQueryPromise(`SELECT password FROM user WHERE username = '${req.query.username}'`) //mysql中间件无法识别传入参数
    .then((results) => {
      console.log('results==', results);
      const [obj] = results
      if(!results.length) {
        res.json({
          code: 111000,
          message: '用户名或密码不正确'
        })
      } else if(obj.password !== req.query.password) {
        res.json({
          code: 111000,
          message: '用户名或密码不正确'
        })
      } else if(obj.password == req.query.password) {
        res.json({
          code: 200,
          message: '成功'
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router