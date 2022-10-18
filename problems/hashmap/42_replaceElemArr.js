/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
 var arrayChange = function(nums, operations) {
    let map ={}
    nums.forEach((n,i) => map[nums[i]] = i)
    for(let i=0;i<operations.length;i++) {
        if(operations[i][0] in map) {
            nums[map[operations[i][0]]] = operations[i][1]
            map[operations[i][1]] = map[operations[i][0]]
        };
    }
    return nums;
};


console.log(arrayChange([1,2],
    [[1,3],[2,1],[3,2]]
    ))