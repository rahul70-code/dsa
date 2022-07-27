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
 * @param {number} target
 * @return {TreeNode}
 */
 var removeLeafNodes = function(root, target) {
    const parent = new TreeNode(-1, root, null);
    
    const traverse = (r = root, p = parent, child = -1) => {
        if(!r) return null;
        traverse(r.left, r, -1);
        traverse(r.right, r, 1);
        if(r.left == null && r.right == null && r.val == target) {
            if(child == -1) p.left = null;
            else p.right = null;
        }
    }
    traverse();
    return parent.left;
};

// After reading the problem, it's pretty straight forward to think about the post order traversal strategy to solve this problem. 
// And I choose recursion here to implement it.
const removeLeafNodes = (node, target) => {
    node.left && (node.left = removeLeafNodes(node.left, target));
    node.right && (node.right = removeLeafNodes(node.right, target));
    return node.left === node.right && node.val === target ? null : node;
  };
  