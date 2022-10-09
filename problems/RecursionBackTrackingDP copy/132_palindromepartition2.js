/**
 * @param {string} s
 * @return {number}
 */
 function isPalindrome(i,j,str) {
    while(i<j) {
        if(str[i]!=str[j]) return false;
        i++;
        j--;
    }
    return true;
}

// tabulation
var minCut = function(s) {
    let dp = Array(s.length).fill(0)
    dp[s.length] = 0;
    for(let i=s.length-1;i>=0;i--){
     let minCost = Infinity;
    for(let j=i;j<s.length;j++) {
        if(isPalindrome(i,j, s)) {
            let cost = 1 + dp[j+1];
            minCost = Math.min(minCost, cost);
        }
        dp[i] = minCost
    }
}
    return dp[0] - 1;
};