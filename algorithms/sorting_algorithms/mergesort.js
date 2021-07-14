function merge(arr1, arr2) {
    let results = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        };
    };

    while (i < arr1.length) {
        results.push(arr1[i]);
    };

    while (j < arr2.length) {
        results.push(arr2[j]);
    }

    return results;
};

function mergeSort(arr) {

};

console.log(merge([12, 32, 1], [32, 44, 2]))