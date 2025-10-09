//time complexity: O(n*n!)
//space complexity: O(n) for the recursion stack and current permutation array

function permute(nums: number[]): number[][] {
    let res = [];

    function backtrack(i) { //i - start
        if (i === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            backtrack(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    backtrack(0);
    return res;
};