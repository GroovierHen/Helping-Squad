const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    profession:String,
    latitude:String,
    longitude:String
});

module.exports = mongoose.model('User',userSchema);