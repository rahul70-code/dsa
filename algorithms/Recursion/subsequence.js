// Print all the subsequence
// contigious and non-contiguous sequence, which follows the **order**.

/**
 *   arr -> [1,2,3]
 *   subseq - 1, 2, 3, 12, 23, 13, 123
 *   Pattern
 *      3 elems
 *       take and not take 
 *      _ _ _ take, take, not take (1,2) 
 *      _ _ _ not take, take, take (2,3) 
 *      Observing - couple of options
 *     
 * 
 */
        // 0 1 2    (INDEX)
let arr = [1,2]
// base case - index less than equal to length of array
function subseq(idx,arr, arr1) {
    if(idx >= arr.length){
        console.log(arr1)
        return;
    }
    // take or pick the particular index into subsequence. 
    arr1.push(arr[idx]);
    subseq(idx+1,arr, arr1);
    // not pick or not take this condition, this elem not added to subsequence.
    arr1.pop()
    subseq(idx+1,arr, arr1)
}
let res = subseq(0,arr, [])
console.log(result)
// console.log(res)

