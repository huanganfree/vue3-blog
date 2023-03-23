const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  next()
})

router.post('/', function (req, res) {
  console.log(req);
  dbQueryPromise(`SELECT password FROM user WHERE username = ${req.query.username}`)
    .then((results) => {
      console.log('results==', results);
      const [password] = results
      if(password == req.query.password) {
        res.json({
          code: 200,
          message: '成功'
        })
      } else {
        res.json({
          code: 11100,
          message: '失败'
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router