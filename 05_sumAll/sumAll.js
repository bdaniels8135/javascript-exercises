const sumAll = function(input1, input2) {
    if (typeof input1 !== 'number' || input1 < 0 || typeof input2 !== 'number' || input2 < 0) {
        return 'ERROR';
    }
    let lowerBound, upperBound;
    if (input1 <= input2) {
        lowerBound = input1;
        upperBound = input2;
    } else {
        lowerBound = input2;
        upperBound = input1;
    }
    let sum = 0;
    for (let summand = lowerBound; summand <= upperBound; summand++) {
        sum += summand;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
