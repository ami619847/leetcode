//Reverse String
//time complexity: O(n), space complexity: O(1)
//two pointers
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};


//Reverse Integer
function reverse(x: number): number {
    //solution 1
    //time complexity: O(log n), space complexity: O(1)

    // let isNegative: boolean = false;
    // if (x < 0) {
    //     isNegative = true;
    //     x = -x;
    // }

    // let res: number = 0;

    // while (x > 0) {
    //     let digit = x % 10;
    //     x = Math.floor(x/10);

    //     // check for integer overflow [-2^31, 2^31 - 1]
    //     //2^31 = 2147483648
    //     //2^31 - 1 = 2147483647, so digit > 7
    //     if (res > Math.floor((2 ** 31 - 1) / 10) || (
    //         res === Math.floor((2 ** 31 - 1) / 10) && digit > 7
    //     )) { 
    //         return 0;    
    //     }

    //     res = (res * 10) + digit;
    // }

    // return isNegative ? -res : res;

    //solution 2
    //time complexity: O(log n), space complexity: O(1)
    let res = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;            
    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0; //truncating toward zero
        if (res > INT_MAX / 10 || (res === INT_MAX / 10 && digit > 7)) return 0;
        if (res < INT_MIN / 10 || (res === INT_MIN / 10 && digit < -8)) return 0;
        res = res * 10 + digit;
    }   
    return res;
};


//Reverse Bits
//time complexity: O(1), space complexity: O(1)
function reverseBits(n: number): number {
    let res = 0;

    for (let i = 0; i < 32; i++) {
        //shift res left
        res = res << 1;
        //add the last bit of n to res
        res += (n & 1);
        //shift n right by 1 for next bit
        n = n >>> 1;
    }
    
    return res >>> 0;
};


// First Unique Character in a String
//time complexity: O(n), space complexity: O(1)
function firstUniqChar(s: string): number {
    //using hashmap keep frequency
    //ex.: {l: 1, e: 3, t: 1, c: 1, o: 1, d: 1}
    let count: Record<string, number> = {};

    for (let char of s) {
        count[char] = (count[char] || 0 ) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

// Valid Anagram
//time complexity: O(n), space complexity: O(1)
//hashmap
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let count: Record<string, number> = {};

    for (let char of s) {
        count[char] = (count[char] || 0 ) + 1;
    }

    for (let char of t) {
        count[char] = (count[char] || 0 ) - 1;
    }

    for (let key in count) {
        if (count[key] !== 0) {
            return false;
        }
    }

    return true;
};

// Valid Palindrome
//time complexity: O(n), space complexity: O(1)
//two pointers
function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = s.length - 1;
    
    while(left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    
    return true;
};

// String to Integer (atoi)
//time complexity: O(n), space complexity: O(1)
function myAtoi(s: string): number {
    if (!s) return 0;

    let i: number = 0;

    // discard whitespaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    if (i === s.length) return 0;

    //check for sign
    let sign: number = 1;
    if (s[i] === '+' || s[i] === '-') {
        sign = (s[i] === '+') ? 1 : -1;
        i++;
    }

    // convert number and check overflow
    let res: number = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;                            

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]);
        res = res * 10 + digit;

        // Check for overflow/underflow before adding the digit
        if ((sign * res) > INT_MAX) return INT_MAX; 
        if ((sign * res) < INT_MIN) return INT_MIN; 

        i++;
    }      

    return res * sign;
};


// Find the Index of the First Occurrence in a String]
//time complexity: O(n*m), space complexity: O(1)
function strStr(haystack: string, needle: string): number {
    //solution 1 - built in function
    //time complexity: O(n), space complexity: O(1)
    // return haystack.indexOf(needle);

    //solution 2 - brute force
    //time complexity: O(n*m), space complexity: O(1)
    // if (!needle) return 0;

    // for (let i = 0; i < haystack.length; i++) {
    //     let isMathch: boolean = true;

    //     for (let j = 0; j < needle.length; j++) {
    //         if (haystack[i + j] !== needle[j]) {
    //             isMathch = false;
    //             break;
    //         }
    //     }

    //     if (isMathch) return i;
    // }
    // return -1; 

    //solution 3 - loop through haystack and compare substrings
    //time complexity: O(n*m), space complexity: O(1)
    if (!needle) return 0;
    if (needle.length > haystack.length) return -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

//Longest Common Prefix
//time complexity: O(n*m), space complexity: O(1)
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    let prefLen = prefix.length;

    for (let i = 0; i < strs.length; i++) {
        let s = strs[i]
        while (prefix !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) return "";
            prefix = prefix.substring(0, prefLen);
        }
    }

    return prefix;
};

//Length of Last Word
function lengthOfLastWord(s: string): number {
    //solution 1
    //time complexity: O(n), space complexity: O(1)
    //two pointers
    // let end = s.length - 1;
    // while (end >= 0 && s[end] === " " ) {
    //     end--;
    // }

    // let start = end;
    // while (start >= 0 && s[start] !== " ") {
    //     start--;
    // }

    // return end - start;

    //solution 2
    //time complexity: O(n), space complexity: O(1)
    //approach without trimming
    let length: number = 0;
    let isCount: boolean = false;

    for (let char of s) {
        if (char !== " ") {
            if (isCount === false) {
                isCount = true;
                length = 1;
            } else {
                length++;
            }
        } else {
            isCount = false;
        }
    }

    return length;
};