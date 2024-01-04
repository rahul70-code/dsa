// https://leetcode.com/problems/build-an-array-with-stack-operations/submissions/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    let result = [];
    let ann = [];
    for(let j=1;j<=n;j++) ann.push(j)
    let k=0;
    for(let i=0;i<ann.length;i++) {
        if(ann[i] == target[k]) {
            result.push("Push")
            k++
        }
        else if(k!==target.length)result.push("Push","Pop");
        n--;
    }
    return result;
};

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray1 = function(target, n) {
    let result = [];
    let j=0;
    for(let i=1;i<=n && j<target.length;i++) {
        result.push("Push")
        if(target[j] == i) j++
        else result.push("Pop")
    }
    return result;
};

console.log(buildArray1([1,2],4))