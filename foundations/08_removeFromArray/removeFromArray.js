const removeFromArray = function(arr, ...args) {
    let resultArr = arr.slice();
    for(const arg of args){
        resultArr = resultArr.filter(x => x !== arg)
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
