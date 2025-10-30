
class OrderedStream {
    stream: string[];
    index: number;

    constructor(n: number) {
        this.stream = [];
        this.index = 0;
    }

    insert(idKey: number, value: string): string[] {
        //insert value at the correct position
        this.stream[idKey - 1] = value;

        //if the inserted idKey is the current index, move the index forward
        if (this.index === idKey - 1) {
            // move index to the next empty position
            while(this.stream[this.index]) {
                this.index++;
            }
        }

        //return the chunk of values from current index to the updated index
        return this.stream.slice(idKey - 1, this.index);
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */