// copyFile() method is used to copy a file from one location to another. It takes two arguments, the source file and the destination file.

const fs=require('fs');

fs.copyFile('./node-core/fs/files/hey.txt', './node-core/fs/copy/copy.txt', function(err){
    if(err) console.error(err.message); // err.message is used to get the error message from the error object
    else console.log('file copied successfully');
});
//fs.copyFile(src, dest[, mode], callback)