var express=require('express');
var path = require('path');
var http = require('http');
var app=express();
var bodyParser = require('body-parser');
var route=require('./routers/index');


// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', route);
//test  commit

app.set('port',3000);
var server = http.createServer(app);
server.listen(3000);
console.log('server start listen 3000');
