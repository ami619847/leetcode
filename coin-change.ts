function coinChange(coins: number[], amount: number): number {
    //bottom-up dynamic programming approach
    //time complexity: O(n*m) n - amount, m - coins.length
    //space complexity: O(n) n - amount
    
    //base case
    if (amount === 0) return 0;
    
    let cache = new Array(amount + 1).fill(Infinity);
    cache[0] = 0;

    //build the cache array from 1 to amount
    //for each coin, update the cache for all amounts that can be reached by that coin
    //the value at each index represents the minimum coins needed to reach that amount
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            cache[i] = Math.min(cache[i], cache[i - coin] + 1);
        }
    }

    if (cache[amount] === Infinity) return -1;

    return cache[amount];
};