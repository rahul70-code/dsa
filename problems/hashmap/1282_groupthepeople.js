/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result = []
    let cache = {};
    for(let grp=0;grp<groupSizes.length; grp++) {
        let num = groupSizes[grp]
        if(cache[num]) cache[num].push(grp);
        else cache[num] = [grp]


      if (cache[num].length === num) {
      result.push(cache[num])
      delete cache[num]
    }
    };

    return result
};

console.log(groupThePeople([3,3,3,3,3,1,3]))