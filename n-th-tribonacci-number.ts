function tribonacci(n: number): number {
    if (n < 1) return 0;
    if (n < 3) return 1;

    // Recursive case: sum of the three preceding Fibonacci numbers
    // Time limit exceeds
    // time: O(3^n), space: O(n)
    //return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n-1);

    // Sliding window - recursive
    // time: O(n), space: O(n)
    // return 2 * tribonacci(n - 1) - tribonacci(n - 4);

    //sliding window - iterative
    // time: O(n), space: O(1)
    let sum = 2;
    const vals = [0, 1, 1];
    for (let i = 3; i < n; i++) {
        vals.push(sum);
        sum += sum - (vals.shift() ?? 0);
    }
    return sum;
};