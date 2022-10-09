/**
 * @param {number[]} prices
 * @return {number}
 */
function f(ind, buy, values,fee, n, dp) {
    if (ind >= n) return 0;
    let profit = 0
    if (dp[ind][buy] != -1) return dp[ind][buy]
    if (buy) {
        // after buying the values will substract from 
        profit = Math.max(-values[ind] + f(ind + 1, 0, values,fee, n, dp),
            0 + f(ind + 1, 1, values, n, dp))

    } else {
        profit = Math.max(values[ind] - fee + f(ind + 1, 1, values,fee, n, dp),
            0 + f(ind + 1, 0, values, n, dp))
    }
    return dp[ind][buy] = profit
}
// memoization
var maxProfit = function (prices, fee) {
    const dp = Array(prices.length + 1)
        .fill(0)
        .map(() => Array(2).fill(-1));
    return f(0, 1, prices,fee, prices.length, dp)
};



// tabulation

/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices, fee) {
    let n = prices.length
    const dp = Array(n+1)
    .fill(0)
    .map(() => Array(2).fill(-1));
    dp[n][0] = dp[n][1] = 0;
    for(let ind=n-1; ind>=0;ind--) {
        for(let buy=0;buy<=1;buy++){
            let profit = 0
            if(buy) {
                profit = Math.max(-prices[ind] + dp[ind+1][0], 
                0 + dp[ind+1][1])
                
            } else {
                profit = Math.max(prices[ind] - fee + dp[ind+1][1], 
                0+ dp[ind+1][0]) 
            }
            dp[ind][buy] = profit;
        }
    }
    return dp[0][1] 
};