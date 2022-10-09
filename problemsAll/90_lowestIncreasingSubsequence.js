function f(ind, prev, arr,k) {
    if (ind == arr.length) return 0;
    let nlen = 0 + f(ind + 1, ind, arr,k) // not take
    let len = 0
    if (prev == -1 || arr[ind] > arr[prev] && arr[ind]-arr[prev] <=k)
        len = 1 + f(ind + 1, ind, arr, k) // take
    return Math.max(nlen, len)
}

var lengthOfLIS = function (nums,k) {
    return f(0, -1, nums,k)
}

// var lengthOfLIS = function (nums) {
//     const dp = Array(nums.length).fill(1);
//     let max = 1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < i; j++) {
//             // console.log(dp)
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//                 max = Math.max(dp[i], max);
//             }
//         }
//     }
//     return max
// }


console.log(lengthOfLIS([2,2,3,1,3],3))