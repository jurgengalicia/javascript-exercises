const reverseString = function(str) {
    let resultString = ""
    for(let x = str.length - 1; x >= 0; x--){
        resultString += str[x];
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
