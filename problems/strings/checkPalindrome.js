
function reverse(n, temp){
    if(n == 0) return temp;
    temp = (temp*10) + (n%10);
    return reverse(Math.floor(n/10), temp)
}

const isPalindrome = (num) => {
    // console.log(reverse(num, 0))
    if(num == reverse(num, 0)) return true
    else return false;
}



const isPalindrome1 = (num) => {
    const palLogic = (i) => {
        if(i >= num.length/2) return true;
        if(num[i] !== num[num.length-i-1]) return false;
        return palLogic(i+1)
    }
    return palLogic(0)
}


console.log(isPalindrome1("madsm"))