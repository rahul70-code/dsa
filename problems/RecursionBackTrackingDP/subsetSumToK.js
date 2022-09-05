function subsetSumToK(i, t, nums, dp) {
    if (t == 0) return true;
    if (i == 0) return (nums[i] == t)
    if (dp[i][t] != -1) return dp[i][t]
    let not_take = subsetSumToK(i - 1, t, nums, dp);
    let take = false;
    if (t >= nums[i]) take = subsetSumToK(i - 1, t - nums[i], nums, dp);
    return dp[i][t] = take || not_take;
}

const subsetSum = (nums, k) => {
    const dp = Array(nums.length + 1)
        .fill(0)
        .map(() => Array(target + 1).fill(-1));
    // console.log(dp)
    return subsetSumToK(nums.length, k, nums, dp)
}