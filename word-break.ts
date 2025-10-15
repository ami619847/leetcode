function wordBreak(s: string, wordDict: string[]): boolean {
    // //Solution 1 - memoization
    // //time complexity: O(n^2);
    // //space complexity: O(n);
    // let memo: number [] = new Array(s.length + 1).fill(-1);

    // const memoRecursiveSol = (i: number): boolean => {
    //     if (i === s.length) return true;
    //     //if work was done previously
    //     if (memo[i] !== -1) return memo[i] === 1;

    //     let ans: boolean = false;

    //     for (let word of wordDict) {
    //         //check if the substring matches the word in the dictionary
    //         //if it matches, check if the remaining substring can be broken
    //         if (s.startsWith(word, i)) {
    //             ans = ans || memoRecursiveSol(i + word.length);
    //         }
    //     }

    //     memo[i] = ans ? 1 : 0;
    //     return ans;
    // }

    // return memoRecursiveSol(0);

    //Solution 2 - bottom up
    //time complexity: O(n^2);
    //space complexity: O(n);
    let memo: number[] = new Array(s.length + 1).fill(0);
    memo[s.length] = 1;

    for (let i = s.length - 1; i >= 0; i-- ) {
        let ans: boolean = false;

        for (let j = 0; j < wordDict.length; j++) {
            //check if the substring matches the word in the dictionary
            //if it matches, check if the remaining substring can be broken
            if (s.substring(i, i + wordDict[j].length) === wordDict[j]) {
                ans = ans || memo[i + wordDict[j].length] === 1;
            }
        }
        memo[i] = ans ? 1 : 0;
    }

    return memo[0] === 1; 
};