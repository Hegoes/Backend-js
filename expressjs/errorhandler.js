const express = require('express');
const app = express();

app.get('/', function (req, res) {  //app.get( route, request handler function)
    res.send('hello world');
});  

app.get('/profile', function (req, res, next) {
    return next(new Error('something went wrong'));  // next() is used to call the next middleware function in the stack. If we don't call next(), then the request will be stuck in the first middleware and the request handler function will not be executed. In this case, we are using next() to throw an error in the request handler function. The error will be caught by the error handling middleware and a response will be sent back to the client.

});

app.use (function(err,req,res,next) {
    console.error(err.stack)
    res.status(500).send('something broke!');
});

app.listen(4000);
console.log('server is running on port 4000');