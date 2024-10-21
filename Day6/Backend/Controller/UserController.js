const UserModel = require("../Model/UserModel")

const register = async(req,res)=>{
    
    let data = await UserModel.create(req.body)
    res.send({msg : "User Registered successfully", data : data})

}

const login = async(req,res)=>{
     const {email,password} = req.body
     let data = UserModel.findOne({email : email})
     if(!data){
        res.send({msg : "Email Not Registered"})
     }
     if(data && data.password != password){
        res.send({msg : "Password Wrong"})
     }
     res.send({msg : "User Login Successfully"})
}

module.exports = {register,login}