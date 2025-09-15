function dailyTemperatures(temperatures: number[]): number[] {
    //stack for temp indices
    const stack: number [] = [];
    const answer: number [] = new Array(temperatures.length).fill(0);
    
    for (let i: number = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 && 
            temperatures[i] > temperatures[stack[stack.length - 1]] 
        ) {
            //calculate waiting days
            const idx: number = stack.pop()!;
            answer[idx] = i - idx;
            // console.log('idx', idx);
        }
        stack.push(i);
    }

    return answer;
};