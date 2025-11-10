class MyCalendar {
    private bookings: [number, number][];

    constructor() {
        this.bookings = [];
    }

    book(startTime: number, endTime: number): boolean {
        //solution 1
        // for (let [s, e] of this.bookings) {
        //     if (Math.max(s, startTime) < Math.min(e, endTime)) return false;
        // }
        // this.bookings.push([startTime, endTime]);
        // return true;

        //solution 2
        let left: number = 0;
        let right: number = this.bookings.length - 1;

        while(left <= right) {
            let mid: number = Math.floor(left + (right - left) / 2);
            const [s, e] = this.bookings[mid];
            
            if (s < endTime && e > startTime) return false;

            if (startTime >= e) left = mid + 1;
            else right = mid - 1;
        }
        this.bookings.splice(left, 0, [startTime, endTime]);

        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */