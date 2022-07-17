/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let res = []
    let map = {};
    for(let i=0;i<s.length;i++) map[s[i]] = i
    let max = 0;
    let prev = -1;
    for(let j=0;j<s.length;j++) {
        max = Math.max(max, map[s[j]]);
        if(max == j) {
            res.push(max-prev);
            prev = max
        }
    }
    return res

};

console.log(partitionLabels("ababcbacadefegdehijhklij"))