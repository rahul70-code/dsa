var goodIndices = function (nums, k) {
    let result = [];
    if (nums.length <= k) return result;
    for (let i = k; i < nums.length-k; i++) {
        let flag = true
        if (i - k >= 0 && i + k <= nums.length) {
            for (let j = i - k; j < i; j++) {
                if (nums[j] == nums[j + 1]) continue;
                else if (nums[j] < nums[j + 1]) flag = false
            }
            for (let c = i + 1; c < i + k; c++) {
                if (nums[c] > nums[c + 1]) flag = false;
            }
        }
        if (flag) result.push(i)
    }
    return result;
};

var goodIndices = function (nums, k) {
    let dp1 = [].fill(1), dp2=[].fill(1), ans = [];
    if (nums.length <= k) return result;
    for(let i=0;i<nums.length;i++) if(nums[i-1]>nums[i]) dp1[i] = dp1[i+1]+1;
    for(let j=nums.length-2;j>=0;j--) if(nums[i]<=nums[i+1]) dp2[i] = dp2[i+1]+1;
    for(let i=k;i<nums.length-k;i++) 
            if(dp1[i-1]>=k && dp2[i+1]>=k) ans.push_back(i);
    return ans;
};

/**
 * Intuition:
Computing increasing and decreasing length for every index might give TLE.

Thougt Processs & Algorithm:

    If we precompute the length of decreasing till every from left.
    If we precompute the length of increasing till every from right.
    Then we can easily check indexes in range [k,n-k] which have atleast k elements before and after because we already computed the length by above steps.

By precomputation what technique comes in our mind??
Its Dynamic Programming also known as prefix or suffix.

Conclusion:

    Whenever precomputation i.e some parameter calculation is required till every index, then we should think of Dynamic Programming(Prefix / Suffix)
 */
/**
 * class Solution{
public:
    vector<int> goodIndices(vector<int>& a, int k) {
        int n= size(a);
        vector<int> dp1(n+1,1),dp2(n+1,1),ans;
        
        for(int i=1;i<n;i++) 
            if(a[i-1]>=a[i]) dp1[i]= dp1[i-1]+1;
        
        for(int i=n-2;i>=0;i--)  
            if(a[i]<=a[i+1]) dp2[i]= dp2[i+1]+1;
        
        for(int i=k;i<n-k;i++) 
            if(dp1[i-1]>=k && dp2[i+1]>=k) ans.push_back(i);
        return ans;
    }
};
 */

console.log(goodIndices([2, 1, 1, 1, 3, 4, 1], 2)) 