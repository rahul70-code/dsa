function f(ind, prev, arr) {
    if (ind == n) return 0;
    let nlen = 0 + f(ind + 1, ind, arr) // not take
    let len = 0
    if (prev == -1 || arr[ind] > arr[prev])
        len = 1 + f(ind + 1, ind, arr) // take
    return Math.max(nlen, len)
}

var lengthOfLIS = function (nums) {
    return f(0, -1, nums)
}

var lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(1);
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < i; j++) {
            // console.log(dp)
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(dp[i], max);
            }
        }
    }
    return max
}


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))