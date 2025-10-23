// time: O(n), space: O(1)
//greedy approach
function jump(nums: number[]): number {
    let jumps = 0, maxReach = 0, currPos = 0;
    
    //iterate except last
    for (let i = 0; i < nums.length - 1; i++) {
        //greedy approach - set to maxReach or currPos + jump
        maxReach = Math.max(maxReach, i + nums[i]);

        //when we reach the end of current jump
        if (i === currPos) {
            jumps++;
            currPos = maxReach;
        }
    }

    return jumps; 
};