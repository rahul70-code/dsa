const { performance } = require('perf_hooks');
let mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6], nums = [991, 338, 38]


const getRealValue1 = (mapping, value) => +(('' + value).split('').map(v => mapping[v]).join(''));

const getRealValue2 = (mapping, value) => {
    if (value === 0) return mapping[0];
    let realValue = 0;
    let carry = 1;
    while (value > 0) {
        const digit = value % 10;
        realValue += mapping[digit] * carry;
        carry *= 10;
        value = (value / 10) >> 0;
    }
    return realValue;
};
const sortJumbled = (mapping, nums) => {
    const cache = {};
    for (const num of nums) {
        cache[num] = getRealValue1(mapping, num);
    }
    console.log(cache)
    return nums.sort((a, b) => cache[a] - cache[b]);
};

var startTime = performance.now()

let result = sortJumbled(mapping, nums)  // <---- measured code goes between startTime and endTime
    
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
console.log(result)