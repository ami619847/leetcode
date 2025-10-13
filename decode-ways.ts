function numDecodings(s: string): number {
    // Solution 1 - Recursion & memoizaition
    //time complexity: O(n);
    //space complexity: O(n);

    // const map = new Map<number, number>();
    // const decodeWays = (nums: number [], n: number) => {
    //     if (!n) return 1;

    //     //cache check
    //     if (map.has(n - 1)) return map.get(n - 1);

    //     //first - decode single character
    //     const opt1 = nums[n - 1];

    //     //second - decode combined character, avoid 0 at the front
    //     const opt2 = n-2 >= 0 && nums[n-2] !== 0 ? nums[n-2]*10 + nums[n-1]: 0;
    //     let ans1 = 0, ans2 = 0;

    //     //if single character is not zero
    //     if (opt1 > 0) {
    //         ans2 = decodeWays(nums, n - 1);
    //     }

    //     //combined characters
    //     if (opt2 > 0 && opt2 <= 26) {
    //         ans1 = decodeWays(nums, n - 2);
    //     }

    //     //cache
    //     map.set(n -1, ans1 + ans2);

    //     return ans1 + ans2;
    // }
    
    // const nums = s.split('').map(item => +item);
    // return decodeWays(nums, nums.length);


    //Solution 2 - Tabulation
    //time complexity: O(n);
    //space complexity: O(n);
    const nums = s.split('').map(item => +item);
    const n = nums.length;
    const dp = new Array(n).fill(0);

    //base case: if there is one element, there is one decoding unless the element is 0
    dp[n - 1] = nums[n - 1] ? 1 : 0;

    for (let i: number = n - 2; i >= 0; i--) {
        let ans1 = 0, ans2 = 0;
        
        //single character
        const opt1 = nums[i];
        //combined characters
        const opt2 = nums[i] ? nums[i] * 10 + nums[i + 1] : 0;
        
        //exclude starting with 0
        ans1 = opt1 > 0 ? dp[i + 1] : 0;
        ans2 = (opt2 > 0 && opt2 < 27) ? (i + 2 < nums.length ? dp[i + 2] : 1) : 0; 

        dp[i] = ans2 + ans1;
    }

    return dp[0];
};