'use strict';
const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
  fullName: String,
  email: String,
  contact:String,
  password: String,
});
const usermodel=mongoose.model('user',userschema);
module.exports=usermodel;