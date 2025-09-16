class MyQueue {
    private inputStack: number[];
    private outputStack: number[];

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    push(x: number): void {
        // move elements from outputStack into inpotStack
        while (this.outputStack.length > 0) {
            this.inputStack.push(this.outputStack.pop()!);
        }
        // push new element into inputStack
        this.inputStack.push(x);
        
        //move elements from inputStack to outputStack
        while (this.inputStack.length > 0) {
            this.outputStack.push(this.inputStack.pop()!);
        }
    }

    pop(): number {
        return this.outputStack.pop()!;
    }

    peek(): number {
        return this.outputStack[this.outputStack.length - 1];    
    }

    empty(): boolean {
        return this.outputStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
