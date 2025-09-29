function numIslands(grid: string[][]): number {
    let count: number = 0;
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (r, c) => {
        let q = [];
        visited.add(`${r}, ${c}`);
        q.push([r, c]);

        while(q.length > 0) {
            const [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const[dr, dc] of directions) {
                let nr = row + dr;
                let nc = col + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1' && !visited.has(`${nr}, ${nc}`)) {
                    q.push([nr, nc]);
                    visited.add(`${nr}, ${nc}`);
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1' && !visited.has(`${r}, ${c}`)) {
                count ++;
                bfs(r, c);
            }
        } 
    }
    
    return count;
};