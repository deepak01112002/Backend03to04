const express = require("express")
const RegisterData = require("../Controller/UserController")
const UserModel = require("../Model/UserModel")

let UserRoute = express.Router()

UserRoute.post("/",RegisterData)

UserRoute.post("/login",async(req,res)=>{
       let {email,password} = req.body
      let data = await UserModel.findOne({email : email})
      if(!data){
        return res.send({msg : "Email Not Registered"})
      }
      if(data && data.password != password){
        return res.send({msg : "Password Wrong"})
     }
      if(data && data.password == password){
         return res.send({msg : "User Login Successfully"})
      }
      
})


module.exports = UserRoute