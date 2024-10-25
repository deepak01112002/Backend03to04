const express = require("express")
const connect = require("./Config/server")
const UserRoute = require("./Routes/UserRoutes")
const cookie = require("cookie-parser")
const UserModel = require("./Model/UserModel")
const passport = require("passport")
const LocalStrategy  = require("passport-local").Strategy
const session  = require("express-session")


require('dotenv').config()
const app = express()
// app.use(cors({
    //   origin : "http://localhost:5173",
    //    credentials : true
// }))
app.use(cookie())
app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret : "deepak"
}))
app.use(passport.initialize())
app.use(passport.session())


passport.use(new LocalStrategy(
    async(username,password,done)=>{
        let user = await UserModel.findOne({username : username})
        if(!user){
           return done(null,false,{message : "Register First"})
        }
        if(user.password != password){
           return done(null,false,{message : "Password Wrong"})
        }
        return done(null,user)

   }
))


passport.serializeUser((user,done)=>{
    done(null,user.id)
})



passport.deserializeUser(async(id,done)=>{
    const data = await UserModel.findById(id);
    done(null,data)
})


app.use("/user",UserRoute)


app.listen(process.env.PORT,()=>{
    connect()
    console.log(`Server is running on ${process.env.PORT}`)
})