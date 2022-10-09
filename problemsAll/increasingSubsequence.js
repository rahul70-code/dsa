function Subseq(arr, i, n, ds, prev) {
    if(i == n) {
        if(ds.length == 3)
        return;
    };

    if(arr[i] > prev) {
        ds.push(arr[i])
        incSubseq(arr, i+1, n,ds, arr[i])
        ds.pop()
    };
    // console.log(ds)
    incSubseq(arr, i+1, n, ds, prev);
}

function Subseq(arr, i, n, prev) {
    if(i == n) {
        // if(ds.length == 3)
        // console.log("subseq: ",ds)
        return 0;
    };
    let inc = 0
    if(arr[i] > prev) {
        // ds.push(arr[i])
      inc =   incSubseq(arr, i+1, n, arr[i])
        // ds.pop()
    };
    // console.log(ds)
    let exc = incSubseq(arr, i+1, n, prev);
    return Math.max(inc, exc)
}






let array = [1,2,4,2,5,6]
let n = array.length
Subseq(array, 0, n, [], -1000000)