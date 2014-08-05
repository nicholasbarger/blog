var newrelic = require('newrelic');
var http = require('http');
var port = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var hoganExpress = require('hogan-express');
var app = express();

// set newrelic in express
app.locals.newrelic = newrelic;

// database
var monk = require('monk');
var conn = process.env.MONGOHQ_URL || 'localhost:27017/nb';
var db = monk(conn);

// passport authentication
require('./passport.js')(passport, db);

// prerender.io for seo
app.use(require('prerender-node').set('prerenderToken', 'vsJ1HVIrr0Ex1w8TXY3o'));

// make db accessible to our router
app.use(function(req, res, next){
    req.db = db;
    next();
});

// view engine setup
app.set('view engine', 'html');
app.set('layout', '../layouts/default');
app.set('views', __dirname + '/public');
app.enable('view cache');
app.engine('html', hoganExpress);

// middleware
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// initialize routes for api
var api = require('./routes/api.js')(app, passport);

// initialize routes for web
var web = require('./routes/web.js')(app);

// start web server
var server = app.listen(port, function() {
  console.log('Webserver started at http://localhost:%d/', server.address().port);
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}