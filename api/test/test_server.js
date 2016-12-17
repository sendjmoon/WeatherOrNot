'use strict';

const express = require('express');
const morgan = require('morgan');

const forecastRouter = require('../routes/forecast_router');

const app = express();

app.use(morgan('dev'));

app.use('/api', forecastRouter);

module.exports = app;
