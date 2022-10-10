const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
 console.log("process.env.mongoURI", process.env.mongoURI)

mongoose.connect(process.env.mongoURI,
    { useNewUrlParser: true ,useUnifiedTopology: true},
    ()=>console.log('Connection With MongoDB established'));

app.get('/', (req, res) => {
    res.send("hello world")
})
app.listen(9090, () => console.log('server running'))

var appv2 = require('./app.v1');



//CORS setup
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "*");
//     next();
// });

// //bodyparser
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
// //app.use(cookieParser());
// //app.use(express.static(path.join(__dirname, 'public')));

// //V2
app.use('/v1', appv2);

//V3 - WHEN DEVELOPED







module.exports = app;
