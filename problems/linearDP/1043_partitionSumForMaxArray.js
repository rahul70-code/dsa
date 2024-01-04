// https://leetcode.com/problems/partition-array-for-maximum-sum/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// memoization
function maxSum(ind, arr, k, n, sum) {
    if (ind == n || k == 0) return sum;

    // pick
    let pick = sum + maxSum(ind, arr, k - 1, n, sum + arr[ind])

    let not_pick = maxSum(ind + 1, arr, k, n, sum)

    return Math.max(pick, not_pick)
    // not pick
}


var maxSumAfterPartitioning1 = function (arr, k) {
    let sum = 0;
    let n = arr.length;
    return maxSum(0, arr, k, n, sum)
};



// tabulation
var maxSumAfterPartitioning = function (arr, k) {
    let dp = Array(arr.length).fill(-1);
    dp[arr.length] = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let maxAns = -Infinity;
        let len = 0; let maxi = -Infinity;
        for (let j = i; j < Math.min(arr.length, i + k); j++) {
            len++;
            maxi = Math.max(maxi, arr[j]);
            let sum = (len * maxi) + dp[j + 1];
            maxAns = Math.max(maxAns, sum);
        }
        dp[i] = maxAns
    }
    return dp[0]
};

console.log(maxSumAfterPartitioning1([1,5,4,2,9,9,9], 3))