//time: O(n log n), space: O(n)

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const time = [];

        // create time points for all start and end times
        for (const i of intervals) {
            time.push([i.start, 1]);
            time.push([i.end, -1]);
        }

        // sort time points, prioritizing end times in case of tie
        time.sort((a, b) => (
            a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
        ));

        let res = 0, count = 0;

        // iterate through time points, updating count and result
        for (const t of time) {
            // increment or decrement count based on start or end time
            count += t[1];
            // update result if current count exceeds previous maximum
            res = Math.max(res, count);
        }
        
        return res;
    }
}
