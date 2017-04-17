'use strict';

//node modules
const express = require('express');
const morgan = require('morgan');

//app modules
const forecastRouter = require('./routes/forecast_router');

//module constants
const app = express();
const PORT = process.env.PORT || 3000;

//express middleware
app.use(morgan('dev'));

//express routes
app.use('/api', forecastRouter);

//start server
app.listen(PORT, () => console.log('server is listening on PORT: ' + PORT));
