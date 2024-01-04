/**
 * @param {number[]} nums
 * @return {number}
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
 
 var distinctPrimeFactors = function(nums) {
     let currPrime = 2;
     let product = 1;
     let resultantPrimeFactors = []
     nums.forEach(num => product = product*num);
     while(product>1) {
         if(product%currPrime == 0) {
             product = product/currPrime;
             if(!resultantPrimeFactors.includes(currPrime)) resultantPrimeFactors.push(currPrime)
         }
         else currPrime = nextPrime(currPrime);
     }
     return resultantPrimeFactors.length;
 };


 console.log(distinctPrimeFactors([2,4,8,16]))