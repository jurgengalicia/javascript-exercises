const fibonacci = function(fibNum) {
    if (Number.isNaN(fibNum) || fibNum < 0 || typeof fibNum != "number") {
        return "OOPS";
    }
    if (fibNum == 1 || fibNum == 2) {
        return 1;
    } else if(fibNum == 0){
        return 0;
    } else {
        return fibonacci(fibNum-1) + fibonacci(fibNum-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
