var mongoose = require('mongoose');

//MongoDB schema for live tracking product location, temperature and humidity
module.exports = mongoose.model("Track",{
    batch_id : String,
    location :[{
        lat : String,
        lon : String
    }],
    temperature : [{ 
        type : String}],
    humidity : [{
        type : String}],
    timestamp: [{
        type : String}]
});