const palindromes = function (str) {
    const punctuationRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    const spacesRE = /\s+/g;
    const strippedString = str.replace(punctuationRE, '').replace(spacesRE, '').toLowerCase();
    const reversedString = strippedString.split('').reverse().join('')
    return strippedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
