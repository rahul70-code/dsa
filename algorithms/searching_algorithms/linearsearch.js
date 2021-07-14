const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

const result = linearSearch([1,4,5,3],5);
console.log(result)