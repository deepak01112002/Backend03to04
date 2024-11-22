const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel = require("../Model/userModel")


const UserRoute =  express.Router()

UserRoute.post("/register",async(req,res)=>{
    try {
        let {username,email,password} = req.body
        bcrypt.hash(password,5,async(err,hash) =>{
            await UserModel.create({
                username,
                email,
                password : hash
            })
        })
        res.send({msg : "User registered Successfully"})
    } catch (error) {
        res.send({err : error})
    }
})


UserRoute.post("/login",async (req,res)=>{
    try {
        const {email,password} = req.body
        const data = await UserModel.findOne({email : email})
        if(data){
          bcrypt.compare(password,data.password,(err,result)=>{
             if(result){
                const token = jwt.sign({userid : data._id}, "NodeJS03")
                console.log(token)
                res.send({"msg" : "Login successfull" ,token : token})
             }else{
                res.send({msg : "Wrong Credential"})
             }
          })
          
        }else{
            res.send({"msg" : "user Not registered"})
        }
    } catch (error) {
        res.send({err : error})
    }
})


module.exports = UserRoute