function isValid(s: string): boolean {    
    const stack: string [] = []; //for open brackets
    const hash: { [key:string]: string} = {')': '(', ']': '[', '}': '{'};

    for (const char of s) {
        if (char in hash) {
            if (stack.length && stack[stack.length - 1] === hash[char]) { //making sure stack is not empty and comparing with last char
                stack.pop(); //removing matching bracket
            } else {
                return false;
            }
        } else {
            stack.push(char); //pushing open bracket
        }
    }
    return stack.length === 0;
};
