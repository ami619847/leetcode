/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let left = 0;

    for (let right=0; right<nums.length; right++) {
        if (nums[right]!==0) {
            [nums[right], nums[left]] = [nums[left], nums[right]]
            left++;
        }  
    }
    // console.log('sorted =', nums);
};
