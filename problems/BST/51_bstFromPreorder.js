/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

 function insertIterative(root, val) {
    var current = root;
    var newNode = new TreeNode(val);

     while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return val;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return val;
          } else {
            current = current.right;
          }
        };
      };
}

function insertRecursive(root, val) {
  if(root == null) {
    root = new TreeNode(val);
    return root;
  }

  if(val < root.val) root.left = insertRecursive(root.left, val)
  else if(val > root.val) root.right = insertRecursive(root.right, val)
  return root;
}

var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0]);
    preorder.shift()
    preorder.forEach(v => insertIterative(root, v))
    return root;
};