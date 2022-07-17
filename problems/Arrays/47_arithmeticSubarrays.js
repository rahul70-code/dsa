/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
 var checkArithmeticSubarrays = function(nums, l, r) {
    let result = [];
    for(let i=0;i<l.length;i++) {
        let subNums = [...nums].slice(l[i], r[i]+1);
        subNums = subNums.sort((a,b) => a-b);
        let diff = subNums[1]-subNums[0];
        let s = true
        for(let j=0;j<subNums.length-1;j++) {
            if(!(subNums[j+1]-subNums[j] == diff))
                s = false
        }
        result.push(s)
    }
    return result
};


console.log(checkArithmeticSubarrays([4,6,5,9,3,7],[0,0,2],[2,3,5]))