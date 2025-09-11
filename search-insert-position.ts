function searchInsert(nums: number[], target: number): number {
    //time complexity O(log n);
    //space complexity O(1);
    let left: number = 0, rigth: number = nums.length;

    while (left < rigth) {
        let mid: number = left + Math.floor((rigth - left) / 2);
        
        if (target > nums[mid]) {
            left = mid + 1;
            // console.log('left=', left);
        } else {
            rigth = mid;
            // console.log('rigth=', rigth);
        }
    }

    return left;    
};