const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')
const { imgPath, BaseURL } = require('../utils/commonData')

router.use((req, res, next) => {
  next()
})

router.get('/userInfo', function(req, res) {
  const userId = req.session.userId
  dbQueryPromise(`SELECT * FROM user WHERE id='${userId}'`) //mysql中间件无法识别传入参数
    .then((results) => {
      console.log('results-login==', results);
      const [obj] = results
      const { avatar } = obj
      res.json({
        code: 200,
        message: '成功',
        data: {
          ...obj,
          avatar: avatar ? BaseURL + imgPath + avatar : null
        }
      })
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/userInfo', function(req, res) {
  const userId = req.session.userId
  dbQueryPromise(`UPDATE user SET signature='${req.body.signature || ''}' WHERE id='${userId}'`) //mysql中间件无法识别传入参数
    .then(() => {
      res.json({
        code: 200,
        message: '修改成功'
      })
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router