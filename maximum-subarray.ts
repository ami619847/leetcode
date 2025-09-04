function maxSubArray(nums: number[]): number {
    let res:number = nums[0];
    let total:number = 0;

    for (let n of nums) {
        if (total < 0) { //if total sum is negative, return 0
            total = 0;
        }
        total += n;
        res = Math.max(total, res); //compare the total and result
    }
    
    return res;
};