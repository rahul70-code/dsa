function subsetSumToK(i, t, nums, dp) {
    // if target reached to 0 -> return true;
    if (t == 0) return true;
    // if index reached to 0 -> if last element equal target ? true : false;
    if (i == 0) return (nums[i] == t);
    // in dp array index and target present -> memoize
    if (dp[i][t] != -1) return dp[i][t]
    // not take the number and decrement index -> target = t;
    let not_take = subsetSumToK(i - 1, t, nums, dp);
    let take = false;

    // if t greater than number of that index
    // take the number and decrement index -> target = t - nums[i];
    if (t >= nums[i]) take = subsetSumToK(i - 1, t - nums[i], nums, dp);
    // take or not take value return true | false -> just return that 
    return dp[i][t] = take || not_take;
}

const subsetSum = (nums, k) => {
    // dp array to memoize
    const dp = Array(nums.length + 1)
        .fill(0)
        .map(() => Array(target + 1).fill(-1));
    // call function
    return subsetSumToK(nums.length, k, nums, dp)
}

// tabulation
function subsetSumToK(n, k, arr) {
    // declare dp array
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(k + 1).fill(-1));
    // if target == 0, ind can take any val from 0 -> n-1 
    // initialize first column value as true
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    // if 
    if (arr[0] <= k)
        dp[0][arr[0]] = true;
    // loop from index 1st till n
    // loop from target 1 till k;
    // not take will not subtract from target
    // take will subtract from target
    // decrement index from take and not take;
    // return dp[n-1][k] will be the answer
    for (let ind = 1; ind < n; ind++) {
        for (let target = 1; target <= k; target++) {

            let notTaken = dp[ind - 1][target];

            let taken = false;
            
            if (arr[ind] <= target)
                taken = dp[ind - 1][target - arr[ind]];

            dp[ind][target] = notTaken || taken;
        }
    }

    return dp[n - 1][k];
}
