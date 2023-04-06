// 引入配置好的 multerConfig
const express = require('express')
const router = express.Router()
const multerConfig = require('./multerConfig')
const { imgPath, BaseURL } = require('../../utils/commonData')
// const fse = require('fs-extra')
// const path = require('path') 
const dbQueryPromise = require('../../db/dbOperation')



// 封装上传图片的接口
function uploadAvatar(req, res) {
  // fse.emptyDir(path.resolve(__dirname, '../../public')) // 填入绝对路径
  //   .then(() => {
  multerConfig.single('file')(req, res, function (err) {
    if (err) {
      // 传递的图片格式错误或者超出文件限制大小，就会reject出去
      res.json({
        code: 111000,
        message: err.message
      })
    } else {
      // 拼接成完整的服务器静态资源图片路径
      dbQueryPromise(`UPDATE user SET avatar='${req.file.filename}' WHERE id = '${req.session.userId}'`)
        .then((results) => {
          console.log('results--UPDATE user SET', results);
          res.json({
            code: 200,
            data: BaseURL + imgPath + req.file.filename,
            message: '上传成功'
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  })
}

router.post('/upload', uploadAvatar)

module.exports = router