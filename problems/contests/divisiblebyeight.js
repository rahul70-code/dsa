function divisibleByEight(s) {
    // Write your code here.
    let count = 0;
    let idx = s.indexOf("#");
    for(let i=0;i<10;i++) {
        let str = s.substr(0,idx) + i + s.substr(idx+1,s.length)
        if(+str%8 == 0) count++;
    }
    return count;
}



console.log(divisibleByEight("###"))

