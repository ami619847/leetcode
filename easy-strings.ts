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
