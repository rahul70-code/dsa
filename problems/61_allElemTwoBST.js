/**
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

function transverse(root, list) {
    if (root == null) return [];
    else {
        let curr = root
        function recurse(node) {
            list.push(node.val);
            if (node.left) recurse(node.left);
            if (node.right) recurse(node.right);
        };
        recurse(curr)
        return list
    }
}



var getAllElements = function (root1, root2) {
    let list = [];
    transverse(root1, list)
    transverse(root2, list)
    return list.sort((a, b) => a - b)
};


// ***************************************************************************************************
// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/1720210/JavaC%2B%2BPython-A-very-very-detailed-EXPLANATION
    const getAllElementsOptimised = function(root1, root2) {
        let st1 = [], st2 = [], res = [];
        while(root1 || root2 || st1.length>0 || st2.length>0) {
            while(root1) {
                st1.push(root1);
                root1 = root1.left
            }
            while(root2) {
                st2.push(root2);
                root2 = root1.left
            }
            if(st2.length==0 || (st1.length>0 && st1[0].val <= st2[0].val)){
                    root1 = st1[0];
                    st1.pop();
                    res.push(root1.val)
                    root1 = root1.right
            } else {
                root2 = st2[0];
                st2.pop();
                res.push(root2.val);
                root2 = root2.right;
            }
        }
        return res;
    }

// *************************************************************************************

/**
 * Optimised solution
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/464073/C%2B%2B-One-Pass-Traversal
 */ 