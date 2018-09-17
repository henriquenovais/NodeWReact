//Now, this code is a NodeJs "HelloWorld" using the Express framework
//To install express in a new project it is very important to do so through: npm install express -save.
var express = require('express'); //The express variable stores a function.
var app = express(); //calling the function stored in the express variable.
//var http = require('http'); is the equivallent of these declarations above in pure NodeJs

app.get('/', function(req, res) {
   res.send("<html><body><p>HELLOW WORLD BOYZ</p></body></html>"); 
});


app.get('/politics', function(req, res) {
    res.send("<html><body><p> THIS IS NEWS ABOUT POLITICS! SHOUT!</p></body></html>"); 
 });

app.listen(3000 , function(){

    /*A commonly used name for fuctions that call other functions is "callback function". It is important
     to note that such name is imprecise, a more accurate name would be "call after function".
    A callback function is a function that is sucessfully called will call another function.*/ 

    console.log("The server is now executing through the Express Framework \n CHEERS BOYZ \n A SMALL STEP FOR MEN, A BIG STEP TOWARDS EMPLOYMENT!");

});