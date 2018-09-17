const http = require('http');  //require is a javascript function that allows the programmer to import a library or other pages.
//In essence, this library is used to add some functionc to our server.

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World test \n');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});