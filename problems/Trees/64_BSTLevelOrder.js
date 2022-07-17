// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrderRecursive = function(root, levels = [], level = 0) {
    if(!root) return []
    if(!levels[level]) levels[level] = []
    levels[level].push(root.val)
    
    if(root.left) levelOrder(root.left, levels, level + 1)
    if(root.right) levelOrder(root.right, levels, level + 1)
    
    return levels
};

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
 * @return {number[][]}
 */
 var levelOrderIterative = function(root) {
    // If root is null return an empty array
    if(!root) return []
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declare output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}