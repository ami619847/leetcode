// time: O(n), space: O(1)

function maxProfit(prices: number[]): number {
    let profit: number = 0;

    // iterate starting from the second day for the comparison with prev day
    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }   

    return profit; 
};
