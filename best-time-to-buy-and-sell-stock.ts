function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE; //infinity ensure the minimum
    let maxProfit = 0;
    
    for (const currentPrice of prices) {
        minPrice = Math.min(currentPrice, minPrice);
        // console.log( minPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;
};