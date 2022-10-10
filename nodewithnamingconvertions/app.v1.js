//const passport = require("passport");
//const passportJWT = require("passport-jwt");
//const JwtStrategy = require('passport-jwt').Strategy;
//const ExtractJwt = require('passport-jwt').ExtractJwt
const express = require('express');

var app = express();

//controllers
// var testController = require('./app/v2/controllers/test.controller.js');
 var albumController = require('./app/v2/controllers/album.controller.js');

//routers
console.log("enter into alibumrouter")
var albumRouter = require('./app/v2/routes/album.routes.js');


// //defining the JWT strategy
// const passportStrategy = new JwtStrategy({
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'SECRET'
// }, function (jwt_payload, next) {
//     userController.findUser({ username: jwt_payload.username }).then(user => {
//         next(null, user);
//     }).catch((error) => {
//         next(null, false);
//     });
// });

//init passport strategy
//passport.use(passportStrategy);

// //handle browser options Request
// function handleOptionsReq(req, res, next){
//     if(req.method === 'OPTIONS'){res.send(200)}
//     else{next()}
// }

//test routes


// app.get('/test', testController.test);
// app.get('/test/ping', testController.pingTest);

//unsecured application routes
console.log("entered into api's")
app.post('/insertdata', albumController.insertAlbum);
app.get('/getdata', albumController.getAlbum);
app.patch('/updatedata',albumController.updateAlbum);
app.delete('/deletedata',albumController.removeAlbum);
//secured routes - auth using user JWT
//app.use('/api', handleOptionsReq, passport.authenticate('jwt', { session: false }));

app.use('/api/album', albumRouter);

//auth using ref and secret
// app.use('/api-ext', handleOptionsReq, passport.authenticate('jwt', { session: false }));
//--


module.exports = app;