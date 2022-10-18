// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
 * @param {number} k
 * @return {boolean}
 */

function dfs(root, set, k) {
    if (root == null) return false;
    if (set.has(k - root.val)) return true;
    set.add(root.val);
    return dfs(root.left, set, k) || dfs(root.right, set, k);
}
// using set
var findTarget = function (root, k) {
    let set = new Set();
    return dfs(root, set, k)
};


// useful article
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/discuss/106059/JavaC%2B%2B-Three-simple-methods-choose-one-you-like
/**
 * three methods
 * 1. hash set.
 * 2. sorted array and two pointer.
 * 3. sorted array and binary search
 */