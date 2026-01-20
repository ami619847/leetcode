//Remove Duplicates from Sorted Array
//two pointers approach
//Time Complexity: O(n), space Complexity: O(1)

function removeDuplicates(nums: number[]): number {
    //first element is always unique
    let i: number = 1;

    for (let j: number = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;  
};

//Best Time to Buy and Sell Stock
//Time Complexity: O(n), space Complexity: O(1)
function maxProfit(prices: number[]): number {
    //initialize buy price is the first price
    let buy: number = prices[0];
    let profit: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        //update buy price if current price is lower
        if (buy > prices[i]) {
            buy = prices[i];
        }
        profit = Math.max(profit, prices[i] - buy);
    }

    return profit;
};

//Best Time to Buy and Sell Stock II
//Time Complexity: O(n), space Complexity: O(1)
function maxProfit2(prices: number[]): number {
    let profit: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        //if price is higher than previous day, sell it
        if (prices[i] > prices[i-1]) {
            //to current profit, add the difference
            profit += prices[i] - prices[i-1];        
        }
    }

    return profit;
};

//Rotate Array
//Time Complexity: O(n), space Complexity: O(1)

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    //original: [1, 2, 3, 4, 5, 6, 7], k=9
    //use remainder k
    //if k is bigger than an array
    k %= nums.length; //k=2

    const reverse = (left: number, right: number) => {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    reverse(0, nums.length - 1); //whole array [7, 6, 5, 4, 3, 2, 1]
    reverse(0, k-1); //before k, [6, 7, 5, 4, 3, 2, 1]
    reverse(k, nums.length - 1); //after k, [6, 7, 1, 2, 3, 4, 5]
};

//Contains Duplicate
function containsDuplicate(nums: number[]): boolean {
    //Solution 1
    //Time complexity O(n log n) due to sorting, space complexity O(1)
    // nums.sort((a, b) => a - b);

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] === nums[i - 1]) {
    //         return true;
    //     }
    // }

    //Solution 2
    //Time complexity O(n), space complexity O(n)
    const numSet = new Set();

    for (const n of nums) {
        if (numSet.has(n)) {
            return true;
        }
        numSet.add(n);
    }

    return false;
};

//Contains Duplicate II
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let numSet = new Set();

    for (let i = 0; i< nums.length; i++) {
        //solution 1
        //time complexity O(n), space complexity O(n)
        // let n: number = nums[i];
        // if (numSet.hasOwnProperty(n) && i - numSet[n] <= k) {
        //     return true;
        // }
        // numSet[n] = i;

        //solution 2
        //time complexity O(n), space complexity O(min(n, k))

        //i - k - 1, 
        //i - curr pos, k - search range from curr pos, -1 - next pos of edge of target range
        if (i > k) {
            numSet.delete(nums[i - k - 1]);
        }
        if (numSet.has(nums[i])) {
            return true;
        }
        numSet.add(nums[i]);
    }
    
    return false;
};

//Single Number
//Time Complexity: O(n), space Complexity: O(1)
function singleNumber(nums: number[]): number {
    //time and space constrains, cannot use arryas, sets, etc.
    let res = 0;

    for (let n of nums) {
        res = res ^ n;
    }

    return res;
};

// Intersection of Two Arrays
//Time Complexity: O(n + m), space Complexity: O(min(n, m))
function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res = [];

    for (let n of set1) {
        if (set2.has(n)) {
            res.push(n);
        }
    }

    return res;
};

//Intersection of Two Arrays II
//Time Complexity: O(n + m), space Complexity: O(min(n, m))
function intersect(nums1: number[], nums2: number[]): number[] {
    let res = [];
    //solution 1
    let count = new Map();

    for (let n of nums1) {
        //count frequencies using hashmap
        count.set(n, (count.get(n) || 0) + 1);
    }

    for (let n of nums2) {
        //if num exists in the map, add to res and decrement the count
        if (count.get(n) > 0) {
            res.push(n);
            count.set(n, count.get(n) - 1);
        }
    }

    //solution 2
    // nums1.sort((a, b) => a - b);
    // nums2.sort((a, b) => a - b);

    // //two pointers
    // let i = 0, j = 0;
    // while (i < nums1.length && j < nums2.length) {
    //     if (nums1[i] === nums2[j]) {
    //         res.push(nums1[i]);
    //         i++;
    //         j++;
    //     } else if (nums1[i] < nums2[j]) {
    //         i++;
    //     } else {
    //         j++;
    //     }
    // }

    return res;
};

//Plus One
//time Complexity: O(n), space Complexity: O(1)
function plusOne(digits: number[]): number[] {
    for (let i: number = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 < 10) {
            digits[i]++; 
            return digits;
        } 

        //if digit is 9, the last digit becomes 0
        digits[i] = 0;

        //if all the digits are 9, e.g. 999 + 1 = 1000  
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }

    return digits;
};

//Move Zeroes
//time Complexity: O(n), space Complexity: O(1)
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    //two pointers apporach
    let left: number = 0;
    
    for (let right: number = 0; right < nums.length; right++) {
        //when the right pointer is not zero, swap the values at left and right pointers,
        //so zeroes are moved to the end/right side of the array
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }
};

//Two Sum
//time Complexity: O(n), space Complexity: O(n)
function twoSumNew(nums: number[], target: number): number[] {
    //hash map
    let pair = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++) {
        //current number
        let num = nums[i];
        if (pair.has(target - num)) {
            return [i, pair.get(target - num)!];
        }
        pair.set(num, i);
    }

    return [];
};



