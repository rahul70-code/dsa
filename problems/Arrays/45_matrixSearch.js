/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let start = 0, end = (matrix.length * matrix[0].length) - 1
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        let midNum = 
            matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length]
        
        if(midNum === target) return true    
        else if(midNum < target) start = mid + 1
        else end = mid - 1
    }
    return false

};

console.log(searchMatrix([[1,3,5,7,8],[10,11,16,20,22],[23,30,34,60,62]], 1))