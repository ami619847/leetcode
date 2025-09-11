function fib(n: number): number {
    if (n <= 1) return n;

    // Solution 1
    // return fib(n-1) + fib(n-2);

    // Solution 2
    let firstNum = 0, secondNum = 1;
    for ( let i = 2; i <= n; i++ ) {
        [firstNum, secondNum] = [secondNum, firstNum + secondNum];
    } 
    return secondNum;
};