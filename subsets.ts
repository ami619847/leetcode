//time complexity: O(N * 2^N) where N is the length of nums
//space complexity: O(N) for the recursion stack and subset array

function subsets(nums: number[]): number[][] {
    const res: number[][] = [];
    const subset: number[] = [];

    //recursive function
    const createSubset = function(i: number) {
        //add subset at the end of the array
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        //include curr value
        subset.push(nums[i]);
        createSubset(i + 1); //recursively find all subsets

        //exclude curr value
        subset.pop();
        createSubset(i + 1); //recursively find all subsets
    }

    // find recursively
    createSubset(0);
    
    return res;
};