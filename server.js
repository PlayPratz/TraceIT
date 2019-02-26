// const express = require('express')
// const app = express()

// let runPy = new Promise(function(success, nosuccess) {

//     const { spawn } = require('child_process');
//     const pyprog = spawn('python', ['./ocr/ocr.py -i '+/path/to/image+'-p threshold']);

//     pyprog.stdout.on('data', function(data) {

//         success(data);
//     });

//     pyprog.stderr.on('data', (data) => {

//         nosuccess(data);
//     });
// });

// app.get('/', (req, res) => {

//     res.write('welcome\n');

//     runPy.then(function(fromRunpy) {
//         console.log(fromRunpy.toString());
//         res.end(fromRunpy);
//     });
// })


// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var userRoutes   = require('./routes/user');

var Request = require("request");

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));


// routes ======================================================================
app.use('/user', userRoutes);

app.get('/test', (req,res)=>{
    console.log('entered')
    var description = {};
    Request.get("http://192.168.43.229:3000/api/Grower/666",(error,response,body)=>{
        if(error){
            return console.log(error);
        }
    mybody = JSON.parse(body);
    var grower = {};
    grower["name"] = mybody.organization;
    grower["address1"] = mybody.address.street;
    grower["address2"] = mybody.address.city + ", " + mybody.address.zip;
    grower["address3"] = mybody.address.country;
    description["rawMaterialSupplier"]=grower;

    console.log(description);
   res.send(description);
    });
    /*
    Request.get("http://192.168.43.229:3000/api/Grower/10",(error,response,body)=>{
        if(error){
            return console.dir(error);
        }
    }); 
    */
   
});

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);