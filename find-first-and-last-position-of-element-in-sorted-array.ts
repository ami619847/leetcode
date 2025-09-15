function searchRange(nums: number[], target: number): number[] {

    // Soulution 1 using one binary search with helper function
    // Time complexity O(log n);
    // Space complexity O(1);
    // const binarySearch = (nums: number[], target: number, isSearchingLeft: boolean) => {
    //    let left: number = 0, rigth: number = nums.length - 1;
    //     let i: number = -1;

    //     while (left <= rigth) {
    //         let mid: number = Math.floor((left + rigth ) / 2 );

    //         if (nums[mid] > target) {
    //             rigth = mid - 1;
    //             console.log('rigth', rigth);
    //         } else if (nums[mid] < target) {
    //             left = mid + 1;
    //             console.log('left', left);
    //         } else {
    //             i = mid;
    //             isSearchingLeft ? (rigth = mid - 1) : (left = mid + 1);
    //         }
    //     }
    //     console.log('no target', i);
    //     return i;
    // } 

    // let left = binarySearch(nums, target, true);
    // let rigth = binarySearch(nums, target, false)

    // return [left, rigth];

    // Soulution 2 using two binary searches
    if (nums.length === 0) return [-1, -1];
    let left: number = 0, rigth: number = nums.length - 1;

    while (left < rigth) {
        let mid = Math.floor((left + rigth) / 2);

        //Finding the smallest on the left side
        if (nums[mid] >= target) {
            rigth = mid;
        } else {
            left = mid + 1;
        }
    }

    if (nums[left] !== target) return [-1, -1];

    //now the left is the start position
    let start: number = left, end: number;
    rigth = nums.length - 1;

    while (left < rigth) {
        let mid = Math.floor((left + rigth) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            rigth = mid;
        }
    }

    if (nums[left] === target) {
        end = left;
    } else {
        end = left - 1;
    }

    return [start, end];    
}
