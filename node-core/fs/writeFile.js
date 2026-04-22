const fs = require('fs'); 

fs.writeFile('./node-core/fs/files/hello.txt', 'kaise ho sab guys', function(err){
    if (err) console.log(err);
    else console.log('file created successfully');
})

//fs.writeFile(file, data[, options], callback) 