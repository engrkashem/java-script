const inputDecNumber = 8;
function decOctConverter(number) {
    let octNumber = '';
    for (i = 0; number > 0; i++) {
        octNumber += number % 8;
        number = parseInt(number / 8);
    }
    octNumber = octNumber.split('').reverse().join('')
    return parseInt(octNumber);
}
console.log('Equivalent Octal number to decimal ', inputDecNumber, ' is ', decOctConverter(inputDecNumber));