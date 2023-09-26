var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('etag');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);


console.log("0.Inside app.js before Customize Router");

// Customize Subroutes file paths
var userCreationRouter = require('./Routes/UserRegistration'); 
var loginRouter = require('./Routes/Login'); 
var projectReportRouter = require('./Routes/ProjectReport')
var getProjectDataRouter = require('./Routes/GetProjectData')
var projectDataById = require('./Routes/ProjectDataById');
var EmpDataRouter = require('./Routes/EmployeeData')

// Middleware to Authenticate User 
const ValidateUser = require('./Middlware/ValidateUser');

// All Customize Router 
app.use('/signup',userCreationRouter);
app.use('/login',loginRouter)
app.use('/projectReport',projectReportRouter)
app.use('/getprojectdata', ValidateUser,getProjectDataRouter)
app.use( '/reportDashboard/',ValidateUser,projectDataById)
app.use('/getEmpData/',ValidateUser,EmpDataRouter)




console.log("1.Inside app.js After Customize ROuter");



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
