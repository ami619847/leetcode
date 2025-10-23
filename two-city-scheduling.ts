//time: O(n log n), space: O(1)
//greedy approach
function twoCitySchedCost(costs: number[][]): number {
    //sort by cost difference aCost - bCost
    costs.sort((a, b) => 
        (a[0] - a[1]) - (b[0] - b[1])
    );
    // console.log('costs=', costs);

    let minCost = 0;
    const n = costs.length / 2;

    //send first to city A
    for (let i = 0; i < n; i++) {
        minCost += costs[i][0];
        // console.log('a minCost=', minCost);
    }
    
    // then city B
    for (let i = n; i < 2 * n; i++) {
        minCost += costs[i][1];
        // console.log('B minCost=', minCost);
    }

    return minCost;
};