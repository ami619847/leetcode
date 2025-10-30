//Solution 1 - using array
// class MyHashMap {
//     private data;

//     constructor() {
//         this.data = new Array(10e6);
//     }

//     put(key: number, value: number): void {
//         this.data[key] = value;
//     }

//     get(key: number): number {
//         let val = this.data[key];
//         return val !== undefined ? val : -1;
//     }

//     remove(key: number): void {
//         delete this.data[key];
//     }
// }

//Soulution 2 - hash and linked list
//array length of 10^4
class LinkNode {
    public key;
    public val;
    public next: LinkNode | null;
    
    constructor(key = -1, val = -1, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

class MyHashMap {
    private map;
   
    constructor() {
        this.map = new Array(10^4).fill(null).map( () => new LinkNode() );
    }

    put(key: number, value: number): void {
        let curr = this.map[this.hash(key)];

        while (curr.next) {
            if (curr.next.key === key) {
                curr.next.val = value;
                return ;
            }
            curr = curr.next;
        }

        curr.next = new LinkNode(key, value);
    }

    get(key: number): number {
        let curr = this.map[this.hash(key)];

        while(curr.next) {
            if (curr.next.key === key) {
                return curr.next.val;
            }
            curr = curr.next;
        }

        return -1;
    }

    remove(key: number): void {
        let curr = this.map[this.hash(key)];

        while(curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return ;
            }
            curr = curr.next;
        }
    }

    hash(key: number): number {
        return key % this.map.length;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */