function findKthLargest(nums: number[], k: number): number {
    //Solution 1 - heap
    //time O(n log k), space O(k)
    
    // const minHeap = new MinPriorityQueue<number>(); //the MinPriorityQueue class is library

    // for (const num of nums) {
    //     minHeap.enqueue(num);

    //     if (minHeap.size() > k) minHeap.dequeue();
    // }

    // return minHeap.front();

    //Solution 2 - array of frequencies
    //time O(n + m), space O(m) where m is the range of numbers in nums
    //space complexity can be high if the range is large

    // const minVal = Math.min(...nums), maxVal = Math.max(...nums);
    // const count = new Array(maxVal - minVal + 1).fill(0);

    // for (const num of nums) {
    //     count[num - minVal]++;
    // }

    // let remaining = k;
    // for (let i = count.length - 1; i >= 0; i--) {
    //     remaining -= count[i];

    //     if (remaining <= 0) return i + minVal;
    // }

    //Solution 3 - quickselect
    //time: O(n) on average, O(n^2) worst case
    //space: O(1)

    const quickSelect = (nums: number [], left: number, right: number, targetId: number) => {
        if (left === right) return nums[left];

        let pivot = nums[left];
        let low = left;
        let high = right;

        while (low <= high) {
            while (low <= high && nums[low] < pivot) low++;
            while (low <= high && nums[high] > pivot) high--;

            if (low <= high) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
                high--;
            }
        }

        if (targetId <= high) {
            return quickSelect(nums, left, high, targetId);
        } else if (targetId >= low) {
            return quickSelect(nums, low, right, targetId);
        } else return nums[targetId];
    }

    const targetId = nums.length - k;

    return quickSelect(nums, 0, nums.length - 1, targetId);
};