// #include <bits/stdc++.h>
int ks(int ind,int W, vector<int> &w, vector<int> &v, vector<vector<int>> &dp) {
    // if index reached to 0 then
    //  1. check if maxweight less than remaining wait ? yes -> return value
    //  2. else return 0
    if(ind == 0) {
        if(w[0]<= W) return v[0];
        else return 0;
    }

    if(dp[ind][W] != -1) return dp[ind][W];
    // not take -> index will reduce
    int not_take = 0 + ks(ind-1, W, w, v, dp);
    int take = INT_MIN;
    // if maxweight is less than remaining wait than take
    // index will reduce and weight will be subtracted
    if(w[ind]<=W) take = v[ind] + ks(ind-1, W-w[ind], w, v, dp);
    // take the max of take and not_take
    return dp[ind][W] = max(take, not_take);
}



int knapsack(vector<int> weight, vector<int> value, int n, int maxWeight) 
{
	// Write your code here
    vector<vector<int>> dp(n, vector<int> (maxWeight+1, -1));
    return ks(n-1, maxWeight, weight, value, dp);
}