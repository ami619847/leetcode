type Fn = (...params: number[]) => number;

interface MemoCache { [key: string]: number; }

//time: O(n) space: O(n)
function memoize(fn: Fn): Fn{
    const cache: MemoCache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const res = fn(...args);
        cache[key] = res;

        return res;
    }
}

const memoizedSum = memoize(function(a: number, b: number): number {
    return a + b;
});

const memoizedFib = memoize(function(n: number): number {
    if (n <= 1) return 1;

    return memoizedFib(n - 1) + memoizedFib(n - 2);
});

const memoizedFactorial = memoize(function(n: number): number {
    if (n <= 1) return 1;
    
    return memoizedFactorial(n - 1) * n;
});

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */