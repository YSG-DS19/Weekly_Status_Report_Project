var express = require('express');
var router = express.Router();
//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
var UserRegistrationLogic =require("../Model/Controller/UserRegistration_Controller")

console.log("2.IN UserRegistration.js Routes file");

// router.get("/",(req,res)=>{
//     res.send("HELLO")
// })

//while api calls this the particular action happens in the database eg. here we are inserting records
router.post('/',UserRegistrationLogic.create_user);


module.exports = router;