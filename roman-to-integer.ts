function romanToInt(s: string): number {
    //solution 1 - pattern matching
    //time complexity O(n)
    //space complexity O(1)

    //helper function to determine if we need to add or subtract
    const calcScale = (c: string, a1: string, a2: string ): number => {
        return (c === a1 || c === a2) ? -1 : 1;
    }
    let res: number = 0;

    //iterate through each character in the string
    for (let i: number = 0; i < s.length; i++) {
        const nextChar: string = s[i + 1] || "";

        switch(s[i]) {
            case "M": res += 1000; 
            break;
            case "D": res += 500; 
            break;
            case "C": res += 100 * calcScale(nextChar, "M", "D");
            break;
            case "L": res += 50; 
            break;
            case "X": res += 10 * calcScale(nextChar, "C", "L"); 
            break;
            case "V": res += 5; 
            break;
            case "I": res += 1 * calcScale(nextChar, "X", "V"); 
            break;
        }
    }

    //solution 2 - dictionary
    //time complexity O(n)
    //space complexity O(1)

    // const roman: {[key: string]: number} = {
    //     'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    // };
    // const n: number = s.length;
    // let res: number  = roman[s[n - 1]];

    // for (let i =  n-2; i >= 0; i--) {
    //     //looks at the current char and the next
    //     if (roman[s[i]] < roman[s[i + 1]]) {
    //         res -= roman[s[i]];
    //     } else {
    //         res += roman[s[i]];
    //     }
    // }

    return res;
};