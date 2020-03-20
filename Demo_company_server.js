var express       = require('express');
var XLSX          = require('xlsx');
var XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest;
var bodyParser    = require('body-parser');
var http          = require('http');
var fs            = require('fs');
var path          = require('path');                                  
var cookies       = require("cookies")
var cookieParser  = require('cookie-parser');
var https         = require('https');


// Init app
var app = express();

// Set Port
app.set('port', (process.env.PORT || 3000));

// Middleware
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));                                        
app.use(cookieParser());

// Routes
var company   = require('./routes/company.js');
var auth      = require('./routes/auth.js')
app.use('/company'  , company);
app.use('/auth'     , auth	 );

app.listen(app.get('port'), function(){
	console.log('Company server started on port '+ app.get('port'));
});