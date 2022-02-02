const inputNumber = 0;
function primeNumberCalc(number) {
    let result;
    if (number === 1) {
        result = '1 is neither prine nor composit number.';
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                result = number + ' is not a prime number';
                break;
            }
            else {
                result = number + ' is a Prime Number.'
            }
        }
    }
    else {
        result = number + ' is not a prime number';
    }
    return result;
}
console.log(primeNumberCalc(inputNumber));
