var express=require('express');
var app=express();
var session = require('express-session');


var morgan = require('morgan');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var modulo1=require('./server/modulo1');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded:true}));
app.use(session({secret: "secret", saveUninitialized: true, resave: true}));
app.use(express.static('client'));
app.use('/vendor', express.static('client/vendor'));
app.use('/node_modules', express.static('node_modules'));

global.dirClient = __dirname + '/client';

/*app.get('/', function(req,res){
    console.log("Go to home page");
    res.send('Hello');
});
*/

//moduli esterni
modulo1(app);

var server=app.listen('5000',function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example", host, port)
});