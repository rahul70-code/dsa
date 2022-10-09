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
var zigzagLevelOrder = function (root) {
    if (root == null) return []
    /**
  * level wise insert nodes in queue root, left, right.
  * push each node's value in array
  * return array
  */
    var data = [],
        queue = [root],
        l = false;
    while (queue.length) {
        let qLen = queue.length;
        let currLevel = []
        for (let i = 0; i < qLen; i++) {
            let curr = queue.shift();
            if (l % 2 == 0) currLevel.push(curr.val);
            else currLevel.unshift(curr.val);
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        data.push(currLevel)
        l++
    };
    return data;
};