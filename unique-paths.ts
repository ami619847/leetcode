// grid - O(m*n) time
// only 2 rows maintain at the same time - O(n) space

// 1  1  1
// 1  2  3
// 1  3  6

function uniquePaths(m: number, n: number): number {
    let aboveRow = Array(n).fill(1);

    for (let row = 1; row < m; row++) {
        let currRow = Array(n).fill(1);

        for (let col = 1; col < n; col++) {
            currRow[col] = currRow[col - 1] + aboveRow[col];
        }

        aboveRow = currRow;
    }

    return aboveRow[n - 1];
};