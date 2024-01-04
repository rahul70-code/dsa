/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++) {
        set.add(+nums[i]);
        let reverse = nums[i].toString().split("").reverse().join("")
        set.add(+reverse)
    }
    return set.size
};
