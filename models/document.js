'use strict';
const mongoose=require("mongoose");
const documentschema=new mongoose.Schema({
  email:String,
  doc:Buffer,
  contentType:String,
});
const documentmodel=mongoose.model('document',documentschema);
module.exports=documentmodel;