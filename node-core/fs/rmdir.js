// rmdir method is used to delete an empty directory. It takes the path of the directory to be deleted as an argument and a callback function that is called when the operation is complete.

// fs.rmdir(path[, options], callback) 

const fs=require('fs');

fs.rmdir('./node-core/fs/text', {recursive: true}, function(err){
    if(err) console.error(err.message);
    else console.log('removed successfully');
})
