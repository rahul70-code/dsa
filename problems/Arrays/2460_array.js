// https://leetcode.com/contest/weekly-contest-318/problems/apply-operations-to-an-array/
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0
        }
    }
    // move zeros at the end code
    /** IMP */
    let count = 0;
    for (let i = 0; i < nums.length; i++)
        if (nums[i] != 0)
            nums[count++] = nums[i];

    while (count < nums.length)
        nums[count++] = 0;
    /** IMP */

    return nums
};


console.log(applyOperations([1, 2, 2, 1, 1, 0]))