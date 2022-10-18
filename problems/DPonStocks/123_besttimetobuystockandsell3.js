/**
 * @param {number[]} prices
 * @return {number}
 */

function f(ind, buy, cap, values, n, dp) {
    if (ind == n || cap == 0) return 0;
    let profit = 0
    if (dp[ind][buy][cap] != -1) return dp[ind][buy][cap]
    if (buy) {
        // after buying the values will substract from 
        profit = Math.max(-values[ind] + f(ind + 1, 0, cap, values, n, dp),
            0 + f(ind + 1, 1, cap, values, n, dp))

    } else {
        profit = Math.max(values[ind] + f(ind + 1, 1, cap - 1, values, n, dp),
            0 + f(ind + 1, 0, cap, values, n, dp))
    }
    return dp[ind][buy][cap] = profit
}

var maxProfit = function (prices) {
    let n = prices.length;
    let cap = 2
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(2).fill(-1).map(() => Array(cap+1).fill(-1)));
    return f(0, 1, cap, prices, prices.length, dp)
};



// tabulation

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let n = prices.length
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(2).fill(-1).map(() => Array(3).fill(0)));
    // changing params - ind, buy, cap
    // copy recurance
    // if cap == 0, ind and buy can be anything
    // if ind == n, buy and cap can be anything
    for (let ind = n - 1; ind >= 0; ind--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let cap = 1; cap <= 2; cap++) {
                let profit = 0
                if (buy) {
                    // after buying the values will substract from 
                    profit = Math.max(-prices[ind] + dp[ind + 1][0][cap],
                        0 + dp[ind + 1][1][cap])

                } else {
                    profit = Math.max(prices[ind] + dp[ind + 1][1][cap - 1],
                        0 + dp[ind + 1][0][cap])
                }
                dp[ind][buy][cap] = profit
            }
        }
    }
    return dp[0][1][2]
};