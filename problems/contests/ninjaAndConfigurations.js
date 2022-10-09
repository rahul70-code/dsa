// https://www.codingninjas.com/codestudio/contests/codestudio-weekend-contest-42/6285057/problems/22809?leftPanelTab=0


function largestConfiguration(n, k, arr) {
    let result = [];
    let idx = 0;
    for(let i=0;i<=k;i++) {
        if(arr[i] > arr[i+1]) idx = i;
    }
    for(let i=idx; i<=idx+n-k;i++) result.push(arr[i])
    return result
}


let result = largestConfiguration(5, 3, [2,6,3,4,5])
console.log(result)