function binaryConverter(str) {
    let decimal = 0;
    let power = parseInt(str.length) - 1;
    for (let i = 0; i < parseInt(str.length); i++) {
        decimal += parseInt(str[i]) * Math.pow(2, power);
        power--;
    }
    return decimal;
}
const inputStringNumber = '1001'
let decimalNumber = binaryConverter(inputStringNumber);
console.log(decimalNumber);