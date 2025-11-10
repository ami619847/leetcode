class MyCalendarThree {
    private bookings: Record<number, number> = {};

    constructor() {
        this.bookings = {};
    }

    book(startTime: number, endTime: number): number {
        this.bookings[startTime] = (this.bookings[startTime] || 0) + 1;
        this.bookings[endTime] = (this.bookings[endTime] || 0) - 1;

        let max: number = 0, count: number = 0;

        for (let val in this.bookings) {
            max = Math.max(max, count += this.bookings[val]);
        }
        
        return max;
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */