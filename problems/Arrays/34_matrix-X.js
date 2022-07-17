/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    let check = true;
    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[0].length - 1; j++) {
            console.log(grid[i][j])
            if ((i == j) || (i + j) == (grid.length - 1)) {
                if (grid[i][j] == 0) return false;
            } else {
                if (grid[i][j] != 0) return false;
            }
        }
    }
    return check;
};


console.log(checkXMatrix([
    [6, 0, 0, 0, 0, 0, 0, 18],
    [0, 17, 0, 0, 0, 0, 18, 0],
    [0, 0, 13, 0, 0, 17, 0, 0],
    [0, 0, 0, 9, 18, 0, 0, 0],
    [0, 0, 0, 2, 20, 0, 0, 0],
    [0, 0, 20, 0, 0, 3, 0, 0],
    [0, 14, 0, 0, 0, 0, 11, 0],
    [19, 0, 0, 0, 0, 0, 0, 9]
]))