function minMaxNumber(array) {
    // let maxNumber = 0;
    // let minNumber = 100000000000000;
    let minMax = [10000000000000000, 0];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < minMax[0]) {
            minMax[0] = array[i];
        }
        if (array[i] > minMax[1]) {
            minMax[1] = array[i];
        }

    }
    return minMax;
}
let inpurArray = [243, 222, 6, 453, 10, 22, 33, 11, 44, 54, 34, 23, 11];
let minMaxContainer = minMaxNumber(inpurArray);
console.log('Minimun Number is ', minMaxContainer[0], 'and Maximum Number is ', minMaxContainer[1]);