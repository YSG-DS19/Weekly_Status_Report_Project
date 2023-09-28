var express = require('express');
var router = express.Router();
//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
var ProjectReport =require("../Model/Controller/Project_Report_Controller")


// router.get("/",(req,res)=>{
//     res.send("HELLO")
// })

//while api calls this the particular action happens in the database eg. here we are inserting records
router.post('/',ProjectReport.Store_project_report_data);



module.exports = router;