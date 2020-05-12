// NODE

module.exports = : get something out of file 
exports 2 functions and saves them to/as multiply & add

***********math.js file start***************
const multiplyNumbers = function(num1, num2, **) {
    return num1 * num2
}

const addNUmbers = function(num1, num2) {
    return num1 + num2
}

module.exports = {
    add: addNumbers,
    multiply: multiplyNumbers,
};
********end of math.js***********

require() - require other files , always a string in the parenthesis
ex. const http = require('http');

looking for js file named math:
const math = require('./math');
const newNum = math.add(4, 4);

&

module.exports = : get something out of file 
exports 2 functions and saves them to/as multiply & add

*****app.js start*********
const math = require('./math');
const newNum = math.add(4, 6);
console.log(newNum) //prints 10



*******app.js end************