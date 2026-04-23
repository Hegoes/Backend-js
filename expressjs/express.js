const express = require('express');
const app=express();

app.get('/', function(req,res){  //app.get( route, request handler function)
    res.send('hello world');
})
app.get('/profile', function(req,res){
    res.send('this is the profile');
})
app.listen(4000)
console.log('server is running on port 4000');