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
      if(avatar) {
        res.json({
          code: 200,
          message: '成功',
          data: {
            ...obj,
            avatar: BaseURL + imgPath + avatar
          }
        })
      } else {
        res.json({
          code: 111000,
          message: '失败',
          data: null
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router