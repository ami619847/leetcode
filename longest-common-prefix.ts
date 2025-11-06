function longestCommonPrefix(strs: string[]): string {
    if (strs === null || strs.length === 0) return "";

    //Solution 1 - horizontal scanning
    //time complexity: O(n*m) where n is number of strings and m is length of the smallest string
    //space complexity: O(1)
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;

    //Solution 2 - vertical scanning 
    //time complexity: O(n*m) where n is number of strings and m is length of the smallest string
    //space complexity: O(1)

    // for (let i = 0; i < strs[0].length; i++){
    //     let c = strs[0][i];
    //     for (let j = 1; j < strs.length; j++) {
    //         if (i === strs[j].length || strs[j].charAt(i) !== c) {
    //             return strs[0].substring(0, i);
    //         }
    //     }
    // }
    // return strs[0];
};