/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
 var findingUsersActiveMinutes = function(logs, k) {
    let result = Array(k).fill(0);
    let map = {}
    logs.forEach(l => {
        if(l[0] in map) map[l[0]] = map[l[0]].add(l[1])
        else map[l[0]]  = new Set([l[1]]) 
    })
    
    for(let [key, val] of Object.entries(map) ){
        result[val.size-1] += 1
    }
    
    return result;
};

console.log(findingUsersActiveMinutes([[1,1],[2,2],[2,3]],4))