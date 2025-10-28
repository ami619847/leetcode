//time: O(1) for both get and put, space: O(capacity)
class LRUCache {
    capacity: number;
    map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        const value = this.map.get(key);

        if (value === undefined) return -1;

        //hack to remove the requested key and place it at the end
        this.map.delete(key);
        this.map.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        //hack to remove last element to avoid overflow
        //only if doesn't have the inserted key is a new key
        if (this.map.size >= this.capacity && !this.map.has(key)) {
            const firstKey = this.map.keys().next().value!;
            this.map.delete(firstKey);
        }

        //remove the requested key and place it at the end
        this.map.delete(key);
        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */