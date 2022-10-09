/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 function solve(n, dp) {
    if (n % 2 == 0) return dp[n] = [];
    if (dp[n] !== -1) return dp[n];
    if (n === 1) return dp[n] = [new TreeNode(0)];
    let ans = [];
    for (let ctr = 1; ctr < n; ctr+=2) {
        // possible combination of left subtree
        let left = solve(ctr, dp);
        // possible combination of right subtree
        let right = solve(n-1-ctr, dp);
        for (let row = 0; row < left.length; row++) {
            for (let col = 0; col < right.length; col++) {
                // construct tree for left and right
                const node = new TreeNode(0);
                node.left = left[row];
                node.right = right[col];
                ans.push(node)
            }
        }
    }
    return dp[n] = ans;
}

var allPossibleFBT = function (n) {
    let dp = new Array(n + 1).fill(-1);
    return solve(n, dp);
};


/**
 * Explanation
 * Base cases - 
 * 1. if n=0 or multiple of 2 (n%2==0) -> FBT not possible -> return empty array.
 * 2. if n=1, return one node.
 * 3. for memoization, return dp[n] if cached.
 * 
 * Recursive part
 * 1. first get the all possible node combination from left and right subtree -> recursion
 * 2. for all the combinations, find all the permutations using nested loops and push them in array,
 * return the array of arrays and cache it.
 */