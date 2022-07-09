// 523. Continuous Subarray Sum

function checkSubarraySum(nums, k) {
    let n = nums.length, sum = 0, pre = 0;
    let modk = new Set();
    for(let i=0;i<n;++i) {
        sum+=nums[i];
        if(k!=0) sum%=k;
        if(modk.has(sum)) return true;
        modk.add(pre)
        pre = sum
    }
    return false;
}

function checkSubarraySum2(nums, k) {
    if (nums.length == 0)   return false;
        let preSum = [];
        for (let i = 1; i <= nums.length; i++) {
            preSum[i] = preSum[i-1] + nums[i-1];
        }
        console.log(preSum)
        for (let i = 0; i < nums.length; i++) {
            for (let j = i+2; j <= nums.length; j++) { // j = i + 2 is because question mentions subarray size at least 2
                if (k == 0) {
                    if (preSum[j] - preSum[i] == 0) {
                        return true;
                    }
                } else if ((preSum[j] - preSum[i]) % k == 0) {
                    return true;
                }
            }
        }
        return false;
}


console.log(checkSubarraySum2([23,2,4,6,7],6))