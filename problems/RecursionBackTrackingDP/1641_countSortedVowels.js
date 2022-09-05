// https://leetcode.com/problems/count-sorted-vowel-strings/

/**
 * @param {number} n
 * @return {number}
 */
// Recursion 
 function count(i, n) {
    if(n==0) return 1;
    if(i >= 5) return 0;
    let pick = count(i, n-1);
    let not_pick = count(i+1, n);
    return pick + not_pick
}

var countVowelStrings = function(n) {
    // let vowels = "aeiou";
    return count(0, n);
};


// memoization
//TODO

//Tabulation
// TODO