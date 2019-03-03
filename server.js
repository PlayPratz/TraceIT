// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var http = require("http").Server(app);
var port     = process.env.PORT || 8081;
var mongoose = require('mongoose');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var User = require('./models/user');
var Track = require('./models/track');
var userRoutes   = require('./routes/image');
var io = require('socket.io')(http);

var ip =  "http://192.168.43.229:3000";

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

//uploading payment details of Raw materials from supplier to trader on the blockchain
app.post('/paymentUploadRaw',function(req,res){
    try{
        console.log(req.body);
        var toSend = {
            "$class" :"org.network.tracktrace.paymentRaw",
            "trader" : "resource:org.network.tracktrace.Trader#"+req.body.traderID,
            "amount" : req.body.amount,
            "qty" : req.body.quantity,
            "rawbatchId" : req.body.batchID
        };
        console.log(typeof toSend);
        var options = { 
            method: 'POST',
            url: ip+"/api/paymentRaw/",
            headers:{ 
                'Content-Type': 'application/json' },
            body: toSend,
            json: true };

        Request(options, function (error, response, body) {
            if (error){
                throw new Error(error);
            } 
          
            console.log(body);
        });

        res.sendStatus(200);    
    }
    catch(error){
        // console.log(error);
        res.sendStatus(500);
    }
});

app.post('/packingUploadRaw',function(req,res){
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/paymentUploadTrader',function(req,res){
    try{
        console.log(req.body);
        var toSend = {
            "$class" : "org.network.tracktrace.paymentTrade",
            "trader": "resource:org.network.tracktrace.Factory"+req.body.factoryID, 
            "amount": req.body.amount, 
            "qty": req.body.quantity, 
            "rawbatchId": req.body.batchID
        };
        Request.post(ip+"/api/paymentTrade",(error,success)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(success);
            }
        });
        res.sendStatus(200);
    }
    catch(error){
        res.sendStatus(500);
    }
});

app.post('/paymentUploadDistributor',function(req,res){
    try{
        console.log(req.body);
        var toSend = {
            "$class" : "org.network.tracktrace.paymentTrade",
            "trader": "resource:org.network.tracktrace.Retailer"+req.body.retailerID, 
            "amount": req.body.amount, 
            "qty": req.body.quantity, 
            "rawbatchId": req.body.batchID
        };
        Request.post(ip+"/api/paymentTrade",(error,success)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(success);
            }
        });
        res.sendStatus(200);
    }
    catch(error){
        res.sendStatus(500);
    }
});

app.get('/',(req,res)=>{
    res.sendStatus(200);
});

app.get('/nfc',(req,res)=>{
    console.log(req.query);
    res.sendStatus(200);
});

app.post('/nfc',(req,res)=>{
    console.log(req);
    io.emit('message',{   
            packingid:"123",
            products:[{          
                "name":"Coffee",          
                "id":"234",          
                "batch":"6",          
                "quantity":"25"
            },{          
                name:"Chicory",          
                id:"235",          
                batch:"10",          
                quantity:"30"
            }] 
    }); 
    res.sendStatus(200);
});

app.post('/paymentUploadFactory',function(req,res){
    try{
        console.log(req.body);
        var toSend = {
            "$class" : "org.network.tracktrace.paymentJam",
            "trader": "resource:org.network.tracktrace.Distributor"+req.body.distributorID, 
            "amount": req.body.amount, 
            "qty": req.body.quantity, 
            "rawbatchId": req.body.batchID
        };
        Request.post(ip+"/api/paymentTrade",(error,success)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(success);
            }
        });
        res.sendStatus(200);
    }
    catch(error){
        res.sendStatus(500);
    }
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
  Request.get(ip+"/api/Grower/666",(error,response,body)=>{
      if(error){
          return console.log(error);
      }
  });
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/addRawMaterials',(req,res)=>{
    try{
        console.log(req.body);
        var toSend = {
            "$class" :"org.network.hul.addRaw",
            "material" : req.body.material,
            "qty" : req.body.quantity,
            "owner" : req.body.owner
        };
        console.log(typeof toSend);
        var options = { 
            method: 'POST',
            url: ip+"/api/addRaw/",
            headers:{ 
                'Content-Type': 'application/json' },
            body: toSend,
            json: true };

        Request(options, function (error, response, body) {
            if (error){
                throw new Error(error);
            } 
          
            console.log(body);
        });

        res.sendStatus(200);    
    }
    catch(error){
        // console.log(error);
        res.sendStatus(500);
    }
});

app.post('/addKetchup',(req,res)=>{
    try{
        console.log(req.body);
        var toSend = {
            "$class" :"org.network.hul.addketchup",
            "tomato" : req.body.tID,
            "tomatoqty" : req.body.tqty,
            "sugar" : req.body.sID,
            "sugarqty" : req.body.sqty,
            "qty" : req.body.qty,
            "owner" : req.body.owner
        };
        console.log(typeof toSend);
        var options = { 
            method: 'POST',
            url: ip+"/api/addketchup/",
            headers:{ 
                'Content-Type': 'application/json' },
            body: toSend,
            json: true };

        Request(options, function (error, response, body) {
            if (error){
                throw new Error(error);
            } 
          
            console.log(body);
        });

        res.sendStatus(200);    
    }
    catch(error){
        // console.log(error);
        res.sendStatus(500);
    }
});

app.post('/makeContainer',(req,res)=>{
    try{
        console.log(req.body);
        var toSend = {
            "$class" :"org.network.hul.makeContainer",
            "productId" : req.body.pID,
            "rfid" : req.body.rfid,
            "batchId" : req.body.bID,
            "qty" : req.body.qty,
            "owner" : req.body.owner
        };
        console.log(typeof toSend);
        var options = { 
            method: 'POST',
            url: ip+"/api/makeContainer/",
            headers:{ 
                'Content-Type': 'application/json' },
            body: toSend,
            json: true };

        Request(options, function (error, response, body) {
            if (error){
                throw new Error(error);
            } 
          
            console.log(body);
        });

        res.sendStatus(200);    
    }
    catch(error){
        // console.log(error);
        res.sendStatus(500);
    }
});

app.post('/makePallet',(req,res)=>{
    try{
        console.log(req.body);
        var toSend = {
            "$class" :"org.network.hul.makePallet",
            "rfid" : req.body.rfid,
            "containerId" : req.body.cID,
            "qty" : req.body.qty,
            "owner" : req.body.owner
        };
        console.log(typeof toSend);
        var options = { 
            method: 'POST',
            url: ip+"/api/makePallet/",
            headers:{ 
                'Content-Type': 'application/json' },
            body: toSend,
            json: true };

        Request(options, function (error, response, body) {
            if (error){
                throw new Error(error);
            } 
          
            console.log(body);
        });

        res.sendStatus(200);    
    }
    catch(error){
        // console.log(error);
        res.sendStatus(500);
    }
});



// launch ======================================================================
//creating a server
var server = http.listen(8081, () => {
    console.log("Well done, now I am listening on ", server.address().port)
});
