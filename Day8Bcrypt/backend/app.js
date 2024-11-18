const express = require("express");
const connect = require("./Config/db");
const UserRoute = require("./Routes/UserRoute");

const app = express();

app.use(express.json())

app.use("/user",UserRoute)
app.get("/",(req,res)=>{
    res.send("hello")
})


app.listen(8080,()=>{
    connect()
    console.log("Connected!!!")
})



