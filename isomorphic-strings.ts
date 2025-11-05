function isIsomorphic(s: string, t: string): boolean {
    //using one hashmap
    //time complexity: O(n)
    //space complexity: O(1)
    const charMap: Record<string, string> = {};

    for (let i: number = 0; i < s.length; i++) {
        const sc = s[i], tc = t[i];

        if (charMap[sc]) {
            if (charMap[sc] !== tc) return false;
        } else if (Object.values(charMap).includes(tc)) return false;

        charMap[sc] = tc;
    }

    return true;
};