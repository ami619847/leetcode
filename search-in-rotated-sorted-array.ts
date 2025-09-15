function search(nums: number[], target: number): number {
    let left:number = 0, rigth:number = nums.length - 1;

    while (left <= rigth) {
        let mid = Math.floor((left+rigth) / 2);

        if (nums[mid] === target) {
            return mid;
        }
 
        //Left side is sorted
        if (nums[left] <= nums[mid]) {
            //start (left to mid)
            if (nums[left] <= target && target <= nums[mid]) {
                rigth = mid - 1;
            } else {
                //end (mid to rigth)
                left = mid + 1;
            }
        //Rigth side is sorted
        } else {
            //end (mid to rigth)
            if (nums[mid] <= target && target <= nums[rigth]) {
                left = mid + 1;
            } else {
                //start (left to mid)
                rigth = mid - 1;
            }
        }
    }

    return -1;
};
