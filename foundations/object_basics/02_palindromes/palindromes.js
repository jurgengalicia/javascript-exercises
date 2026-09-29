const palindromes = function (word) {
    let stripWord = word.replace(/[.,!\\ -]/g,"").toLowerCase();
    for (let front = 0, back=(stripWord.length-1); front <= back; front++, back--) {
        if (stripWord[front] !== stripWord[back]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
