function groupAnagrams(strs: string[]): string[][] {
    let anagrams = {};

    // Solution 1
    for (let s of strs) {
        let key = s.split('').sort().join('');
        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(s);
    }

    // Solution 2
    // for (let s of strs) {
    //     let count = new Array(26).fill(0);

    //     //counting each letter in the string
    //     for (let c of s) {
    //         count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    //     }

    //     let key = count.join('#');
    //     if (!anagrams[key]) {
    //         anagrams[key] = [];
    //     }
    //     anagrams[key].push(s);
    // }
    
    return Object.values(anagrams);
};