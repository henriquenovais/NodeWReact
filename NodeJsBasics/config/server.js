/*
Well, since the application can be completely separated into modules, there is no better way to define
the basic parameters of the server if not by using a module for such task.
*/
//Now, this code is a NodeJs "HelloWorld" using the Express framework
//To install express in a new project it is very important to do so through: npm install express -save.
var express = require("express"); //The express variable stores a function.
var app = express(); //calling the function stored in the express variable.
//var http = require('http'); is the equivallent of these declarations above in pure NodeJs


app.set("view engine", "ejs"); //Setting EJS as the default view engine of the project
module.exports = app;
