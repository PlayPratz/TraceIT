// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8081;
var mongoose = require('mongoose');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var User = require('./models/user');
var Track = require('./models/track');
var userRoutes   = require('./routes/image');

var Request = require("request");

var cors= require('cors');
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));

var conString = "mongodb://127.0.0.1:27017/TraceIt";
mongoose.Promise=Promise;

//Connecting to the database
mongoose.connect(conString,(err) => {
    console.log("Database connection", err);
});

 //login
 app.post('/login', function(req,res){
    // Request.get()
    var query = User.where({id:req.body.id});
    query.findOne((err,user)=>{
        if(err){
            return err;
        }
        else if(!user){
            res.sendStatus(401);
        }
        else{
            if(req.body.password==user.password){
                res.send(user.stakeholder);
            }
            else{
                res.sendStatus(500);
            }
        }
    });
});


// //logging arduino data
app.post('/livetracking',function(req,res){
    var locationD = {
        lat : req.body.lat,
        lon : req.body.lon
    };
    Track.update({batch_id:req.body.batch_id},{
        $push : {
            location : locationD,
            temperature : req.body.temp,
            humidity : req.body.humidity,
            timestamp : req.body.timestamp
        }
    },function(error,success){
        if(error){
            console.log(error);
        }
        else{
            console.log(success)
        }
    });
});

// routes ======================================================================
app.use('/image', userRoutes);

app.get('/test', (req,res)=>{
    var description = {};
    Request.get("http://192.168.43.229:3000/api/Grower/10",(error,response,body)=>{
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

app.get('/test2', (req,res) =>{
  Request.get("http://192.168.43.229:3000/api/Grower/666",(error,response,body)=>{
      if(error){
          return console.log(error);
      }
  });
})

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
