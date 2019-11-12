'use strict';
const mongoose=require('mongoose');
function connect(){
    mongoose.connect('mongodb+srv://abhishek:1234@cluster0-uij0p.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true ,
    });
    const connection=mongoose.connection;
    connection.on("error",function(err){
        console.log("server is down",err);
        throw err;
    })
    connection.on('open',function(){
        console.log("successfully connected");
    })
}
module.exports={
    connect: connect,
}