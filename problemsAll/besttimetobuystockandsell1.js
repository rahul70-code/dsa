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

// I/P - [7,1,5,3,6,4]
// O/P - 5

// Explanation
/**
 * 1. left at index 0 and right at index 1.
 * 2. loop right till end.
 * 3. if future price is greater than present price ->
 *    1. calculate profit.
 *    2. update maximum profit.
 * 4. if future price is less than present price ->
 *    1. update left index to present index.
 * 5. increment right pointer. 
 */