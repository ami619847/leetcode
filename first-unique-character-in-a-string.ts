function firstUniqChar(s: string): number {
    //hashmap to keep frequency
    //time O(n), space O(1) since only lowercase letters
    
    const freq: Record<string, number> = {};

    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) return i;
    }

    return -1;
};