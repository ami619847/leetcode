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