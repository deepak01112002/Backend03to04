const express = require("express")
const connection = require("./Cofig/db")
const UserRouter = require("./Router/userRouter")
const CategoryRouter = require("./Router/category")
const subCategoryRouter = require("./Router/subCategory")


const app = express()
app.use(express.json())

app.use("/user",UserRouter)
app.use("/category",CategoryRouter)
app.use("/subCategory", subCategoryRouter)

app.listen(8080,()=>{
    connection()
    console.log("Server is Running on Port 8080")
})