function rob(nums: number[]): number {
    //tabulation approach
    //time complexity: O(n);
    //space complexity: O(1);
    let prevRob = 0, maxRob = 0;

    for (let currVal of nums) {
        //compare (prev + currVal) house or skip 
        let temp = Math.max(prevRob + currVal, maxRob);
        //proceed
        prevRob = maxRob;
        maxRob = temp;
    }
    
    return maxRob;
};