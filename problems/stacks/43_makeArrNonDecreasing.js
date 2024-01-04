/**
 * @param {number[]} nums
 * @return {number}
 */
// time limit exceeded
 let helper = (nums, count, flag) => {
    if(flag == true) return count;
    let num = [nums[0]]
    for(let i=1;i<nums.length;i++) {
        if(nums[i-1] <= nums[i]) num.push(nums[i])
    }
    if(num.length == nums.length) flag = true;
    else count++;
    return helper(num,count,flag)
}

var totalSteps = function(nums) {
    let count = 0
    return helper(nums,count, false)
};

// using DP
const totalSteps1 = (a) => MonotonicStack(a);

const MonotonicStack = (a) => {
    let n = a.length, st = [], dp = Array(n).fill(0), res = 0;
    for (let i = n - 1; ~i; i--) {
        // console.log(st)
        // console.log(dp)
        while (st.length && a[i] > a[st[st.length - 1]]) {
            let last = st.pop();
            dp[i] = Math.max(dp[i] + 1, dp[last]);
        }
        st.push(i);
        res = Math.max(res, dp[i]);
    }
    return res;
};



console.log(totalSteps1([5,3,4,4,7,3,6,11,8,5,11]
    ))