
// iterative version
const binarySearch = (array, key) => {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    // if key is not equal to mid and left point not reached till end
    while (key !== array[mid] && left < right) {
        // if key val is less than arr's mid take right as mid-1 i.e 0 to mid-1
        if (key < array[mid]) right = mid - 1;
        // if key val is greater than arr's mid take left as mid+1 i.e mid+1 to arr length
        else if (key > array[mid]) left = mid + 1;
        // take new mid
        mid = Math.floor((left + right) / 2);
    }

    if (key === array[mid])
        return mid;

    return -1;
}

const binarySearchRecursive = (arr, l, r, key) => {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == key) return mid;
        if (arr[mid] > key) return binarySearchRecursive(arr, l, mid - 1, key);
        return binarySearchRecursive(arr, mid + 1, r, key)
    }
    return -1;

}

const bs = (array, key) => {
    return binarySearchRecursive(array, 0, array.length - 1, key)
}

const result = bs([1, 4, 5, 6], 5)
console.log(result) 