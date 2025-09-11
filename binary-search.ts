function search(nums: number[], target: number): number {
    //time complexity O(log n);
    //space complexity O(1);
    let left: number = 0, right: number = nums.length - 1;

    while (left < right) {
        let mid: number = left + Math.floor((right - left + 1) / 2);
        
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }

    return nums[left] === target ? left : -1;    
};