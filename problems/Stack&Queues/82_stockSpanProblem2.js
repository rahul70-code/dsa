/**
Input: N = 7, price[] = [100 80 60 70 60 75 85]
Output: 1 1 1 2 1 4 6
Explanation: Traversing the given input span for 100 will be 1, 
80 is smaller than 100 so the span is 1, 60 is smaller than 80 so the span is 1,
70 is greater than 60 so the span is 2 and so on. 
Hence the output will be 1 1 1 2 1 4 6.
 */

function calculateSpanBrute(price, n) {
    let ans = [1];
    for(let i=1;i<n;i++){
       ans[i] = 1;
       for(let j=i-1;(j>=0) && (price[i] >= price[j]); j--) ans[i]++
    }
    return ans;
}

function calculateSpan(price, n) {
    let ans = [];
    let stack = [];
    for(let i=0;i<n;i++){
        while(stack.length>0 && price[stack[stack.length-1]] <= price[i])
            stack.pop()
        ans[i] = (stack.length===0) ? (i + 1) : (i - stack[stack.length - 1]);
        stack.push(i)
    }
    return ans;
}


let price = [100 ,80 ,60 ,70 ,60 ,75 ,85];
// 1 1 1 2 1 4 6
let n = price.length;

let soln = calculateSpan(price, n);
console.log(soln)
