// entry point for server javascript

//creating an app
const express = require('express');
const app = express();

const path = require('path');

//logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

//static middleware = getting all the static assets (css, images ) THAT ARE IN PUBLIC
app.use(express.static(path.join(__dirname, '../public')));

//parsing middleware = allows you to use req.body by parsing the request body info
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //connecting to api routes
// app.use('/api', require('./api')); // matches all requests to /api

//send index HTML for any requests that dont match one of our routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//handle 500 error
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
