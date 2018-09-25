/*
Well, since the application can be completely separated into modules, there is no better way to define
the basic parameters of the server if not by using a module for such task.
*/
//Now, this code is a NodeJs "HelloWorld" using the Express framework
//To install express in a new project it is very important to do so through: npm install express -save.
var express = require("express"); //The express variable stores a function.
var app = express(); //calling the function stored in the express variable.
//var http = require('http'); is the equivallent of these declarations above in pure NodeJs
var bodyParser = require('body-parser');
var expressValidator = require("express-validator");


var consign = require("consign");


app.set("view engine", "ejs"); //Setting EJS as the default view engine of the project
app.set("views","./app/views");//Letting express know the place in which the views are stored.

/*This file will be executed by the arquive app.js and through its location.
In other words:
./../app/views = WRONG! Server.js will be executed through app.js!
./app/views = Correct :D
*/ 

app.use(bodyParser.urlencoded({extended: true})); 
app.use(expressValidator());
/* Body-parser is a middleware so its integration has 
to be done before the inclusion of routes and models.*/

consign().include('/app/routes').then('config/dbConnection.js').then('app/models').into(app);


module.exports = app;
