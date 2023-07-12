const fibonacci = function(input) {
    const index = Number(input);
    if (index > 2 ) {
        return fibonacci(index - 1) + fibonacci(index - 2);
    }
    if (index === 1 || index === 2) {
        return 1;
    }
    if (index < 1) {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
