const express = require("express")
const { RegisterUser, LoginUser } = require("../Controller/UserController")
const passport = require("passport")


const UserRoute = express.Router()


UserRoute.post("/register",RegisterUser)

UserRoute.post("/login",passport.authenticate('local'),LoginUser)



module.exports = UserRoute