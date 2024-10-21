const express = require("express")
const connect = require("./config/server")
const cors = require("cors")
const UserRouter = require("./Routes/UserRoutes")

const app = express()
app.use(cors())
app.use(express.json())



app.use("/user",UserRouter)


app.listen(8080,()=>{
    connect()
    console.log("server is started on 8080")
})


