//time: O(n log n), space: O(n)
function lengthOfLIS(nums: number[]): number {
    let res = [];

    //find the correct position in res to replace/insert the n
    const binarySearch = (arr: number[], target: number): number => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                //n is already in its correct position
                return mid;
            } else if (arr[mid] > target) {
                //n before mid
                right = mid - 1;
            } else {
                //n after the mid
                left = mid + 1;
            }
        }
        return left;
    }

    for (const n of nums) {
        //if res is empty or less than n, it extends res
        if (!res.length || res[res.length - 1] < n) {
            res.push(n);
        } else {
            //if n is less than res we will find the correct index
            //where n replace an existing element in res
            //to maintain the order
            //even though the sequence is not ascending
            //but it will represent the longest increasing subsequence
            const idx = binarySearch(res, n);
            res[idx] = n;
        }
    }
    
    return res.length;
};