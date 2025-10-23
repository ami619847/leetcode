// time: O(n), space: O(1)
function isSubsequence(s: string, t: string): boolean {
    let count: number = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[count] === t[i]) {
            //matching then increment
            count++;
        }
    }

    return count === s.length;
};