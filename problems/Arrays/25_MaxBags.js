/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
 var maximumBags = function(capacity, rocks, additionalRocks) {
    let diff= [], res=0
    for(let i=0;i<capacity.length; i++) diff.push(capacity[i] - rocks[i])
    diff.sort((a,b) => a-b)
    for(let q=0;q<diff.length;q++) {
        additionalRocks-=diff[q];
        if(additionalRocks<0) return res;
        res++
    }
    return res;
};


console.log(maximumBags([54,18,91,49,51,45,58,54,47,91,90,20,85,20,90,49,10,84,59,29,40,9,100,1,64,71,30,46,91],
    [14,13,16,44,8,20,51,15,46,76,51,20,77,13,14,35,6,34,34,13,3,8,1,1,61,5,2,15,18],
    77))

// console.log(maximumBags([10,2,2],[2,2,0],100))