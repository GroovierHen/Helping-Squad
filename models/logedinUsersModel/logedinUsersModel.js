const mongoose = require('mongoose');

var userLoggedinSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('loggedin',userLoggedinSchema);