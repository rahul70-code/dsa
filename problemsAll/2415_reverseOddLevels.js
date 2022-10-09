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

function revOdd(root1, root2, level) {
    if ((root1.left == null && root1.right == null)
        || (root2.left == null && root2.right == null))
        return;

    if (level % 2 == 0) {
        let temp = root1.left.val;
        root1.left.val = root2.right.val;
        root2.right.val = temp;
    }
    revOdd(root1.left, root2.right, level + 1);
    revOdd(root1.right, root2.left, level + 1);
}


var reverseOddLevels = function (root) {
    let level = 0
    revOdd(root, root, level)
    return root

};