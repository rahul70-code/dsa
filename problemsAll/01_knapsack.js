// memoization
// W -> maxWeight
// w -> weight 
// v -> value
// dp -> memo array
function ks(ind, W, w, v, dp) {
    // if index reached to 0 then
    //  1. check if maxweight less than remaining wait ? yes -> return value
    //  2. else return 0
    if (ind == 0) {
        if (w[0] <= W) return v[0];
        else return 0;
    }

    if (dp[ind][W] != -1) return dp[ind][W];
    // not take -> index will reduce
    let not_take = 0 + ks(ind - 1, W, w, v, dp);
    let take = -Infinity;
    // if maxweight is less than remaining wait than take
    // index will reduce and weight will be subtracted
    if (w[ind] <= W) take = v[ind] + ks(ind - 1, W - w[ind], w, v, dp);
    // take the max of take and not_take
    return dp[ind][W] = Math.max(take, not_take);
}



function knapsack(weight, value, n, maxWeight) {
    // Write your code here
    const dp = Array(n + 1).fill(-1).map(() => Array(maxWeight + 1).fill(-1));
    return ks(n - 1, maxWeight, weight, value, dp);
}


// tabulation
const knapsack = (w, v, n, W) => {
    const dp = Array(n + 1).fill(-1).map(() => Array(maxWeight + 1).fill(-1));
    for (let i = w[0]; i < W; i++) dp[0][i] = value[0];
    for (let ind = 1; ind < n; i++) {
        for (let cap = 0; cap <= W; cap++) {
            let notTaken = 0 + dp[ind - 1][cap]
            let take = -Infinity;
            if (w[ind] <= cap) take = v[ind] + dp[ind - 1][cap - w[ind]];
            dp[ind][cap] = Math.max(take, notTaken)
        }
    }
    return dp[n - 1][W];
}




/**
Some 0/1 knapsack problems :
->Subset sum
->Equal sum partition
->Count of subsets sum with a given sum
->Minimum subset sum difference
->Count the number of subset with a given difference
->Target sum
 */




// #include <bits/stdc++.h>
// int ks(int ind,int W, vector<int> &w, vector<int> &v, vector<vector<int>> &dp) {
//     // if index reached to 0 then
//     //  1. check if maxweight less than remaining wait ? yes -> return value
//     //  2. else return 0
//     if(ind == 0) {
//         if(w[0]<= W) return v[0];
//         else return 0;
//     }

//     if(dp[ind][W] != -1) return dp[ind][W];
//     // not take -> index will reduce
//     int not_take = 0 + ks(ind-1, W, w, v, dp);
//     int take = INT_MIN;
//     // if maxweight is less than remaining wait than take
//     // index will reduce and weight will be subtracted
//     if(w[ind]<=W) take = v[ind] + ks(ind-1, W-w[ind], w, v, dp);
//     // take the max of take and not_take
//     return dp[ind][W] = max(take, not_take);
// }



// int knapsack(vector<int> weight, vector<int> value, int n, int maxWeight) 
// {
// 	// Write your code here
//     vector<vector<int>> dp(n, vector<int> (maxWeight+1, -1));
//     return ks(n-1, maxWeight, weight, value, dp);
// }