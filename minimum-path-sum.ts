// grid - O(m*n) time, O(1) space

function minPathSum(grid: number[][]): number {
    let n = grid.length;
    let m = grid[0].length;

    //for columns       
    //first column can only be reached from one direction
    for (let col = 1;  col < n; col++) {
        grid[col][0] += grid[col - 1][0];
    }

    //for rows
    //first row can only be reached from one direction
    for (let row = 1; row < m; row++) {
        grid[0][row] += grid[0][row - 1];
    }

    //for rest of the grid
    for (let c = 1; c < n; c++) {
        for (let r = 1; r < m; r++) {
            //cell can be reached either from above or left
            grid[c][r] += Math.min(grid[c - 1][r], grid[c][r - 1])
        }
    }

    return grid[n - 1][m - 1];
};