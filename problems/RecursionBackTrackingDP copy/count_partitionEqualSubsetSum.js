/**
 * @param {number[]} nums
 * @return {boolean}
 */

 function subsetSumToK(i, sum, nums, dp) {
    if(i==0) {
        if(sum == 0 && nums[0] == 0) return 2;
        if(sum ==0 || sum==nums[0]) return 1;
        return 0;
    }
    
    if(dp[i][sum] != -1) return dp[i][sum]
    let not_take = subsetSumToK(i-1,sum,nums, dp);
    let take = 0;
    if(sum >= nums[i]) take = subsetSumToK(i-1,sum-nums[i],nums,dp);
    return dp[i][sum] = take + not_take;
}

var canPartition = function(nums, target) {
    let totalSum = 0;
    for(let i=0;i<nums.length;i++) totalSum+=nums[i];
    if(totalSum-target<0 || (totalSum-d)%2) return false;
    // let target = Math.round(totalSum/2);
    
     const dp = Array(nums.length+1)
    .fill(0)
    .map(() => Array(target+1).fill(-1));
    // console.log(dp)
    return subsetSumToK(nums.length,target,nums, dp)
};