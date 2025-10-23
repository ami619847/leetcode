// time: O(n), space: O(1)
// greedy approach
function wiggleMaxLength(nums: number[]): number {
    if (!nums.length) return 0;

    let up = 1, down = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            //going upword
            up = down + 1;
        } else if (nums[i] < nums[i - 1]) {
            //going downward
            down = up + 1;
        }
    }
    
    //return the max of both
    return Math.max(up, down);
};