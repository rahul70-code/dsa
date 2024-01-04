let result = []
function genSubarrays(arr, s, e) {
    console.log(e)
    if(e == arr.length) return;
    else if(s > e) genSubarrays(arr, 0, e+1);
    else {
        let a = []
        for(let i=0;i<e;i++) {
            result.push(a[i])
        }
        result.push(a)
        genSubarrays(arr, s+1, e)
    }
    return
}


genSubarrays([1,2,3], 0, 0)
console.log(result)