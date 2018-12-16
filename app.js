const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const expressSession = require('express-session');
const userRouter = require('./routes/userRoute');
const db = require('./db/db');
const server = express();
const User = require('./models/userModel/userModel');
let port = process.env.PORT || 6249;

const http = require('http').Server(server);



server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

passport.serializeUser(function(user,next){
    next(null,user._id.toHexString())
});

passport.deserializeUser(function(userID,next){
    User.findOne({_id:userID},function(err,user){
        next(null,user);
    });
});


server.use(cookieParser());
server.use(expressSession({secret:'myFlx'}));
server.use(passport.initialize());
server.use(passport.session());


server.use('/',userRouter);

server.use(express.static('./'));
server.use(express.static('./client/build/'));




http.listen(port);