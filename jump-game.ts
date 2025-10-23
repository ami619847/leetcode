// time: O(n), space: O(1)
//greedy approach
function canJump(nums: number[]): boolean {
    //farthest index we can reach
    let maxReach: number = 0;

    for (let i = 0; i < nums.length; i++) {
        //can't proceed
        if (i > maxReach) return false;
        
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
};