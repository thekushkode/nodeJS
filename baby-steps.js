const accumulate = function(accumulator, currentNum) {
    return accumulator + currentNum;
}

const stringToNums = function(array) {
    const arrayOfNums = array.map(x => Number(x))
    const numsArray = arrayOfNums.slice(2);
    const x = numsArray.reduce(accumulate, 0)
    return x
};


console.log(stringToNums(process.argv));