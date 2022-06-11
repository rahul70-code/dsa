function insertionSort(arr) {
    // performs sort from 2nd element onwards;
    // take currVal = 2nd elem initially
    // j = 1st elem , if (j till 0th index && arr[j] > curr) loop
    // shift elements rightwards arr[j+1] = arr[j]
    // once arr[j] < curr -> insert element on that place
    for(var i=1;i<arr.length;i++){
        var currentVal = arr[i];
        for(j=i-1;j>=0 && arr[j]>currentVal;j--) {
            arr[j+1] = arr[j];
        };
        arr[j+1] = currentVal;
    }
    return arr;
};

console.log(insertionSort([23,43,12,2,67,1]))