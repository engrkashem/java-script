const inputOctNumber = 752;
function octDecConverter(number) {
    number = number.toString()
    let decimal = 0;
    let power = parseInt(number.length) - 1
    for (const char of number) {
        decimal += char * Math.pow(8, power);
        power--;
    }
    decimal = parseInt(decimal);
    return decimal;
}
console.log('Equivalent decimal to ', inputOctNumber, '(8) is ', octDecConverter(inputOctNumber));