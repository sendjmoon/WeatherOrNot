'use strict';

//node modules
const Router = require('express').Router;
const request = require('request');

//app modules

//module constants
const API_KEY = process.env.API_KEY || '473e424b08fc6be3ba7a18e9fce198da';
let forecastRouter = module.exports = exports = new Router();

//module logic
forecastRouter.get('/forecast', function(req, res, next) {
  console.log('GET request to Forecast Router');
  if (!API_KEY) res.send('Please set your process.env.API_KEY');
  request.get({
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=bellevue,US&APPID=' + API_KEY
  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      console.log(data.city);
      console.log(data.list[0]);
      res.send(data.list[0]);
    } else {
      console.log(error);
    }
  });
});
