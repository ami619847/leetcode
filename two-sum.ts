function twoSum(nums: number[], target: number): number[] {
    // 3+2 = 5
    // 3+4 = 7
    // 2+4 = 6

    // {3, 0}
    // {4, 1}

    let hashMap = new Map();

    for (let i:number = 0; nums.length; i++) {

        if (hashMap.has(nums[i])) {
            // console.log(hashMap.get(nums[i]), i);
            return [hashMap.get(nums[i]), i];
        } else {
            let y:number = target - nums[i];
            hashMap.set(y, i);
            // console.log(hashMap);
        }
    }
};