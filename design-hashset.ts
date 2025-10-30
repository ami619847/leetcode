class MyHashSet {
    private arr: boolean[];

    constructor() {
        this.arr = new Array(10e6 + 1).fill(false);
    }

    add(key: number): void {
        this.arr[key] = true;
    }

    remove(key: number): void {
        this.arr[key] = false;
    }

    contains(key: number): boolean {
        return this.arr[key];
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */