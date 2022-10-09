// https://leetcode.com/problems/max-area-of-island/


function maxAreaOfIsland(grid) {
    let max_area = 0;
    for(let i=0;i<grid.length;i++) 
        for(let j=0;j<grid[0].length;j++) 
            if(grid[i][j] == 1) max_area = Math.max(max_area, AreaOfIsland(grid, i, j))
        
    return max_area
}

function AreaOfIsland(grid, i, j) {
    if(i>=0 && i<grid.length && j>=0 && j<grid[0].length && grid[i][j] == 1){
        grid[i][j] = 0;
        return 1 + AreaOfIsland(grid, i+1,j) + AreaOfIsland(grid, i-1, j) + AreaOfIsland(grid, i, j+1) + AreaOfIsland(grid, i, j-1)
    }   
    return 0;
}


let result = maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]);
console.log(result)


