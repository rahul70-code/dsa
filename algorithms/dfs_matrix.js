// Approach
/**
 * * use stack ds
 * 1. initialize stack s, (0,0)
 * 2. auxiliary 2d array, N*M -> all values as false
 * used to mark as visited cells.
 * 3. isValid() fn -> cell cordinates are valid or not
 * i.e lies within boundry and is unvisited or not.
 * 4. iterate while the stack is not empty
 * pop the cell present at the top of stack and print element
 * push the cell adjacent to the above popped cells into the stack
 * if they are valid using isValid fn
 * 5. declare direction vectors - (x-1,y),(x,y+1),(x+1,y),(x,y-1)
 */
// Javascript program of the above approach
var ROW = 3;
var COL = 3

// Initialize direction vectors
var dRow = [0, 1, 0, -1];
var dCol = [-1, 0, 1, 0];

function isValid(vis, row, col) {
    // If cell is out of bounds
    if (row < 0 || col < 0
        || row >= ROW || col >= COL)
        return false;

    // If the cell is already visited
    if (vis[row][col])
        return false;

    // Otherwise, it can be visited
    return true;
}

function DFS(row, col, grid, vis) {

}

// Driver Code
var grid = [[-1, 2, 3], [0, 9, 8], [1, 0, 1]];
// Stores whether the current
// cell is visited or not
var vis = Array.from(Array(ROW), () => Array(COL).fill(false));
// Function call
DFS(0, 0, grid, vis);