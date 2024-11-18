const express = require("express")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
const UserModel = require("../Models/userModel")


const UserRoute =  express.Router()
let otpStore = {} // rwvn1 : 123456

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
        console.log(data)
        if(data){
          bcrypt.compare(password,data.password,(err,result)=>{
             if(result){
                res.send({"msg" : "Login successfull"})
             }else{
                
             }
          })
          
        }else{
            res.send({"msg" : "user Not registered"})
        }
    } catch (error) {
        res.send({err : error})
    }
})

UserRoute.post("/change-password",async(req,res)=>{
      const {email,currentpassword, newPassword} = req.body
      let user = await UserModel.findOne({email : email})
      if(user){
         bcrypt.compare(currentpassword,user.password,(err,result)=>{
            if(result){
              bcrypt.hash(newPassword,10,async (err,hash)=>{
                //  let obj = {
                //     ...user,
                //     password : hash
                //  }
                //  await UserModel.findAndUpdate({email: user.email},obj)
                user.password = hash
                await user.save()
                res.send({msg : "Password Update Successfully"})
              })
            }else{
                res.send({msg : "Old Is Wrong !!"})
            }
         })
      }else{
         res.send({msg : "User Not Found !!!"})
      }
})

UserRoute.post("/forgotPassword",async(req,res)=>{
      const {email} = req.body;
      const user = await UserModel.findOne({email})
      console.log(user)
      if(user){
         let otp = Math.floor(100000+Math.random()*900000).toString()
         otpStore[email] = otp
         console.log(otpStore[email])
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : "deepallavi7@gmail.com",
                pass : "cctl mezb vzrn jprg"
            }
        })
        let mailOption = {
             from : "deepallavi7@gmail.com",
             to : email,
             subject : "Password Reset OTP",
             text : `Your OTP for Password reset is : ${otp}`
        }
        transporter.sendMail(mailOption,(error,info)=>{
           if(error){
              return res.send({msg : "Failed to generate OTP"})
           }
           res.send({msg : "OTP Generated Successfully"})
        })
      }
})

UserRoute.post("/resetPassword",async(req,res)=>{
    const {email,otp,newPassword} = req.body
    if(otpStore[email] === otp){
        bcrypt.hash(newPassword,5,async(err,hash)=>{
            await UserModel.updateOne({email},{password : hash})
            return res.send({msg : "Password Updated Successfully"})
        })
    }else{
        res.send({msg : "OTP not match"})
    }
})





module.exports = UserRoute