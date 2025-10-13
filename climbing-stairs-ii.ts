function climbStairs(n: number, costs: number[]): number {
    const minCostToReach = new Array(n + 1).fill(Infinity);
    minCostToReach[n] = 0;

    //dp from the step n (top) to the bottom
    for (let currStep = n; currStep >= 0; currStep--) {
        //try jump sizes of 1, 2, or 3 steps
        for (let jumpSize = 1; jumpSize <= 3; jumpSize++) {
            const prevStep = currStep - jumpSize;
            if (prevStep >= 0) {
                const jumpCost = costs[currStep - 1] + (jumpSize * jumpSize);
                //find the minimum cost to reach the previous step
                minCostToReach[prevStep] = Math.min(minCostToReach[prevStep], minCostToReach[currStep] + jumpCost);
            }
        }
    }

    return minCostToReach[0];
};