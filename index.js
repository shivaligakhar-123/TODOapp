const express = require ('express');
const app = express();
// port is intialised
const port = 8000;


// links database to the server
const db = require('./config/mongoose');

// setting up views
app.set('view engine','ejs');
app.set('views','./views');
// parser is added here
app.use(express.urlencoded());
// connecting to assets
app.use(express.static('assets'));
// setting up my routes
app.use('/', require('./routes/index'));


// setting up the server
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
    }

    console.log(`Yup my server is running : ${port}`);


})