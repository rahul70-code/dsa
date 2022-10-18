var numSplits = function(s) {
    let map1 = {};
    let map2 = {};
    let cnt = 0
    for(let i=0;i<s.length-1;i++){
        map1[s.slice(0,i+1)] = new Set(s.slice(0,i+1)).size
        map2[s.slice(i+1,s.length)] = new Set(s.slice(i+1,s.length)).size
    }
    for(let j=0;j<s.length-1;j++) {
        if(map1[s.slice(0,j+1)] == map2[s.slice(j+1,s.length)]) cnt++;
    }
    return cnt;
};


let result = numSplits("aacaba")
console.log(result)