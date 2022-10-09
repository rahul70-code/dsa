// 37 - https://leetcode.com/problems/sudoku-solver/
// 36 - https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    solve(board);
};

function solve(board) {
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<board[i].length;j++) {
            if(board[i][j] == ".") {
                for(let c="1";c<"9";c++) {
                    if(valid(board,i,j,c)) {
                        board[i][j] = c
                        if(solve(board)) return true
                        else board[i][j] = "."
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function valid(board, row, col, c) {
    // console.log(board)
    for(let i=0;i<9;i++) {
        if(board[row][i] == c) return false
        if(board[i][col] == c) return false
        // console.log("dmdmf",board[3 * (row/3) + (i/3)][3 * (col/3) + (i%3)] )
        if(board[3 * (row/3) + (i/3)][3 * (col/3) + (i%3)] == c) return false; 
    }
    return true;
}