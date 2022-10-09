// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
 * @return {number}
 */
var goodNodes = function (root) {
    let current = root;
    let count = 0
    function traverse(node, max) {
        max = Math.max(max, node.val)
        if (node.val >= max) count++;
        if (node.left) traverse(node.left, max);
        if (node.right) traverse(node.right, max);
    };
    traverse(current, current.val);
    return count;
};


