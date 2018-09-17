var http = require('http');
//require is a javascript function that allows the programmer to import a library or other pages.
//In essence, this library is used to add some functionc to our server.

var server = http.createServer( function(req, res){
    res.end("<html><body><p>Here's my first words through NodeJs</p></body></html>");
});

server.listen(3000); //The server will be using the logic port 3000
//In order to listen to this port just connect into:
// http://localhost:3000