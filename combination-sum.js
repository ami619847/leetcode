//time complexity: O(2^(t/m)) where t is target and m is the minimum value in candidates
//space complexity: O(t/m) for the recursion stack and combination array

function combinationSum(candidates, target) {
    let res = []

    function makeCombination (i, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }

        if (total > target || i >= candidates.length) {
            return;
        }

        comb.push(candidates[i]);
        makeCombination(i, comb, total + candidates[i]);
        comb.pop();
        makeCombination(i + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;
};
