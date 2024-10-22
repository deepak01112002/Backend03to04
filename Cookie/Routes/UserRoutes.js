const express = require("express")
const UserModel = require("../Model/UserModel")

const UserRoute = express.Router()

UserRoute.get("/register",(req,res)=>{
    res.render("Register.ejs")
})


UserRoute.post("/register",async(req,res)=>{
    await UserModel.create(req.body)
    res.send({msg : "User Register successfully"})
})

UserRoute.get("/login",async(req,res)=>{
    console.log(req.cookies)
    res.render("Login.ejs")
})

UserRoute.post("/login",async(req,res)=>{

    let data = await UserModel.findOne({email : req.body.email})
    console.log(data)
    if(!data){
        res.send({msg : "Register first"})
        res.redirect("/user/register")
    }
    if(data && data.password != req.body.password){
        res.send({msg : "password wrong"})
    }
    if(data && data.password == req.body.password){ 
      res.cookie("username", data.username).send({msg : "User Login successfully"})
    }
})


UserRoute.get("/product",(req,res)=>{
    res.render("product.ejs")
})



module.exports = UserRoute