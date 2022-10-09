function anagramMapping1(A,B) {
    let result = [];
    A.map(a => {
         result.push(B.findIndex(b => b == a))
    });

    return result;
}

function anagramMapping2(A,B) {
    let map = {};
    for(let i=0;i< B.length;i++){
        map[B[i]] = i
    }
    let ans = [];
    for(let j=0;j<A.length;j++) {
        ans[j] = map[A[j]]
    }
    return ans
}


const result = anagramMapping2([12, 28, 46, 32, 50],[50, 12, 32, 46, 28])
console.log(result)