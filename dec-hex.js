const inputDecimal = 42;
function decToHexConverter(Number) {
    let hexNumber = '';
    for (i = 0; Number > 0; i++) {
        let rem = Number % 16;
        if (rem >= 0 && rem % 16 < 9) {
            hexNumber += rem;
        }
        else if (rem == 10) { hexNumber += 'A'; }

        else if (rem == 11) { hexNumber += 'B'; }

        else if (rem == 12) { hexNumber += 'C'; }

        else if (rem == 13) { hexNumber += 'D'; }

        else if (rem == 14) { hexNumber += 'E'; }

        else if (rem == 15) { hexNumber += 'F'; }
        Number = parseInt(Number / 16);
    }
    return hexNumber;
}
let hexNumber = decToHexConverter(inputDecimal);
//const splitedHex = hexNumber.split('');
hexNumber = hexNumber.split('').reverse().join('')
console.log('Equivalent Hexadecimal to ', inputDecimal, ' decimal number is ', hexNumber);