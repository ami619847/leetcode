class ParkingSystem {
    private empty: number[] = [];

    constructor(big: number, medium: number, small: number) {
        this.empty = [big, medium, small];        
    }

    addCar(carType: number): boolean {
        //1-big, 2-medium, 3-small

        if (this.empty[carType - 1] > 0) {
            this.empty[carType - 1]--;
            return true;
        }

        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */