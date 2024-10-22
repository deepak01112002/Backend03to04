const express = require("express")
const connect = require("./Config/server")
const UserRoute = require("./Routes/UserRoutes")
const cookie = require("cookie-parser")
require('dotenv').config()
const app = express()
app.use(cookie())
app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))

app.use("/user",UserRoute)


app.listen(process.env.PORT,()=>{
    connect()
    console.log(`Server is running on ${process.env.PORT}`)
})