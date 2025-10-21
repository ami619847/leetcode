function maxProduct(nums: number[]): number {
    // solution1 - track second biggest approach
    // time: O(n), space: O(1)

    let biggest = 0, secondBiggest = 0;

    for (let num of nums) {
        if (num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        } else if (num > secondBiggest) {
            secondBiggest = num;
        }
    }

    return (biggest - 1) * (secondBiggest - 1);

    // // solution 2
    // nums.sort((a,b) => b-a);
    // return ( (nums[0]-1)* (nums[1]-1) );
};