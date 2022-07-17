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
    return (j==n);
};



let result = isSubsequence("acb", "gdcacb")
console.log(result)