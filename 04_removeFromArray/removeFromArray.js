const removeFromArray = function(array, ...removeList) {
    let filteredArray = array
    for (let item of removeList) {
        filteredArray = filteredArray.filter( arrayElement => arrayElement !== item );
    }
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
