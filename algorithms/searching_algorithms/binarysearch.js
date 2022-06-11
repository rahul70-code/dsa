const binarySearch = (array, num) => {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (num !== array[mid] && left < right) {
        if (num < array[mid]) right = mid - 1;
        else if (num > array[mid]) left = mid + 1;
        mid = Math.floor((left + right) / 2);
    }

    if (num === array[mid])
        return mid;

    return -1;
}


const result = binarySearch([1, 4, 5, 6], 5)
console.log(result)