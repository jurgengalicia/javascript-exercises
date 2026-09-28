const sumAll = function(operand1, operand2) {
    if(typeof operand1 != "number" || typeof operand2 != "number" || 
        operand1 % 1 != 0 || operand2  % 1 != 0 || 
        operand1 < 0 || operand2 < 0){
        return "ERROR";
    }
    let resultNum = 0;
    if(operand1 < operand2){
        while(operand1 <= operand2){
            resultNum += operand2--;
        }
        return resultNum;
    }else{
        while(operand2 <= operand1){
            resultNum += operand1--;
        }
        return resultNum;
    }
    // if(operand1 == operand2){
    //     return operand1;
    // }else if(operand1 > operand2){
    //     for(;operand1 != operand2;operand1--){
    //         resultNum += operand1;
    //     }
    //     return resultNum;
    // }else{
    //     for(;operand1 != operand2;--operand2){
    //         resultNum += operand2;
    //     }
    //     return resultNum;
    // }
};

// Do not edit below this line
module.exports = sumAll;
