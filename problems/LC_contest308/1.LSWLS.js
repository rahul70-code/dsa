var answerQueries = function(nums, queries) {
    let answer = []
    let pre_sum = []
    nums.sort((a,b) => b-a)
    let sum = 0
    nums.map(n=>{
        sum+=n;
        pre_sum.push(sum)
    })
    for(let i=0;i<queries.length;i++) {
        for(let j=0;j<nums.length;j++){
            if(pre_sum[j]<=queries[j]) {
                answer[i] = j+1
            } else break;
        }
    }
    return answer
};


console.log(answerQueries( [4,5,2,1],
    [3,10,21]))