function majorityElement(nums: number[]): number {
    //store majority element
    let res: number = 0;
    //store the count
    let majority: number = 0;

    for (let n of nums) {
        if (majority === 0) res = n;

        if (n === res) {
            majority += 1;
        } else {
            majority -= 1;
        }
    }

    return res;
};