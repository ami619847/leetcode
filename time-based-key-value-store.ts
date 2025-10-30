//sing Map and binary search
//time complexity: O(log n) for get, O(1) for set
//space complexity: O(n)
class TimeMap {
    private map;

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            //initialize with empty arrays for timestamps
            this.map.set(key, []);
        }

        this.map.get(key).push({value, timestamp})
    }

    get(key: string, timestamp: number): string {
        if (!this.map.has(key)) return "";

        const list = this.map.get(key);
        const frontElem = list[0];

        //if requested timestamp is less than the first timestamp
        if (frontElem.timestamp > timestamp) return "";

        let leftPtr = 0, rightPtr = list.length - 1;

        //binary search to find the largest timestamp <= requested timestamp
        while(leftPtr <= rightPtr) {
            const mid = leftPtr + Math.floor((rightPtr - leftPtr) / 2);
            const currTimestamp = list[mid].timestamp;

            if (currTimestamp === timestamp) {
                return list[mid].value;
            } else if (currTimestamp > timestamp) {
                rightPtr = mid - 1;
            } else {
                leftPtr = mid + 1;
            }
        }

        //rightPtr will be at the largest timestamp less than requested timestamp
        return list[rightPtr].value; 
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */