const app = require('./app');
require('dotenv').config();

const port = 8000;
app.listen(process.env.port || port, ()=>{
    console.log("app listening");
})
