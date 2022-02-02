function getCube(number) {
    let result = number;
    for (let i = 1; i < number; i++) {
        result *= number;
    }
    return result;
}
let inputNumber = 3;
let cube = getCube(inputNumber);
console.log(cube);
console.log(Math.pow(inputNumber, inputNumber));
console.log(inputNumber ** inputNumber);
