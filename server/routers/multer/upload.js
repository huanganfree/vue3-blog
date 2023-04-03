// 引入配置好的 multerConfig
const express = require('express')
const router = express.Router()
const multerConfig = require('./multerConfig')
const { port } = require('../../utils/commonData')
// 上传到服务器地址
const BaseURL = 'http://localhost:' + port
// 上传到服务器的目录
const imgPath = '/public/'

// 封装上传图片的接口
function uploadAvatar(req, res) {
  multerConfig.single('file')(req, res, function (err) {
    if (err) {
      // 传递的图片格式错误或者超出文件限制大小，就会reject出去
      res.json({
        code: 111000,
        message: err.message
      })
    } else {
      // 拼接成完整的服务器静态资源图片路径
      res.json({
        code: 200,
        data: BaseURL + imgPath + req.file.filename,
        message: '上传成功'
      })
    }
  })
}

router.post('/upload', uploadAvatar)

module.exports = router