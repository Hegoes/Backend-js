const http=require('http');
const fs=require('fs');

const myServer=http.createServer((req,res) => {
    const log=`${Date.now()}: request was received from ${req.url} \n` // log variable is used to store the log message that we want to write to the log file. it is a string that contains the current date and time and the url of the request that was received.;
    fs.appendFile('log.txt', log, (err,data)=>
        {
            if(err) console.log(err.message);
        });
       
        // response shouldnot depend on file writing. so we are sending the response before writing to the file. if we send the response after writing to the file, then the response will be delayed until the file is written. and if there is an error while writing to the file, then the response will not be sent at all.
        switch(req.url){
            case '/': res.end('hello from server');
            break;
            case '/about': res.end(' hey! this is sumongal');
            break;
            default: res.end('404 not found');

        }
});

myServer.listen(8000, () => console.log('my server is running on port 8000'));