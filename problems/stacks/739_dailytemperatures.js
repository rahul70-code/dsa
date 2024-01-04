/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(tm) {
    let n = tm.length;
    let stack = [];
    let result = new Array(n).fill(0);
    for(let t=0;t<n;t++){
        while(stack.length > 0 && tm[t] >  tm[stack[stack.length - 1]]) {
            let prv = stack.pop()
            result[prv] = t - prv;
        }
        stack.push(t)
    }
    return result;
};

dailyTemperatures([73,74,75,71,69,72,76,73])