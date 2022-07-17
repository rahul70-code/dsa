/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let swap = (nums, n1, n2) => {
//     let temp = nums[n1];
    
// }
var rearrangeArray = function(nums) {
    let result = Array(nums.length).fill(0);
    let ps = nums.filter(n => n>0)
    let ng = nums.filter(n => n<0)
    console.log(ps)
    console.log(ng)

    for(let i=0;i<ps.length;i++) result[i+2] = ps[i]
    // for(let j=1;j<ng.length;j=+2) result[j] = ng[i]
     return result;
  };


  console.log(rearrangeArray([3,1,-2,-5,2,-4]))