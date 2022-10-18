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
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        vector<vector<int>> result;
        vector<int> path;
        findPath(root, targetSum, path, result);
        return result;
    }

private: 
    void findPath(TreeNode *node, int sum, vector<int>&path, vector<vector<int>> &paths) {
        if(!node) return;
        // push in array []
        path.push_back(node -> val);
        // if not left && not right && sum == last node then push array [] in result;
        // found the valid path
        if(!(node->left) && !(node->right) && sum == node->val) paths.push_back(path);
        // recursively call left and right and reduce node val from sum *****
        findPath(node->left, sum-node->val, path, paths);
        findPath(node->right, sum-node->val, path, paths);
        // pop the value at the end
        // basically backtracking***********
        path.pop_back();
    }
};

// TC - O(N^2)
// SC - O(H) - H is height of the tree.

/*
path sum root, target
result [[]]
if root == null return result;

pathSumUtils(root, target, result)

[5]
22-5 = 17

[5,4]
17-4 = 13

[5,4,13]
13-11 = 2

[5,4,13,7]
2-7 = -5

[5,4,13,2]
2-2=0
pathSumUtils(root, target, result, currA)
if(target == 0) result.push(currA)
currA.push(root.val)
if(target > 0) psu(root.left, target-root.val, result, currA)
currA.pop()

psu(root.right, target+root.val, result, currA)

*/

// BFS
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
bool isLeaf(TreeNode *root)
{
    return !root->left and !root->right;
}

vector<vector<int>> getAllPaths(TreeNode *root,int targetSum)
{
// Queue stores {TreeNode , Sum From Root To TreeNode, Path containing Nodes From Root To Current Node}
    queue<pair<TreeNode*,pair<int,vector<int> > > > q;
    vector<vector<int>> res;
    if(!root)
        return res;
// Start with Root Node with currentSum == root->val and Path = {root->val}
    q.push({root,{root->val,{root->val}}});
    while(!q.empty())
    {
        auto front = q.front();
        q.pop();
        TreeNode *treeNode = front.first;
        int currentSum = front.second.first;
        vector<int> currentPath = front.second.second;
//         Check if we reach the leaf node with currentSum equals to TargetSum
        if(isLeaf(treeNode) and currentSum == targetSum)
        {
//          Push one Path into the final Answer
            res.push_back(currentPath);
        }
        if(treeNode->left)
        {
            vector<int> leftPath = currentPath;
            leftPath.push_back(treeNode->left->val);
//          Store the left child with new sum and path,
            q.push({treeNode->left,{currentSum + treeNode->left->val,leftPath}});
        }
        if(treeNode->right)
        {
            vector<int> rightPath = currentPath;
            rightPath.push_back(treeNode->right->val);
//          Store the right child with new sum and path,
            q.push({treeNode->right,{currentSum + treeNode->right->val,rightPath}});
        }
    }
    return res;
}

public:
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        return getAllPaths(root,targetSum);
    }
};