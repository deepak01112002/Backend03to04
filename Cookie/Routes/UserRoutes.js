const express = require("express")
const UserModel = require("../Model/UserModel")
const passport = require("passport")
const isAuth = require("../Config/isAuth")

const UserRoute = express.Router()

UserRoute.get("/register",(req,res)=>{
    res.render("Register.ejs")
})


UserRoute.post("/register",async(req,res)=>{
    await UserModel.create(req.body)
    res.send({msg : "User Register successfully"})
})

UserRoute.get("/login",async(req,res)=>{
    // console.log(req.cookies)
    res.render("Login.ejs")
})

UserRoute.post("/login",passport.authenticate('local',{successRedirect : "/user/product", failureRedirect : "/user/login"}),async(req,res)=>{
   
    // let data = await UserModel.findOne({email : req.body.email})
    // console.log(data)
    // if(!data){
    //     res.send({msg : "Register first"})
    //     res.redirect("/user/register")
    // }
    // if(data && data.password != req.body.password){
    //     res.send({msg : "password wrong"})
    // }
    // if(data && data.password == req.body.password){ 
    //   res.cookie("username", data.email,{maxAge : 60000,
    //     httpOnly : true,
    //     path : "/",
    //     sameSite : "None",
    //     secure : false
    //   }).send({msg : "User Login successfully"})
    // }
})


UserRoute.get("/product",isAuth,(req,res)=>{
    console.log(req.user)
    res.render("product.ejs",{name : req.user.username})
})


UserRoute.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            res.send({msg : err})
        }
    })
    res.redirect("/user/login")
})


module.exports = UserRoute