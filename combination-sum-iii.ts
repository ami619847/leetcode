function combinationSum3(k: number, n: number): number[][] {
    const res: number[][] = [];

    function backtrack(start: number, path: number[], target: number, k: number): void {
        if (target === 0 && k === 0) {
            res.push([...path]);
            return;
        }

        for (let i: number = start; i <= 9; i++ ) {
            if (i > target || k <= 0) return;
            path.push(i);
            backtrack(i + 1, path, target - i, k - 1);
            path.pop();
        }
    }

    backtrack(1, [], n, k);
    return res;
};