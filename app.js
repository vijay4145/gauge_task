const express = require('express');
const app = express();
const userRoute = require('./src/Routes/UserRoute');
const homeRoute = require('./src/Routes/HomeRoute');

app.use(express.json());
app.use('/api/users', userRoute)
app.use('/', homeRoute)

module.exports = app;