var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let session = require('express-session');
let secret = require('./secret.json')

var indexRouter = require('./routes/index');

const cors =require('cors');
var app = express();



// view engine setup
// app.set('views', path.join(__dirname, 'alertingjsng_v1')); //views
// app.set('view engine','ejs');//jade
// app.set('view engine', 'html');

app.use(express.static('alertingjsng_v1')); 

// app.use('/main', express.static('alertingjsng_v1')); 

// app.use('/',function(req,res,next){
//   if(req.session.auth)
//   {
//       res.redirect('/main');
//   }
//   next();
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(err, req, res, next) {
  // render the error page 
  console.log("=============== error =================");
  res.status(err.status || 500);
  res.send({ 'error': 'no route found!' });
 });

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session(
{
    secret: secret.sessionsecret,
    resave: true,
    saveUninitialized: true
}));

app.use('/',indexRouter);

// app.get('*', (req, res) => {

//   res.sendFile(path.join(__dirname, 'alertingjsng_v1/index.html'));
// });

//console.log("the secret is...... .. "+secret.sessionsecret);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   // res.locals.message = err.message;
//   // res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
