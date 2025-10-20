// expand around center approach - O(n^2) time, O(1) space

function longestPalindrome(s: string): string {
    function expandAroundCenter(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(i, i);
        const even = expandAroundCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }
    
    return longest;
};