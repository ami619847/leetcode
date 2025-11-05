//time complexity: O(n)
//space complexity: O(1)
function convertToTitle(columnNumber: number): string {
    let ans: string[] = [];

    while (columnNumber > 0) {
        columnNumber--;

        //get last char and append it at the end of the string
        ans.push( String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) );
        columnNumber = Math.floor(columnNumber / 26);
    }
    // reverse answer
    return ans.reverse().join("");
};