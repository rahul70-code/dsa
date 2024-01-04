/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */



 var isSubsequence = function(s, t) {
    let n=s.length,m=t.length;
    let j=0;
    for(let i=0;i<m && j<n;i++) {
        if(s[j]==t[i]) j++
    }
    return t.length == 1 && j == 0 ? 0 :  t.length-j;
};



let result = isSubsequence("lbg","g")
console.log(result)