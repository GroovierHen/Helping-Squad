const express = require('express');
const router = express.Router();
const passport = require('../authentication/authentication');
const signupController = require('../controllers/signupController/signupController');
const User = require('../models/userModel/userModel');
const LoggedinUser = require('../models/logedinUsersModel/logedinUsersModel');

router.post('/login_user',passport.authenticate('local'),function(req,res){
    // if(req.user.category === 'employee'){
    //     var loggedinUser = new LoggedinUser();
    //     loggedinUser.user = req.user._id;
    //     loggedinUser.latitude = req.body.latitude;
    //     loggedinUser.longitude = req.body.longitude;
    //     loggedinUser.save();
    // }
        res.json(req.user||err);
});

router.get('/is_authenticated',function(req,res){
    if(req.user){
        res.json(req.user)
    }
})
router.get('/logout_user',function(req,res){
    if(req.user){
        req.logOut();
        res.json(true)
    }
    else{
        res.json(true)
    }
})


router.post('/signup_user',function(req,res){
    User.findOne({email:req.body.email},function(err,data){
        if(data){
            res.json({dataFound:true});
        }
        else{
            signupController.signupController(req.body,function(err,data){
                res.json(err || data);
            });
        }
    })
    
});

router.get('/get_users',function(req,res){
    User.find({category:'employee',profession:req.query.jobType},function(err,data){
        res.json(err||data);
    });
});





router.get('/is_authenticated',function(req,res){
    res.json(req.user || {});
});


module.exports = router;