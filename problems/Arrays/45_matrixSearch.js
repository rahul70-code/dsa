/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let n = matrix.length;
         let m = matrix[0].length;
         
         // if matrix have 0 rows or 0 colums
         if(n == 0 || m == 0)
             return false;
         
         // treating matrix as array just taking care of endices
         // [0..n*m]
         let start = 0, end = m*n - 1;
         
         while(start <= end)
         {
             let mid = Math.floor(start + (end - start) / 2);
             console.log("mid", mid)
             // a[x] : matrix[x / m][x % m] formulae
             let ind = Math.floor(matrix[mid/m][mid%m]);
             if (target == ind)
                 return true;
             // left half
             else if(target < ind)
                 end = mid - 1;
             else
             // right half
                 start = mid + 1;       
         }
         return false;
     
 };

 console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))