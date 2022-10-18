class Solution {
public:
    void backtrack(vector<int> &nums, vector<vector<int>>& ans, vector<int>& tmp) {
        if(tmp.size() == nums.size()){
            ans.push_back(tmp);
            return;
        };
        
        for(auto x: nums) {
            if(find(tmp.begin(),tmp.end(),x) != tmp.end()) continue;
            tmp.push_back(x);
            backtrack(nums,ans,tmp);
            tmp.pop_back();
        }
    }
    
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> temp;
        backtrack(nums, ans, temp);
        return ans;
    }
};