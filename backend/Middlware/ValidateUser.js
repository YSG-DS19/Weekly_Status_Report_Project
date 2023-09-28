

const jwt = require('jsonwebtoken')

const jwt_secret_key = process.env.SECRET_KEY


const ValidateUser =  async (req,res,next)=>{

    const token = req.headers.authorization;
    const data = req.body;

    console.log("Data in Middleware>>>>>>>>>", data);

    console.log("token in the MiddleWare ValidateUser>>>>>>>>>", token);

   

    await jwt.verify(token,jwt_secret_key,(err,decoded)=>{

        if(err){

            console.log("Error>>>>>", err);

            res.status(401).json({message:"Token Not Verified"})

        }

        else{

        req.body = {decoded,data}

        console.log("User Decoded",decoded)

        next() }

    })

   

}


module.exports=ValidateUser;
 