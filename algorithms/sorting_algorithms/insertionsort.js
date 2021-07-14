function insertionSort(arr) {
    for(var i=1;i<arr.length;i++){
        var currentVal = arr[i];
        for(j=i-1;j>=0 && arr[j]>currentVal;j--) {
            arr[j+1] = arr[j];
            // console.log("1",arr)
        };
        // console.log("2",arr)
        arr[j+1] = currentVal;
    }
    return arr;
};

console.log(insertionSort([23,43,12,2,67,1]))