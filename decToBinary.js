function decimalConverter1(number) {
    let binary = '';
    for (let i = 0; number >= 1; i++) {
        // binary = binary.slice(0, i) + (number % 2) + binary.slice(i);
        binary += number % 2;
        number /= 2;
        number = parseInt(number);
    }
    const splitString = binary.split('');
    const reverseString = splitString.reverse();
    binary = reverseString.join('')
    return binary;
}

function decimalConverter2(number) {
    let binary = 0;
    let remainder = 0;
    for (let i = 1; number > 0; i *= 10) {
        remainder = number % 2;
        binary = binary + remainder * i;
        number /= 2;
        number = parseInt(number);
    }
    return binary;
}
const inputDecNumber = 16;
console.log('Your equivalent Binary to decimal Number ', inputDecNumber, ' is ', decimalConverter1(inputDecNumber), '(2)');
console.log('Your equivalent Binary to decimal Number ', inputDecNumber, ' is ', decimalConverter2(inputDecNumber), '(2)');


/* //this code provided by P-Hero
function convertToBinary(x) {
    let bin = 0;
    let rem;
    let i = 1;
    let step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(bin);
} 
convertToBinary(19);
 */



