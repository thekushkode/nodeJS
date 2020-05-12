const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];

const readDir = fs.readdir(dirName, function(err, list) {
    list.forEach(item => {
        const extName = process.argv[3];
        const ext = (path.extname(item));
        if (ext.slice(1) === extName) {
            console.log(item);
        };
    })
});

