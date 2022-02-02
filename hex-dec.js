const inputHexNum = '1aef';
function hexToDecConverter(hex) {
    let decimal = 0;
    let power = parseInt(hex.length) - 1;
    for (let bit of hex) {
        if (bit >= 0 && bit <= 9) {
            decimal += parseInt(bit) * Math.pow(16, power);
        }
        else if (bit == 'a' || bit == 'A') {
            bit = 10;
            decimal += bit * Math.pow(16, power);
        }
        else if (bit == 'b' || bit == 'B') {
            bit = 11;
            decimal += bit * Math.pow(16, power);
        }
        else if (bit == 'c' || bit == 'C') {
            bit = 12;
            decimal += bit * Math.pow(16, power);
        }
        else if (bit == 'd' || bit == 'D') {
            bit = 13;
            decimal += bit * Math.pow(16, power);
        }
        else if (bit == 'e' || bit == 'E') {
            bit = 14;
            decimal += bit * Math.pow(16, power);
        }
        else if (bit == 'f' || bit == 'F') {
            bit = 15;
            decimal += bit * Math.pow(16, power);
        }
        power--;
    }
    return decimal;
}
console.log('Your Equivalent decimal to Hexa Number ', inputHexNum, ' is ', hexToDecConverter(inputHexNum));