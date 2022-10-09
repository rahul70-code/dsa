/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.arr = [big, medium, small]
    return null;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.arr[carType-1] > 0) {
        this.arr[carType-1] = this.arr[carType-1]-1;
        return true
    }
    return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

let parkingSystem = new ParkingSystem(0,0,2);
console.log(parkingSystem.addCar(1))
console.log(parkingSystem.addCar(2))
console.log(parkingSystem.addCar(3))
// console.log(parkingSystem.addCar(1))
