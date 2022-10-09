/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 function memoized(coins, amount, n, dp) {
    if (amount === 0) return 0;
    if (n === 0) return Number.MAX_SAFE_INTEGER;

    if (dp[n][amount] !== -1) return dp[n][amount];

    if (coins[n - 1] <= amount) {
        return dp[n][amount] = Math.min(
            // select current coin: coins[n-1], because we have unlimited supply of coins
            // we can still select the same coin again so the last parameter remains same
            1 + memoized(coins, amount - coins[n - 1], n, dp),
            0 + memoized(coins, amount - 0, n - 1, dp) // not selecting current coin
        );
    } else return dp[n][amount] = 0 + memoized(coins, amount - 0, n - 1, dp); // not selecting current coin
}

var coinChange = function (coins, amount) {
    // Memoized
    const n = coins.length;
    dp = new Array(n + 1).fill(-1).map(() => new Array(amount + 1).fill(-1));
    const minCoins = memoized(coins, amount, coins.length, dp);
    return minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
}