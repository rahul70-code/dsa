// hard  - https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// brute force
 var maxSlidingWindow = function(nums, k) {
    let result = []
    let i=0,j=k-1
    while(j < nums.length) {
        let temp = []
        for(let d=i;d<=j;d++) temp.push(nums[d])
        result.push(Math.max(...temp));
        i++; j++
    }
    return result
};

// using queue
var maxSlidingWindowQueue = function(nums, k) {
    let q = []
    let result = []
   for(let i=0;i<nums.length;i++) {
    while(q && nums[q[q.length-1]] <= nums[i]) q.pop();
    q.push(i);
    if(q[0] == i-k) q.shift();
    if(i >= k-1) result.push(nums[q[0]])
   }
    return result
};


/**
 * https://leetcode.com/problems/sliding-window-maximum/discuss/65885/This-is-a-typical-monotonic-queue-problem
 * Other Problems can be solved using above
https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
https://leetcode.com/problems/next-greater-element-i/
https://leetcode.com/problems/largest-rectangle-in-histogram/
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

console.log(maxSlidingWindowQueue([1,3,-1,-3,5,3,6,7], 3))