// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/discuss/2685594/Javascript-or-inOrder-Transersal

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
 * @return {TreeNode}
 */

 let inOrder = (root, sum) => {
       var current = root;
       function traverse(node) {
         if (node.right) traverse(node.right, sum);
         sum+=node.val
         node.val = sum
         if (node.left) traverse(node.left, sum);
       };
       traverse(current);
       return root
   }

var bstToGst = function(root) {
    return inOrder(root, 0);
};