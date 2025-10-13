function minCostClimbingStairs(cost: number[]): number {
    // using bottom up appoach, add 0 to the end of the array
    // to reach last 2 steps from the 3rd step
    for (let i: number = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]); 
    }
    
    return Math.min(cost[0], cost[1]);  
};