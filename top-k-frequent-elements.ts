function topKFrequent(nums: number[], k: number): number[] {
    //Solution 1 - count frequency
    //time O(n log n), space O(n)

    // const freq: {[key: number]: number} = {};

    // for (let num of nums) {
    //     if (!freq[num]) {
    //         freq[num] = 0;
    //     }
    //     freq[num]++;
    // }

    //populate result by sorting entries by frequency
    // return Object.entries(freq)
    //     .sort((a, b) => b[1] - a[1])
    //     .slice(0, k) //get top k entries
    //     .map(v => Number(v[0])); //convert back to number

    //Solution 2 - priority queue
    //time O(n log k), space O(n)
    const map = new Map<number, number>();
    const res: number[] = [];

    //populate map
    nums.forEach( (num) => map.set(num, (map.get(num) || 0) + 1) );
    
    //convert map to array and sort by frequency descending
    const entries = Array.from(map.entries());
    entries.sort((a, b) => b[1] - a[1]);

    //populate result with top k elements
    for (let i = 0; i < k && i < entries.length; i++) {
        res.push(entries[i][0]);
    }
    
    return res;
};