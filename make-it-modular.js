const myModule = require('./mymodule.js');

myModule(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    data.forEach((fileName) => {
        console.log(fileName);
    })
});