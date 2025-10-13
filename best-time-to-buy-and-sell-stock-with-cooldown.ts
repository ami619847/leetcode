function maxProfit2(prices: number[]): number {
    if (prices.length === 1) return 0;
    
    let n = prices.length;
    const buy = new Array(n + 2).fill(0);
    const sell = new Array(n + 2).fill(0);

    for (let day: number = n - 1; day >= 0; day-- ) {
        //buy scenarios, when not holding a stock:
        //buy today & proceed to tomorrow or skip & wait
        buy[day] = Math.max(-prices[day] + sell[day + 1], buy[day + 1]);

        //sell scenarios, when holding a stock:
        //sell, then buy, and cooldown (+2) or skip & wait
        sell[day] = Math.max(prices[day] + buy[day + 2], sell[day + 1])
    }
    
    return buy[0];
};