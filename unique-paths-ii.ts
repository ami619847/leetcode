// grid - O(m*n) time, O(n) space

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (!obstacleGrid || obstacleGrid[0][0] === 1) return 0;

    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const dp = new Array(cols).fill(0);

    //starting cell
    dp[0] = 1;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (obstacleGrid[r][c] === 1) {
                //no path to reach the obstacle cell
                dp[c] = 0;
            } else {
                if (c > 0) { 
                    //cell above + cell to the left
                    dp[c] += dp[c - 1];
                }
            }
        }
    }
    
    return dp[cols - 1];
};