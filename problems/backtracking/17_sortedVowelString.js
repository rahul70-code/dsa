var countVowelStrings = function(n) {
    let str = 'aeiou'
    let res = 0
    
    function backtrack(i, arr){
        if(arr.length == n){
            res++
            return
        }
        
        for(let j=i;j<str.length;j++){
            arr.push(j)
            backtrack(j, arr)
            arr.pop()
        }
    }
    
    backtrack(0, [])
    return res
};

console.log(countVowelStrings(2))