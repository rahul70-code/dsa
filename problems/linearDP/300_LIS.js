function f(ind, prev, n, arr, dp) {
    if (ind == n) return 0;
    if(dp[ind][prev+1] != -1) return dp[ind][prev+1]
    let len = 0 + f(ind + 1, prev, n, arr, dp) // not take
    // let len = 0
    if (prev == -1 || arr[ind] > arr[prev])
        len = Math.max(len,1 + f(ind + 1, ind,n, arr, dp)) // take
    return dp[ind][prev+1] = len
}

var lengthOfLIS = function (nums) {
     const dp = Array(nums.length)
        .fill(0)
        .map(() => Array(nums.length + 1).fill(-1));
    return f(0, -1,nums.length, nums, dp)
}