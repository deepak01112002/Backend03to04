const express = require("express");
const connect = require("./Config/server");
const cors = require("cors")
const UserRoute = require("./Routes/UserRoute");
const BlogRoute = require("./Routes/BlogRoute");


const app = express();
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use("/user",UserRoute)
app.use("/blog",BlogRoute)

app.listen(8080,()=>{
    connect()
    console.log("Server is Connected on port 8080")
})