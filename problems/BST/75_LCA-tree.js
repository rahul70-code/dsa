// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*************LCA of BST**************** */
var lowestCommonAncestor = function (root, p, q) {
    let s = Math.min(p.val, q.val);
    let l = Math.max(p.val, q.val);
    while (root != null) {
        if (root.val > l) root = root.left;
        else if (root.val < s) root = root.right;
        else return root;
    }
    return null
};

var lowestCommonAncestor = function (root, p, q) {
    // it is BST so we should take advantage of it
    // there are only 3 cases
    // 1st p & q < root => call left subtree
    // 1st p & q > root => call right subtree
    // else return root;
    if (p.val < root.val && q.val < root.val)
        return lowestCommonAncestor(root.left, p, q)
    else if (p.val > root.val && q.val > root.val)
        return lowestCommonAncestor(root.right, p, q)
    else return root
};


/*************LCA of BT 1**************** */

