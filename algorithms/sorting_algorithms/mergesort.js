function merge(left, right) {
    let arr = []
    while(left.length && right.length) {
        if(left[0] < right[0]) arr.push(left.shift())
        else arr.push(right.shift())
    }
    return [...arr, ...left, ...right]
}

console.log(merge([12, 32, 1], [32, 44, 2])) 