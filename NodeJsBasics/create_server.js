var http = require('http');
//require is a javascript function that allows the programmer to import a library or other pages.
//In essence, this library is used to add some functionc to our server.

var server = http.createServer( function(req, res){
//req = request
//res = response
    var category = req.url;

    if(category == '/politics'){
        res.end("<html><body><p>Here you can find news about POLITICS </p></body></html>");
    }else if(category == '/economy'){
        res.end("<html><body><p>Here you can find news about ECONOMY </p></body></html>")
    }
    res.end("<html><body><p>Here's my first words through NodeJs</p></body></html>");
});



server.listen(3000);
console.log("Now, the server is listening to the port 3000 boya! CAN'T YOU HEAR THE DATA?! ");
 //The server will be using the logic port 3000
//In order to listen to this port just connect into:
// http://localhost:3000

/*
This is the very basic usage of NodeJs.
Thankfully, NodeJs is an open source javascript run-time enviroment which makes possible the creation of new tools
that provide an even easier time with it.
There are four main tools which will be used in the next codes in order to accelerate the development 
of web applications:
Express -> A web framework that uses NodeJs.
NPM -> A NodeJs package manager 
Nodemon -> ??
EJS -> It is a template engine that allows the programmer to use javascript to create an interface
*/