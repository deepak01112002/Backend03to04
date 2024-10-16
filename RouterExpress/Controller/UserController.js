const UserModel = require("../Model/UserModel")

const RegisterData = async(req,res)=>{
    try {
        let a = await UserModel.create(req.body)
        res.send({msg : "User created successfully", data : a})
    } catch (error) {
        res.send({msg : error})
    } 
}


module.exports = RegisterData