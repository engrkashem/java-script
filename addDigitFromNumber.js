function addDigits(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result;
}
const inputNumber = 5;
let totalresult = addDigits(inputNumber);
console.log(totalresult);