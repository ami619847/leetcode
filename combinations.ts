//time complexity: O(k * C(n, k)) where C(n, k) is the number of combinations
//space complexity: O(k) for the recursion stack and current combination array

function combine(n: number, k: number): number[][] {
    let res: number[][] = [];

    function backtrack(start: number, path: number[]): void {
        if (path.length === k) {
            res.push([...path]);
            return;
        }

        for (let i: number = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(1, []);
    return res;
};
