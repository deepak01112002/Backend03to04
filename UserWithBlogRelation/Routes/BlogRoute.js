const express = require("express")
const auth = require("../Middleware/auth")
const BlogModel = require("../Model/blogModel")

const BlogRoute = express.Router()


BlogRoute.get("/",auth,async(req,res)=>{
    let Blogs = await BlogModel.find().populate('userID','username email')
   res.send({blogs : Blogs})
})

BlogRoute.post("/add",auth,async(req,res)=>{
    let {title,image,description,userId} = req.body
    console.log(userId)
    let obj = {
        title ,
        image ,
        description,
        userID : userId
    }
    let data = await BlogModel.create(obj)
    res.status(200).send({msg : "Blog added Succesfully", blog : data})
})
BlogRoute.get("/:id",auth,async(req,res)=>{
    try {
        let data = await BlogModel.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(401).json(error)
    }
})

BlogRoute.get("/getMine",auth,async(req,res)=>{
    let Blogs = await BlogModel.find({userID : req.body.userId}).populate('userID','username email')
   res.send({blogs : Blogs})
})


module.exports = BlogRoute