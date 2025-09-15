function searchRange(nums: number[], target: number): number[] {

    const binarySearch = (nums: number[], target: number, isSearchingLeft: boolean) => {
        let left: number = 0, right: number = nums.length - 1;
        let i: number = -1;

        while (left <= right) {
            let mid: number = Math.floor((left + right ) / 2 );

            if (nums[mid] > target) {
                right = mid - 1;
                console.log('right', right);
            } else if (nums[mid] < target) {
                left = mid + 1;
                console.log('left', left);
            } else {
                i = mid;
                isSearchingLeft ? (right = mid - 1) : (left = mid + 1);
            }
        }
        console.log('no target', i);
        return i;
    } 

    let left = binarySearch(nums, target, true);
    let right = binarySearch(nums, target, false)

    return [left, right];
}
