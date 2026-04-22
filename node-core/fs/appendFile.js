// appendFile() method is used to append data to a file. If the file does not exist, it will be created.

const fs = require('fs');
fs.appendFile('./node-core/fs/files/hello.txt', ', mai toh thik hoon', function(err){
    if(err) console.error(err)
        else console.log('data appended successfully');

})

//fs.appendFile(path, data[, options], callback)