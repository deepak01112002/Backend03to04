const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
   let token = req.headers.authorization.split(" ")[1]
   if(token){
      const decode = jwt.verify(token,"NodeJS03")
      req.body.userId = decode.userid
      next()
   }else{
      res.send({msg : "User Not Logged In"})
   }
}

module.exports = auth;