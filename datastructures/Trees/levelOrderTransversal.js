class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    height(root) {
        if(root == null) return 0;
        else {
            let lH = this.height(root.left);
            let rH = this.height(root.right);
            if(lH > rH) return lH+1;
            else return rH+1
        }
    }

    levelOrderUsingTreeHeight() {
        
    }


    levelOrderUsingQueue() {
        /**
         * level wise insert nodes in queue root, left, right.
         * push each node's value in array
         * return array
         */
        var data = [],
          queue = [],
          node = this.root;
        queue.push(node);
        while (queue.length) {
          node = queue.shift();
          data.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        };
        return data;
      };

}

