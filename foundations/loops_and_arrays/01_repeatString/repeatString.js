const repeatString = function(word, repeats) {
    if(repeats < 0){
        return "ERROR"
    }
    let resultString = ''
    for(let x = 0; x < repeats; x++){
        resultString += word;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
