var express = require('express');
var fs = require('fs')
var router = express.Router();
// 文件上传中间件
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index');
});


router.post('/imgurl', upload.single('img'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  console.log(req.file)
  // console.log(req.body)

  for (let [key, val] of Object.entries(req.body)) {
    console.log(key)
    console.log(val)
  }

  // 旧文件地址
  let imgOld = req.file.destination + "/" + req.file.filename
  // 新文件地址
  let imgNew = req.file.destination + "/" + req.file.filename + req.file.originalname

  fs.rename(imgOld, imgNew, (err) => {
    if (err) {
      res.json({
        success: false,
        data: '上传失败'
      })
    } else {
      res.json({
        success: true,
        data: imgNew
      })
    }
  })
});

// 下载文件
router.get('/download', function (req, res, next) {
  console.log(2)
  res.download('uploads/0410ee187b8ec95120d573818710c07aIMG_0922.JPG')
});

module.exports = router;

// 老名称


// 新名称

// {
//   fieldname: 'img',
//   originalname: 'IMG_0900.JPG',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'uploads/',
//   filename: '90501e7d615aca8b1bd9c75429949201',
//   path: 'uploads\\90501e7d615aca8b1bd9c75429949201',
//   size: 7685185
// }