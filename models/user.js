var mongoose = require('mongoose');
//MongoDB schema for users
module.exports = mongoose.model("User",{
  id : String,
  password : {
    type : String,
    required : true
    },
    stakeholder : String
});