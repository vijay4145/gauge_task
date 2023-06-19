const express = require('express');
const app = express();
const userRoute = require('./src/Routes/UserRoute');

app.use(express.json());
app.use('/api/users', userRoute)

module.exports = app;