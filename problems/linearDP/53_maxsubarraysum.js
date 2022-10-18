// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) currSum = nums[i];
        else currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};

// Explanation
/**
 1. currSum = num[0], maxSum = num[0].
 2. start from 1st index till end.
 3. if currSum becomes less than 0 -> start fresh from that index value.
 4. else sum up values.
 5. update maxSum -> max(maxSum, currSum)
 */


// https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts