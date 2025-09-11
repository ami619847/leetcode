function climbStairs(n: number): number {
    // base cases: until step 3 only 3 ways
    if (n <= 3) return n;

    //from step 4 there 2 previous steps: 4-1 (n=3) and 4-2 (n=2)
    let prev1 = 3, prev2 = 2, cur = 0;

    for (let i = 3; i < n; i++) {
        // from step 4: cur = 3 + 2
        cur = prev1 + prev2;
        //updating steps for next n
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;
};