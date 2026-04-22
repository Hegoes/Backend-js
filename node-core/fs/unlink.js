// unlink method is used to delete a file. It takes the path of the file to be deleted as an argument and a callback function that is called when the operation is complete.

const fs=require('fs');

fs.unlink('./node-core/fs/files/chacha.txt', function(err){
    if(err) console.error(err);
    else console.log('file removed successfully');
})

//fs.unlink(path, callback)