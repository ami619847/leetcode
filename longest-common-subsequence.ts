function longestCommonSubsequence(text1: string, text2: string): number {
    // // solution 1
    // // memoization
    // // O(m*n) time | O(m*n) space
    // const memo = Array.from({length: text1.length}, () => new Array(text2.length).fill(-1));

    // function longComSub(i: number, j: number): number {
    //     if (i < 0 || j < 0) return 0;
        
    //     if (memo[i][j] !== -1) return memo[i][j];

    //     if (text1[i] === text2[j]) {
    //         memo[i][j] = longComSub(i - 1, j - 1) + 1;
    //     } else {
    //         memo[i][j] = Math.max(longComSub(i - 1, j), longComSub(i, j - 1));
    //     }

    //     return memo[i][j];
    // }

    // return longComSub(text1.length - 1, text2.length - 1);
    
    // solution 2
    // tabulation
    // O(m*n) time | O(m*n) space
    let dp = new Array(text1.length).fill(0);
    let longest = 0;

    for (const c of text2) {
        let currLength = 0;
        
        for (let i = 0; i < dp.length; i++) {
            if (currLength < dp[i]) {
                currLength = dp[i];
            } else if (c === text1[i]) {
                dp[i] = currLength + 1;
                longest = Math.max(longest, currLength + 1);
            }
        }
    }
    
    return longest;
};