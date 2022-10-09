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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    var data = [];
    let queue = [root]
    while (queue.length) {
      let qLen = queue.length;
      let currLevel = 0;
      let c = 0
      for (let i = 0; i < qLen; i++) {
        let curr = queue.shift();
        c++
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
        currLevel+=curr.val
      }
      data.push((currLevel/c).toFixed(5))

    };
    return data;
};