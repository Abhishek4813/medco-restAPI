const express = require('express');
const router = express.Router();
const usermodel=require("../models/user")
const bcrypt=require("bcryptjs");

/* GET home page. */
router.post('/signup', function(req, res, next) {
  usermodel.findOne({email:req.body.email},function(err,succ){
    if(succ!=null){
      res.status(200).json({user:1});
      return;
    }
  bcrypt.hash(req.body.password,8,function(err,hashedpwd){
  const user=new usermodel({
  fullName: req.body.fullName,
  email: req.body.email,
  contact:req.body.contact,
  password: hashedpwd,
  });
  user.save();
  res.end();
});
});
});
router.post("/login",function(req,res,next){
var email=req.body.email;
var password=req.body.password;
usermodel.findOne({email:email},function(err,user){
  if(err){
    res.status(200).json({server:"err"});
    return;
  }
  if(user==null){
    res.status(200).json({user:0});
    return;
  }
  bcrypt.compare(password,user.password,function(err,succ){
    if(err){
      res.status(200).json({server:"err"});
      return;
    };
    if(!succ){
      res.status(200).json({password:0});
      return;
    };
    req.session.loggedIn=succ;
    if(succ){
      res.status(200).json({email:user.email});
  };
});
});
});
router.get("/dashbord/:email",function(req,res,next){
  var email=req.params.email;
  usermodel.findOne({email:email},function(err,data){
    res.status(200).json(data);
  })
});
module.exports = router;
