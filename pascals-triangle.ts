//time: O(n^2), space: O(n^2)
//dynamic programming approach with 1D array to store each row

function generate(numRows: number): number[][] {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    let prevRows = generate(numRows - 1);
    let prevRow = prevRows[prevRows.length - 1];
    //initialize 1D array to sotre the curr row
    let currRow = [1];

    //interate the middle values to update curr row
    for (let i = 1; i < numRows - 1; i++) {
        currRow.push(prevRow[i - 1] + prevRow[i]);
    }

    currRow.push(1);
    prevRows.push(currRow);

    return prevRows;    
};