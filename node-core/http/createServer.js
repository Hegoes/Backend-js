// createServer() method is used to create a server that listens for incoming requests and sends responses back to the client. It takes a callback function as an argument that is called when a request is received. The callback function takes two arguments, the request object and the response object.

const http=require('http');
const server=http.createServer(function(req, res){  // the const server is used to create a server object. it is used as the http.createServer() has created a server object 
    res.end('hello world');
})
server.listen(3000); 


// ctrl + c is used to stop the server from running in the terminal.

