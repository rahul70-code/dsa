// 62 - https://leetcode.com/problems/unique-paths/
// 63 - https://leetcode.com/problems/unique-paths-ii/
// 980 - https://leetcode.com/problems/unique-paths-iii/
// 2304 - https://leetcode.com/problems/minimum-path-cost-in-a-grid/


function paths(i, j, dp) {
    if (i == 0 && j == 0) return 1;
    if (i < 0 || j < 0) return 0;
    if (dp[i][j] != -1) return dp[i][j]
    let up = paths(i - 1, j, dp);
    let left = paths(i, j - 1, dp);
    return dp[i][j] = up + left;
}
// memoization
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));
    return paths(m - 1, n - 1, dp)
};

// tabulation
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) dp[i][j] = 1;
            else {
                let up = 0;
                let left = 0;
                if (i > 0) up = dp[i - 1][j]
                if (j > 0) left = dp[i][j - 1]
                dp[i][j] = up + left
            }
        }
    }
    return dp[m - 1][n - 1]
};


/*********************************** */
// unique paths 2
/**
* @param {number[][]} obstacleGrid
* @return {number}
*/


function paths(i, j, dp, o) {
    if (i >= 0 && j >= 0 && o[i][j] == 1) return 0;
    if (i == 0 && j == 0) return 1;
    if (i < 0 || j < 0) return 0;
    if (dp[i][j] != 0) return dp[i][j]
    let up = paths(i - 1, j, dp, o);
    let left = paths(i, j - 1, dp, o);
    return dp[i][j] = up + left;
}

var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    // console.log(m,n)
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // dp
    return paths(m - 1, n - 1, dp, obstacleGrid)
};

/*********************************** */
// unique paths 3





/*********************************** */
// unique paths 3
// Minimum Path Cost in a Grid