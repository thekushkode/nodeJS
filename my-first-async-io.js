const fs = require('fs');
const filePath = process.argv[2];
const myBuff = fs.readFile(filePath, function(err, data) {
    data = fs.readFileSync(filePath);
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
});

