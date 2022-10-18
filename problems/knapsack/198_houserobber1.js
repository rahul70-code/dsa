
function f(ind, nums, dp) {
    if(ind == 0) return nums[ind];
    if(ind<0) return 0;
    if(dp[ind]!=-1) return dp[ind];
    let pick = nums[ind] + f(ind-2, nums, dp);
    let not_pick = 0 + f(ind-1, nums, dp);
    return dp[ind] = Math.max(pick, not_pick);
    
}

var rob = function(nums) {
    const dp = Array(nums.length + 1).fill(-1)
    return f(nums.length-1, nums, dp);
}