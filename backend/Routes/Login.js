var express = require('express');
var router = express.Router();

var logindetails=require('../Model/Controller/Login_Controller')
// var peopledata=require("../model/entities");


router.post("/",logindetails.logindetailscheck);

module.exports = router;