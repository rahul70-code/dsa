/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let cache = {};
    let count = 0
    stones.split("").forEach(stone => {
        if(stone in cache) cache[stone]++;
        else cache[stone] = 1
    });
    console.log(cache)
    for(let jewel of jewels.split("")) {
        if(jewel in cache) count += cache[jewel]
    }
    return count;
};


console.log(numJewelsInStones("aA", "aAAbbbb"))