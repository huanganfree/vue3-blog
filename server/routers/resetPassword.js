const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  next()
})

router.post('/resetPassword', function(req, res) {
  const userId = req.session.userId
  dbQueryPromise(`SELECT password FROM user WHERE id='${userId}'`) //mysql中间件无法识别传入参数
    .then((results) => {
      console.log(results);
      const { oldPassword, newPassword } = req.body
      const [userPassword] = results
      if(oldPassword !== (userPassword || {}).password) {
        res.json({
          code: 111000,
          message: '原密码错误！'
        })
      } else {
        dbQueryPromise(`UPDATE user SET password='${newPassword || ''}' WHERE id='${userId}'`) //mysql中间件无法识别传入参数
          .then(()=> {
            res.json({
              code: 200,
              message: '修改密码成功'
            })
          }).catch(err => {
            res.json({
              code: 111000,
              message: err.message
            })
          })
      }
    })
    .catch(err => {
      res.json({
        code: 111000,
        message: err.message
      })
    })
})

module.exports = router