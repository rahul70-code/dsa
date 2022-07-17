/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        return helper(nums, 0, nums.size()-1);
    }

    TreeNode* helper(vector<int>& nums, int left, int right) {
        if(left > right) return NULL;
        int max_idx = left;
        for(int i=left; i<=right;i++) {
            if(nums[i] > nums[max_idx]) max_idx = i;
        }
        TreeNode* root = new TreeNode(nums[max_idx]);
        root->left = helper(nums, left, max_idx-1)
        root->right = helper(nums, max_idx+1, right)
        return root;
    }
};

/*
best solution
https://leetcode.com/problems/maximum-binary-tree/discuss/106147/C%2B%2B-8-lines-O(n-log-n)-map-plus-stack-with-binary-search
*/