/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    //using recursion to store all subsets and calculate their XOR sums
    //base case: if we reach the end of the array, return the current XOR sum
    function findSum(nums, currId, currNum) {
        if (currId === nums.length) return currNum;

        let includeXor = findSum(nums, currId + 1, currNum ^ nums[currId]);
        let excludeXor = findSum(nums, currId + 1, currNum);

        return includeXor + excludeXor;
    }

    return findSum(nums, 0, 0);
};