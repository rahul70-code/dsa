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

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if(val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        };
      };
    };
  };

  find(val) {
    if(this.root === null) return false;
    var current = this.root;
    var found = false;
    while(current && !found) {
        if(val < current.val) {
            current = current.left;
        } else if(val > current.val) {
            current = current.right;
        } else {
            found = true;
        }
    };
    if(!found) return undefined;
    return current;
  };

  // if return true or false while finding node
//   find(val) {
//     if(this.root === null) return false;
//     var current = this.root;
//     var found = false;
//     while(current && !found) {
//         if(val < current.val) {
//             current = current.left;
//         } else if(val > current.val) {
//             current = current.right;
//         } else {
//             return true;
//         }
//     };
//     return false;
//   }

    BreathFirstSearch() {
        var data = [], 
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        };
        return data;
    };

    DFSPreOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        };
        traverse(current);
        return data;
    };

    DFSPostOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        };
        traverse(current);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
// tree.insert(3);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder())

// tree.insert(9);
// tree.insert(12);
// tree.insert(14)
// tree.insert(11)
// tree.insert(15)

// console.log(tree)
// console.log(tree.BreathFirstSearch());

// tree.root = new Node(13);
// tree.root.left = new Node(11);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(9);
// tree.insert(10);
// tree.insert(12)
// tree.insert(9)
// tree.insert(11)
// tree.insert(13)
// tree.insert(8)
// tree.insert(9.5)
// console.log(tree.insert(14))
// console.log(tree.find(9))
// console.log(tree)
// console.log(tree.root.right);
