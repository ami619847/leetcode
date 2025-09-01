function containsDuplicate(nums: number[]): boolean {
    let checked = new Set();
    
    for (let num of nums) {
        if (checked.has(num)) {
            return true;
        }
        checked.add(num);
    }
    return false;
};