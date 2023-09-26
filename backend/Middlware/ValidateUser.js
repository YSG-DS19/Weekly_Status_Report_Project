

const jwt = require('jsonwebtoken')

const jwt_secret_key = process.env.SECRET_KEY


const ValidateUser =  async (req,res,next)=>{

    const token = req.headers.authorization

    console.log("token", token);

   

    await jwt.verify(token,jwt_secret_key,(err,decoded)=>{

        if(err){

            res.status(401).json({message:"Token Not Verified"})

        }

     

        req.body = decoded

        console.log("User Decoded",decoded)

        next()

    })

   

}


module.exports=ValidateUser;
 