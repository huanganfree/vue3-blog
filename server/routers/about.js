const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  next()
})

router.get('/about', function(req, res) {
  dbQueryPromise(`SELECT * FROM about`) //mysql中间件无法识别传入参数
    .then((results) => {
      res.json({
        code: 200,
        message: '成功',
        data: results
      })
    })
    .catch(err => {
      res.json({
        code: 111000,
        message: err.message
      })
    })
})

module.exports = router