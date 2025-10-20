// time: O(n log n), space: O(1)

function eraseOverlapIntervals(intervals: number[][]): number {
    let res: number = 0;
    //sort intervals by end
    intervals.sort((a, b) => a[1] - b[1]);
    //the end point of the first interval
    let prevEnd = intervals[0][1];

    //iterate through intervals starting from the second one
    for (let i = 1; i < intervals.length; i++) {
        //check if there is an overlap between the previous interval and the current one
        if (prevEnd > intervals[i][0]) {
            //overlap detected, increment result counter
            res++;
        } else {
            //no overlap, update the end point to the current interval's end
            prevEnd = intervals[i][1];
        }
    }
    
    return res;
};