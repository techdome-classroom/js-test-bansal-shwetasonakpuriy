/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let old;
    var romanTolnt = function(s){
        let dict = {l:1,V:5,X:10,L:50,C:100,D:500,M:1000};
        let x = 0;
        for (let letter of s){
            x = dict[letter] + x;
            if(old == "l" && letter == "V" || old == "l" && letter == "x"){x = x -2*old;};
            if(old == "X" && letter == "L" || old == "l" && letter == "C"){x = x -2*old;};
             if(old == "C" && letter == "M" || old == "l" && letter == "C"){x = x -2*old;};
            old = letter,
};
        return x;
};

console.log(romanTolnt("VII"))
module.exports={romanToInt}
