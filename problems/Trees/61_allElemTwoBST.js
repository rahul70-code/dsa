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

    /**
     * So, First we will create 2 stacks, one is for root1 & another is for root2. We will traverse Inorderly and fill the stack

    1. If we traverse first on root1 tree on it's left. So in our stack1 we will have [10, 7, 4] and after that the current pointer has reach null
    2. Similarly, we will traverse on root2 tree on it's left. So in our stack2 we will have [5, 3, 2] and after that the current pointer has reach null
    3. Now, we will stop and compare there top values which one is smaller so, 2 is smaller then 4, we will put 2 in our answer list i.e. [2] and pop it from stack2
    4. Again we compare 3 with 4 as 3 is smaller, put 3 in our answer list i.e. [2,3] and pop it from stack2
    5. Now we put 4 from root2 into our stack2 i.e [5,4] and compare with stack2 top value with stack1 they both are similar. So, let's say now we pop 4 from stack1 and put in our answer list i.e. [2,3,4]
    6. Now we will compare 7 from stack1 with 4 from stack2 as 4 is smaller, add it into our answer list i.e. [2,3,4,4] and pop 4 from stack2
    7. Next comparison will be b/w 7 & 5. 5 is smaller add it into our answer list i.e. [2,3,4,4,5] and pop 5 from stack2
    8. Next we will insert 6 in our stack2 and compare 6 with 7. So, 6 is smaller add it into our answer list i.e. [2,3,4,4,5,6] and pop 6 from stack2
    9. So, 6 left is null and right is null as well. It's done
    10. In our stack1 we have [10, 7] we will pop 7 from stack1 & add it into our answer list i.e. [2,3,4,4,5,7]
    11. Now going to 7 right, put 9 in stack and 8 as well. as we reach leaf node we stop and compare stack1 top value with stack2. As, stack2 is already empty no need to compare.
    12. Just simply add 8 in our answer list i.e. [2,3,4,4,5,7,8] and pop 8 from stack1
    13. Moving to 9, it's right is null simply add it into our answer list i.e. [2,3,4,4,5,7,8,9] and pop 9 from stack1
    14. Next is 10, in our stack just pop it & add it into our answer list i.e. [2,3,4,4,5,7,8,9,10] Now we push it's right into stack1
    15. I.e. 12 as 12 is leaf node. We will stop and pop 12 add it into our answer list i.e. [2,3,4,4,5,7,8,9,10,12]
    16. We are done and our final result is :- [2,3,4,4,5,7,8,9,10,12]

     */

// *************************************************************************************

/**
 * Optimised solution
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/464073/C%2B%2B-One-Pass-Traversal
 */ 