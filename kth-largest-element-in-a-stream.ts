class KthLargest {
    stream: number [];
    k: number;

    constructor(k: number, nums: number[]) {
        this.stream = nums.sort((a, b) => b - a);
        this.k = k;
    }

    add(val: number): number {
        let left = 0, right = this.stream.length;

        while (left < right) { 
            let mid = (left + right) >> 1;

            if (this.stream[mid] > val) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        this.stream.splice(left, 0, val);
        return this.stream[this.k - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */