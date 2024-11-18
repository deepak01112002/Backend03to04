const UserModel = require("../Model/userModel")

const LocalStrategy = require("passport-local").Strategy

const auth =(passport)=>{
    passport.use(new LocalStrategy(
        async(username,password,done) =>{
            let user = await UserModel.findOne({username : username})
            if(!user){
               return done(null,false,{msg : "User not found"})
            }
            if(user.password != password){
               return done(null,false,{msg : "Incorrect Password"})
            }
            return done(null,user)
        } 
    ))
    
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    
    
    passport.deserializeUser(async(id,done)=>{
        let user = await UserModel.findById(id)
        done(null,user)
    })
}

module.exports = auth