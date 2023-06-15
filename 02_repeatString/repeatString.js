const repeatString = function(string, reps) {
    if (reps < 0) {
        return 'ERROR'
    }
    let repeatedString = '';
    for (let rep = 1; rep <= reps; rep++) {
        repeatedString += string;
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
