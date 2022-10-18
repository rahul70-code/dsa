// https://leetcode.com/problems/add-one-row-to-tree/

function dfs(root, curr_depth, depth, val) {
    // base case

    if (root == null) {
        return;
    }

    // if we are at depth - 1, then we have to insert the new node
    // 1 == 2 - 1 -> yes
    if (curr_depth == depth - 1) {
        // store the address pf root's left subtree

        let prev_left = root.left;

        // store the address of root's right subtree

        let prev_right = root.right;

        // create two new nodes

        let new_node_left = new TreeNode(val);

        let new_node_right = new TreeNode(val);

        // update root -> left and root -> right

        root.left = new_node_left;

        root.right = new_node_right;

        // merge the root's left subtree and root's right subtree

        root.left.left = prev_left;

        root.right.right = prev_right;

        return;
    }

    // call for left subtree

    dfs(root.left, curr_depth + 1, depth, val);

    // call for right subtree

    dfs(root.right, curr_depth + 1, depth, val);
}

var addOneRow = function (root, v, d) {

    if (root == NULL)
        return NULL;

    // edge case
    // if depth = 1 i.e we have to add new node above root.
    if (depth == 1) {
        let new_node = new TreeNode(val);
        new_node.left = root;
        return new_node;
    }
    // dfs(root, curr_depth, depth, val)
    dfs(root, 1, depth, val);

    return root;
}


/**
 steps
 1. currdepth = 1, depth, val, root.
 2. currdepth == depth - 1 => 
 */