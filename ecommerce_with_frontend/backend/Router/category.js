const {Router} = require("express")
const CategoryModel = require("../Model/CategoryModel")

const CategoryRouter = Router()

CategoryRouter.post("/add",async(req,res)=>{
    try {
        let data = await CategoryModel.create(req.body)
        res.send({data})
    } catch (error) {
        res.send({err : error.message})
    }
})


CategoryRouter.get("/getall",async(req,res)=>{
    try {
        let data = await CategoryModel.find()
        res.send({data})
    } catch (error) {
        res.send({err : error.message})
    }
})

module.exports = CategoryRouter