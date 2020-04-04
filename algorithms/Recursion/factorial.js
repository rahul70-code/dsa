function factorial(num) {
    if(num === 1 || num === 0) return 1;
    return num * factorial(num-1);
};

var result = factorial(5)

console.log(result)