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
 * @param {number} key
 * @return {TreeNode}
 */

 function minValue(root)
 {
     let minv = root.val;
         while (root.left != null)
         {
             minv = root.left.val;
             root = root.left;
         }
         return minv;
 }

 var deleteNode = function(root, key) {
     if(root == null) return root;
     if(key < root.val) root.left = deleteNode(root.left, key)
     else if(key > root.val) root.right = deleteNode(root.right, key)
     else {
         if(root.left == null) return root.right
         if(root.right == null) return root.left;
         root.val = minValue(root.right);
         root.right = deleteNode(root.right, root.val);
     }
     
     return root;
 };