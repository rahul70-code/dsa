

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
 var createBinaryTree = function(descriptions) {
    let seen = new Set(), root = null;
    for(let d of descriptions) seen.add(d[1])
    for(let d of descriptions) if(!seen.has(d[0])) root = new TreeNode(d[0])
    const buildTree = (node) => {
        for(const d of descriptions.filter(x => x[0] == node.val)) {
            if(d[2] == 1) {
                let left = new TreeNode(d[1])
                node.left = left;
                buildTree(left)
            }
            if (d[2] == 0) {
                let right = new TreeNode(d[1]);
                node.right = right;
                buildTree(right);
            }
        }

    }
    buildTree(root);
    return root;
 };

 console.log(createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]))