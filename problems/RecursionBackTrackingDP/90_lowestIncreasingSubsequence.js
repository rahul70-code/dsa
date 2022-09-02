var lengthOfLIS = function(nums){
    const dp = Array(nums.length).fill(1);
    let max = 1;
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < i; j++){
            // console.log(dp)
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1);
                max = Math.max(dp[i], max);
            }
        }
    }
    return max
}


console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))