'use strict';

//node modules
const router = require('express').Router();
const request = require('superagent');

//app modules

//module constants
const API_KEY = process.env.API_KEY || '473e424b08fc6be3ba7a18e9fce198da';

//module logic
router.get('/forecast', function(req, res) {
  request.get('http://api.openweathermap.org/data/2.5/forecast')
    .query('q=puyallup,US&APPID=' + API_KEY)
    .then((data) => {
      data = JSON.parse(data.text);
      let forecastArray = data.list;
      res.json(forecastArray);
    });
});

module.exports = router;
