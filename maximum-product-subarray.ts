//time: O(n), space: O(1);
//dynamic programming approach

function maxProductSubarray(nums: number[]): number {
    let res = Math.max(...nums);
    let currMax = 1;
    let currMin = 1;

    for (let n of nums) {
        //when n is negative, swap currMax and currMin
        let temp = currMax * n;

        currMax = Math.max(temp, currMin * n, n);
        currMin = Math.min(temp, currMin * n, n);
        res = Math.max(res, currMax);
    }
 
    return res;
};