/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const res = [], queue = [];
    let depth = 0, num = 0;
    if (root) queue.push(root);
    while (queue.length) {
        res.push([]);
        num = queue.length;
        for (let i = 0; i < num; i++) {
            const curr = queue.shift();
            if (!curr) continue;
            res[depth].push(curr.val);
            queue.push(...curr.children);
        }
        depth++;
    }
    return res;
};


// Recursive

/**
 * @param {Node} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const res = [];
    BFS(root, 0);
    return res;
    
    function BFS(node, depth) {
        if (!node) return;
        if (depth === res.length) {
            res.push([]);
        }
        res[depth].push(node.val);
        for (child of node.children) {
            BFS(child, depth + 1);
        }
    }
};