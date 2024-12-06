const {Router} = require("express")
const UserModel = require("../Model/userModel")
const jwt = require("jsonwebtoken")
const verify = require("../Middleware/verify")
const ProductModel = require("../Model/productModel")
const UserRouter = Router()
const adminSecret = "deepak"
UserRouter.post("/register",async(req,res)=>{
    
    try {
        const { name,email,password,role,secretKey} = req.body
        if(role == "admin"){
            if(secretKey != adminSecret){
                return res.send({msg : "Admin Authorization Needed !!!"})
            }
        }
        let obj = {
            name,
            email,
            password
        }
        if(role){
            obj.role = role
        }
        let data = new UserModel(obj)
        await data.save()
        res.status(200).json({msg : "User Registered Successfully"})
    } catch (error) {
        res.status(401).json({msg : error.message})
    }
})


UserRouter.post("/login",async(req,res)=>{
    const {email,password,secretKey} = req.body
    try {
        let user = await UserModel.findOne({email : email})
        if(!user) return res.send({msg : "User Not Registered"})
        
        if(user.password != password){
            return res.send({msg : "Password Incorrect"})
        }
        let token = jwt.sign({userId : user._id, userRole : user.role},"deepakpandey")
        res.send({token})
    } catch (error) {
        res.status(401).json({msg : error.message})
    }
})


UserRouter.get("/profile",verify,(req,res)=>{
    if(req.user.userRole == "admin"){
        res.send("admin")
    }else{
        res.send("user")
    }
})


UserRouter.post("/addProduct",async(req,res)=>{
    try {
        let data = await ProductModel.create(req.body)
        res.send({data})
    } catch (error) {
        res.status(401).json({msg : error.message})
    }
})

UserRouter.get("/getProduct",async(req,res)=>{
    try {
        let data = await ProductModel.find().populate("category").populate("subCategory")
        res.send({data})
    } catch (error) {
        res.status(401).json({msg : error.message})
    }
})


module.exports  = UserRouter