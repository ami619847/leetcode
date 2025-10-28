//time: O(n * target * k), space: O(n * target)
//approach: memoization + recursion

function numRollsToTarget(n: number, k: number, target: number): number {
    const mod: number = Math.pow(10, 9) + 7;
    const memo: number[][] = [];

    //read from memo
    function read(i: number, j: number): number | undefined {
        return memo[i] ? memo[i][j] : undefined;
    }
    //write to memo
    function write(i: number, j: number, val: number): void {
        if (memo[i] === undefined) {
            memo[i] = [];
        }

        memo[i][j] = val;
    }

    //array of dice faces 1 to k
    const arr: number[] = Array(k).fill(1).map((x, idx) => x + idx);
    
    //dp function to calculate number of ways
    function dp(n: number, target: number): number {
        if (target === 0 && n === 0) return 1;
        if (target < 0 || n < 0) return 0;
        
        const cached = read(n, target);
        
        if (cached !== undefined) return cached;

        //try all dice faces and sum up the ways to reach target
        const res: number = arr.reduce((acc, x) => 
            (acc + dp(n - 1, target - x)) % mod, 0
        );

        write(n, target, res);

        return res;
    }

    //start dp from n dice and target sum
    return dp(n, target);
};