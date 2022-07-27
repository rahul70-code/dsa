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
 * @return {number}
 */
//  dfs
var minDepth = function (root) {
    if (root == null) return 0;
    else {
        if (root.left == null && root.right == null) return 1;
        if (root.left == null) return minDepth(root.right) + 1
        if (root.right == null) return minDepth(root.left) + 1
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1
    }
};

var minDepthBFS = function(root) {
    if(!root) return 0;
    let depth = 1;
    let queue = [root];
    if(!root.left && !root.right) return depth;

    while(queue.length > 0 ){
      let queueLength = queue.length;

      for(let i = 0; i < queueLength; i++){
        let node = queue.shift();

        if(!node.left && !node.right) return depth;
        else{
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
      }

      depth++;
    }

    return depth;
};



/** // c++
 * // Using BFS
   int minDepth(TreeNode* root) {
    if (root == NULL) return 0;
    queue<TreeNode*> Q;
    Q.push(root);
    int i = 0;
    while (!Q.empty()) {
        i++;
        int k = Q.size();
        for (int j=0; j<k; j++) {
            TreeNode* rt = Q.front();
            if (rt->left) Q.push(rt->left);
            if (rt->right) Q.push(rt->right);
            Q.pop();
            if (rt->left==NULL && rt->right==NULL) return i;
        }
    }
    return -1; //For the compiler thing. The code never runs here.
}
 */

/** // java
 * class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int depth = 1;
        while (!q.isEmpty()) {
            int size = q.size();
            while (size-- > 0) {
                TreeNode curr = q.poll();
                if (curr.left == null && curr.right == null) // Reach to leaf node
                    return depth;
                if (curr.left != null)
                    q.offer(curr.left);
                if (curr.right != null)
                    q.offer(curr.right);
            }
            depth += 1; // Go to next level
        }
        return -1; // Unreachable
    }
}
 */