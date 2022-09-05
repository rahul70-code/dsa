// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};