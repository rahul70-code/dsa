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
 * @return {number}
 */

// TC - O(H+k), SC - O(H) -> better
 var kthSmallestIterative = function(root, k) {
    let stack = [];
    while(root != null || stack.length > 0) {
        while(root != null){
            stack.push(root);
            root = root.left  
        }
        root = stack.pop();
        if(--k == 0) break;
        root = root.right;
    };
    
    return root.val;
};  

// recursive, TC - O(N), SC - O(N)
let arr = []
var kthSmallest = function(root, k) {
    inOrderTransversal(root)
    return arr[k-1]
}

function inOrder(root) {
    if(root == null) return;
    inOrderTransversal(root.left);
    arr.push(root.val);
    inOrderTransversal(root.right);
}