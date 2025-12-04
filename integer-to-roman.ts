function intToRoman(num: number): string {
    const valueSymbols: Record<string, number> = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let res = '';

    for (let val in valueSymbols) {
        let count = num / valueSymbols[val];

        if (count > 0) {
            res += val.repeat(count);
            num = num % valueSymbols[val];
        }
    }

    return res;
};