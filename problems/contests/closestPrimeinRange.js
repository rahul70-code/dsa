/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    for(let i = 2; i < sqrtnum + 1; i++){
       if(num % i === 0){
          prime = false;
          break;
       };
    };
    return prime;
 }
 const nextPrime = (num = 1) => {
    while(!isPrime(++num)){
    };
    return num;
 };
var closestPrimes = function(left, right) {
    // console.log(left,right)
    let primesInBetween = new Set();
    for(let i=left;i<=right;i++) {
        console.log(i)
        let next= nextPrime(i)
         primesInBetween.add(next)
    }
    if(primesInBetween.size <= 1) return [-1,-1];
    else {
        let [first,second] = primesInBetween
        return [first, second]
    }
};

console.log(closestPrimes(19,31))