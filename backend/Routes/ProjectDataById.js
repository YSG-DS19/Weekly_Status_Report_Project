var express = require('express');
var router = express.Router();
//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
var ProjectDataByRouter =require("../Model/Controller/ProjectDataById_Controller")


// router.get("/",(req,res)=>{
//     res.send("HELLO")
// })

//while api calls this the particular action happens in the database eg. here we are inserting records

router.get('/',ProjectDataByRouter.getProjectDataById)


module.exports = router;