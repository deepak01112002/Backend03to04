const UserModel = require("../Model/userModel")

  const RegisterUser = async (req,res)=>{  
    const {username,email,password} = req.body
    let user = await UserModel.findOne({email : email})
    if(user){
       res.send({msg : "User Already Registered"})
    }else{
       await UserModel.create({
            username : username,
            email : email,
            password : password
       })
       res.send({msg : "User Created Successfully"})
    }

  }

  const LoginUser = (req,res)=>{
     res.send({msg : "User Login Successfully"})
  }


  module.exports = {
    RegisterUser,
    LoginUser
  }