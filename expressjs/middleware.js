const express = require('express');
const app=express();

app.use(function(req,res,next){  // app.use() is used to add middleware to the application. Middleware is a function that is executed before the request handler function. It can be used to modify the request and response objects, or to perform some actions before the request handler function is executed. 
    console.log('this is the first middleware');
    next(); // next() is used to call the next middleware function in the stack. If we don't call next(), then the request will be stuck in the first middleware and the request handler function will not be executed.
});

app.use(function(req,res,next){
    console.log('this is the second middleware');
    next();
});

app.get('/', function(req,res){  //app.get( route, request handler function)
    res.send('hello world');
})
app.get('/profile', function(req,res){
    res.send('this is the profile');
})
app.listen(4000);
console.log('server is running on port 4000');