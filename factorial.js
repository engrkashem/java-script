function getFactorial1(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
function getFactorial2(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result *= i;
    }
    return result;
}
function getFactorial3(number) {
    let result = 1;
    let i = 1;
    while (i <= number) {
        result *= i;
        i++;
    }
    return result;
}
function getFactorial4(number) {
    let result = 1;
    let i = number;
    while (i > 0) {
        result *= i;
        i--;
    }
    return result;
}

const inputNumber = 6;
console.log('The factorial of ', inputNumber, ' is ', getFactorial1(inputNumber));
console.log('The factorial of ', inputNumber, ' is ', getFactorial2(inputNumber));
console.log('The factorial of ', inputNumber, ' is ', getFactorial3(inputNumber));
console.log('The factorial of ', inputNumber, ' is ', getFactorial4(inputNumber));