//time complexity: O(n)
//space complexity: O(1)
function titleToNumber(columnTitle: string): number {
    let ans: number = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        ans = ans * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    
    return ans;
};