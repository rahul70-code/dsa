function palindromeArray(arr) {
    for (let el of arr)
        if (!(el === +el.toString().split("").reverse().join("")))
            return false
    return true
}


console.log(palindromeArray([111, 222, 333, 444, 555]))