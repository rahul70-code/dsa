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
 * @return {boolean}
 */

 const depth = (root) => {
    let leftDepth =   1+ depth(root.left) 
     let rightDepth = 1+ depth(root.right)
     if (Math.abs(leftDepth-rightDepth) > 1) return false;
     else return true
}
// incomplete
var isBalanced = function(root) {
   if (root == null) return true;
   return depth(root)
};