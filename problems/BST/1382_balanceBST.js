// https://leetcode.com/problems/balance-a-binary-search-tree/
// https://leetcode.com/problems/balance-a-binary-search-tree/discuss/2685505/javascript-same-as-sorted-array-to-bst
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
 let inOrder = (root) => {
    var data = [];
       var current = root;
       function traverse(node) {
         if (node.left) traverse(node.left);
         data.push(node.val);
         if (node.right) traverse(node.right);
       };
       traverse(current);
       return data
   }
    var balanceBST = function(head) {
       // take values of nodes -> in array for divide and conquer -> create BST
       /**
        * 1. Put all the values in Array.
        * 2. Recursively calculate mid                 |
        * 3. create left tree node with left value     |  Same as divide & conquer (Merge Sort)
        * 4. create right tree node with right value   |
        */
       // convert 
       let arr = inOrder(head);
       function bst(arr,left,right){
           if(left > right) return null
           const mid = Math.floor((left+right)/2)
           const tree = new TreeNode(arr[mid])
           tree.left = bst(arr,left,mid-1)
           tree.right = bst(arr,mid+1,right)
           return tree
       }
   
       return bst(arr,0,arr.length-1)
   };