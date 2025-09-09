function twoSum(numbers: number[], target: number): number[] {
    // Solution 1 using hasMap
    // let hashMap = new Map();

    // for (let i:number = 0; numbers.length; i++) {
    //     if (hashMap.has(numbers[i])) {
    //         // console.log([hashMap.get(numbers[i]) + 1, i + 1])
    //         return [hashMap.get(numbers[i]) + 1, i + 1];
    //     } else {
    //         let y:number = target - numbers[i];
    //         hashMap.set(y, i);
    //     }
    // }

    // Solution 2 using two pointers
    let left: number = 0;
    let rigth: number = numbers.length - 1;

    while (left < rigth) {
        let sum: number = numbers[left] + numbers[rigth];

        if (sum === target) {
            return [left + 1, rigth + 1];
        } else if (sum > target) {
            rigth--;
        } else {
            left++
        }
    }
};
