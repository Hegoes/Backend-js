// readFile method is used to read the contents of a file. It takes the path of the file to be read as an argument and a callback function that is called when the operation is complete.

// fs.readFile(path[, options], callback)

const fs=require('fs');

fs.readFile( './node-core/fs/copy/copy.txt', 'utf-8', function(err, data){
    if (err) console.error(err.message);    
    else console.log(data);
})


/* converting buffer data to string data using toString() method 


const fs=require('fs');

fs.readFile( './node-core/fs/copy/copy.txt', function(err, data){
    if (err) console.error(err.message);    
    else console.log(data.toString());
})
*/

    

