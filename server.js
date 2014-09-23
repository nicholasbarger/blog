var newrelic = require('newrelic');
var http = require('http');
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('static-favicon');
var logger = require('morgan');
var express = require('express');
var passport = require('passport');
var path = require('path');
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

//// prerender.io for seo
//app.use(require('prerender-node').set('prerenderToken', 'vsJ1HVIrr0Ex1w8TXY3o'));

// make db accessible to our router
app.use(function(req, res, next){
    req.db = db;
    next();
});

// view engine setup
app.set('view engine', 'html');
app.set('layout', '../layouts/default');
app.set('views', path.join(__dirname, 'views'));
app.enable('view cache');
app.engine('html', hoganExpress);

// middleware
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// initialize routes for api
var api = require('./routes/api.js')(app, passport);

// initialize routes for web
var web = require('./routes/web.js')(app);

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('not-found', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// start web server
var server = app.listen(port, function() {
  console.log('Webserver started at http://localhost:%d/', server.address().port);
});