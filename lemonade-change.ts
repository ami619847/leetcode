function lemonadeChange(bills: number[]): boolean {
    let fiveDollarBills: number = 0, tenDollarBills: number = 0;
    
    for (const customerBill of bills) {
        if (customerBill === 5) {
            fiveDollarBills++;
        } else if (customerBill === 10) {
            if (fiveDollarBills > 0) {
                fiveDollarBills--;
                tenDollarBills++;
            } else return false;
        } else {
            //the bill is 20, so give 15 as change
            if (fiveDollarBills > 0 && tenDollarBills > 0) {
                //one 10 and one 5
                fiveDollarBills--;
                tenDollarBills--;
            } else if (fiveDollarBills >= 3) {
                // trhee bills of 5
                fiveDollarBills -= 3;
            } else return false;
        }
    }

    return true;
};