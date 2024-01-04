/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let resultStr = ""
    let i= j = s.length;
    while(i >= 0) {
        if(s[i] != " ") i--;
        else {
            let str = s.slice(i+1, j);
            console.log(str)
            resultStr += str + " ";
            j = i
            i--;
        }
    }
    resultStr += s.split(" ")[0]
    return resultStr
};

console.log(reverseWords("the sky is blue"))