class Solution {
public:
    void backtrack(vector<int> &nums, vector<vector<int>> &ans, vector<int> &tmp, int strt) {
        ans.push_back(tmp);
        for(int i=strt; i<nums.size();i++) {
            tmp.push_back(nums[i]);
            backtrack(nums, ans, tmp, i+1);
            tmp.pop_back();
        }
    }
    
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> tmp;
        sort(nums.begin(), nums.end());
        backtrack(nums, ans, tmp, 0);
        return ans;
    }
};