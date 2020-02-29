function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
};

var result = sumRange(345)

console.log(result)