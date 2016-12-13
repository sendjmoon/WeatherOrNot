'use strict';

//node modules
const Router = require('express').Router;

//app modules

//module constants
let forecastRouter = module.exports = exports = new Router();

//module logic
forecastRouter.get('/forecast', function(req, res, next) {
  console.log('GET request to Forecast Router');
  res.send('GET request received from Forecast Router');
});
