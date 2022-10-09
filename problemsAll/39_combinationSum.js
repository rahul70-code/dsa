var combinationSum = function(candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            // if target = 0, push array in answer and return
            result.push([...tempDataStruct])
            return
        }
        // if target < 0 also return
        if(target < 0) return;
        // loop through index and push in array and backtrack
        // take and not take
        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            backtracking(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
};