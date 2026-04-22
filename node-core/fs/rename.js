// rename() method is used to rename a file or directory. It can also be used to move a file or directory to a different location.

const fs = require('fs');

fs.rename("./node-core/fs/files/hello.txt", "./node-core/fs/files/hey.txt", function(err){
    if(err) console.error(err);
    else console.log('file renamed succesfully');
})

//fs.rename(oldPath, newPath, callback)
