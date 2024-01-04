/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let pointer = 0;
    let cac = {};
    let result = [];
    let str = 0
    p.split("").forEach(s => {
       if(cac[s]) cac[s]++;
       else cac[s] = 1
    });
    console.log(cac)
    s = s.split("")
    for(let i=0;i<s.length;s++) {
        if(cac[s[i]] && pointer == s.length) {
            result.push(str);
            pointer = 0;
            str = i
        }
        else {
            pointer = 0;
        }
    }
    return result;
};


console.log(findAnagrams("cbaebabacd", "abc"))