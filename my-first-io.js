const fs = require('fs');

const myFilePath = process.argv[2]

const buff = fs.readFileSync(myFilePath);

const buffString = buff.toString().split('\n').length - 1;
console.log(buffString)

// const x = buffString.split('\n');

// const y = x.length - 1;
// console.log(y)
// or line 7-8
