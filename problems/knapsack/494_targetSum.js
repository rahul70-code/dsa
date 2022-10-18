// https://leetcode.com/problems/target-sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 function f(ind, nums, t, cN, dp) {
    if(ind < 0 && t == cN) return 1;
    if(ind < 0) return 0;
    let key = `${ind}:${cN}`;
    if(dp.get(key)) return dp.get(key);
    let po = f(ind-1, nums, t,  cN+nums[ind], dp);
    let ng = f(ind-1, nums, t, cN-nums[ind], dp)
    
    dp.set(key, po+ng)
    return po+ng
}

var findTargetSumWays = function(nums, target) {
      const dp = new Map();
    let currNum = 0
    return f(nums.length-1, nums, target,currNum, dp)
};



// similar to 01 knapsack

//Main idea: the nums can be seperated into two parts, left and right
//left + right = sum, left - right = target 
//Then we get : left - (sum - left) = target, left = (sum + target)/2
//Then we can turn this problem into a 1/0 knapsack problem
var findTargetSumWays = function(nums, target) {
    var sum = nums.reduce((a, b) => a + b);
    if((sum + target) % 2 === 1) return 0;
    var left = (sum + target) / 2;
    var dp = new Array(left + 1).fill(0); //dp[i] represents how many ways to fill up a bag with capacity i
    dp[0] = 1; //Initialization, there is 1 way to fill up a bag with 0 capacity
    for(var i = 0; i < nums.length; i++) {
        for(var j = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[left];
};