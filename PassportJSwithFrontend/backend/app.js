const express = require("express")
const connect = require("./Config/server")
const UserRoute = require("./Routes/UserRoutes")
const cors = require("cors")
const passport = require("passport")
const LocalStrategy  = require("passport-local").Strategy
const session = require("express-session")
const UserModel = require("./Model/userModel")
const auth = require("./Middleware/passportAuth")
const app = express()
app.use(cors())
app.use(express.json())

app.use(session({
    secret : "LaLaLaLa"
}))
app.use(passport.initialize())
app.use(passport.session())
auth(passport)





app.use("/",UserRoute)

app.listen(8080,()=>{
    connect()
    console.log("Backend Running on port 8080")
})