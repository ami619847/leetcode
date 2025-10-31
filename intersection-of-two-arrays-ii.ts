function intersect(nums1: number[], nums2: number[]): number[] {
    //time O(n), space O(n)
    const count = new Map();
    const result = [];

    for (const num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        if (count.get(num) > 0) {
            result.push(num);
            count.set(num, count.get(num) - 1);
        }
    }

    return result;
};