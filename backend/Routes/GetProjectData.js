var express = require('express');
var router = express.Router();

// const ValidateUser = require('../Middlware/ValidateUser');
//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
var GetProjectDataRouter =require("../Model/Controller/GetProjectData_Controller")


// router.get("/",(req,res)=>{
//     res.send("HELLO")
// })

//while api calls this the particular action happens in the database eg. here we are inserting records

router.get('/',GetProjectDataRouter.getProjectData)


module.exports = router;