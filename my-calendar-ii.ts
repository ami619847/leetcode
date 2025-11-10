class MyCalendarTwo {
    private single: [number, number][]; //single booked intervals
    private double: [number, number][]; //double booked intervals

    constructor() {
        this.single = [];
        this.double = []; 
    }

    book(startTime: number, endTime: number): boolean {
        //check for triple overlaps with double
        for (let [s, e] of this.double) {
            if (Math.max(startTime, s) < Math.min(endTime, e)) {
                //triple booking detected
                return false;
            }
        }

        //add event for double bookings
        for (let [s, e] of this.single) {
            if (Math.max(startTime, s) < Math.min(endTime, e)) {
                this.double.push([Math.max(startTime, s), Math.min(endTime, e)]);
            }
        }
        
        //add event to single bookings
        this.single.push([startTime, endTime]);
        return true;
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */