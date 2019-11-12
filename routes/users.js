const express = require('express');
const router = express.Router();
const documentmodel=require("../models/document");
const multer=require("multer");
const fs=require('fs');
const fsextra=require("fs-extra");
const storage=multer.diskStorage({
destination: function(req,file,cb){
  cb(null,'./uploads/');
},
filename: function(req,file,cb){
  cb(null,file.originalname);
}  
});
const upload=multer({storage:storage});
/* GET users listing. */
router.post('/upload/:email',upload.single('file'),function(req, res, next) {
 fs.readFile(req.file.path,function(err,data){
 const document=new documentmodel({
  email:req.params.email,
  doc: data,
  contentType: req.file.mimetype,
 });
 document.save();
});
fsextra.remove(req.file.path);
res.end();
});
router.get('/document/:email',function(req,res,next){
var images=[];
var mimetype=[];
documentmodel.find({email:req.params.email},function(err,data){
for(i=0;i<data.length;i++){
var base64=new Buffer(data[i].doc, 'binary').toString('base64');
//if we store base64 in a predefined variable of some other type then it will convert into buffer form from base64.
images.push(base64);
mimetype.push(data[i].contentType);
}
res.status(200).json({img:images,type:mimetype});
});
});
module.exports = router;