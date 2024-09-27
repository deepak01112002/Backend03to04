const express = require("express")

const check = (req,res,next)=>{
  let isLogin = false;
  if(isLogin == true){
     next()
  }
     res.send("User not Logged IN")
  
}

module.exports = check