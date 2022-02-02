function matchStick(house) {
    let stickPerHouse = 6;
    let stickNumber = stickPerHouse;
    for (let i = 1; i < house; i++) {
        stickNumber += (stickPerHouse - 1);
    }
    return stickNumber;
}
const numberofHouse = 87;
let totalStick = matchStick(numberofHouse);
console.log(totalStick);