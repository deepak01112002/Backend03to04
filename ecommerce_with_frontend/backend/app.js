const express = require("express")
const connection = require("./Cofig/db")
const UserRouter = require("./Router/userRouter")


const app = express()
app.use(express.json())

app.use("/user",UserRouter)

app.listen(8080,()=>{
    connection()
    console.log("Server is Running on Port 8080")
})