class Solution {
public:
     void backtrack(set<vector<int>> &st,vector<int> &v,vector<int> nums,int start)
    {
        int n = nums.size();
        if(v.size() >= 2)
            st.insert(v);
        else if(start == n)
            return;
        
        for(int i=start;i<n;++i)
        {
            if(v.size() == 0 || v.back() <= nums[i])
            {
                v.push_back(nums[i]);
                backtrack(st,v,nums,i+1);
                v.pop_back();
            }
        }
    }
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        vector<int> v;
        set<vector<int>> st;
        backtrack(st,v,nums,0);
        return vector<vector<int>>(st.begin(),st.end());
    }
   
};