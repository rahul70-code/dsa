/**
 * Check Array Formation Through Concatenation
 * https://leetcode.com/explore/challenge/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3589/
 */


 var canFormArray = function(arr, pieces) {
    let total = "";
    arr=arr.join("");
    for (let i = 0; i < pieces.length; i++) {
      pieces[i] = pieces[i].join("");
      total += pieces[i];

      if (arr.indexOf(pieces[i]) == -1) return false;
    }
    console.log(total)
    return total.length == arr.length;

};

console.log(canFormArray([15,88],[[88],[15]])) // true
console.log(canFormArray([91,4,64,78],[[78],[4,64],[91]])) // true
console.log(canFormArray([49,18,16],[[16,18,49]])) // faLSE
