let s ="U7:X9";
let r1 = s.split(":")[0][0].charCodeAt()
let r2 = s.split(":")[1][0].charCodeAt()
let result = []
for(let i=0;i<r2-r1+1;i++) {
    console.log(i)
    for(let j=+s.split(":")[0][1];j<+s.split(":")[1][1]+1;j++)
    result.push(String.fromCharCode(s.split(":")[0][0].charCodeAt() + i) + Number(j))
}
// // return result
console.log(result)

