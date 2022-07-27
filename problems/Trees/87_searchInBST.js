// https://leetcode.com/problems/search-in-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let res = null;
    const helper = (node) => {
        if(!node) return;
        if(node.val === val){
            res = node;
            return;
        }
        if(val < node.val) helper(node.left)
        if(val > node.val) helper(node.right)
    }
    
    helper(root);   
    return res;
};

let searchBST = (root, val) => {
    while(root != null && root.val != val)
        root = (root.val > val) ? root.left : root.right;
    return root;
}

/**
    // C++ solution
   TreeNode* searchBST(TreeNode* root, int val) {
    while (root != nullptr && root->val != val) {
      root = (root->val > val) ? root->left : root->right;
    }
    return root;
}

 */