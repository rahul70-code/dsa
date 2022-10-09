/**
 * @param {number[][]} grid
 * @return {number}
 */

 function paths(i, j,grid, dp) {
    if(i==0 && j==0) return grid[i][j];
   if(i<0 || j<0) return 100000000000000;
   if(dp[i][j]!=-1) return dp[i][j]
   let up = grid[i][j] + paths(i-1, j,grid, dp);
   let left = grid[i][j] + paths(i,j-1,grid,dp);
   return dp[i][j] = Math.min(up,left);
}
// memoization
var minPathSum = function(grid) {
    let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(-1));
    return paths(grid.length-1,grid[0].length-1,grid, dp)
};


// tabulation
var minPathSum = function(grid) {
    let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(-1));
    // return paths(grid.length-1,grid[0].length-1,grid, dp)
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(i==0 && j==0) dp[i][j] = grid[i][j];
            else {
                let up = grid[i][j], left = grid[i][j];
                if(i>0) up += dp[i-1][j]
                else up = Infinity
                if(j>0) left += dp[i][j-1]
                else left = Infinity
                dp[i][j] = Math.min(up, left)
            }
        }
    }
    return dp[grid.length-1][grid[0].length-1]
};