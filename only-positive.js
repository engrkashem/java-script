const inputArray = [1, 3, 22, 1, 3, 2, 3, 7, 0, -1, 44, 3, 22];
function positiveArray(arr) {
    const positiveArray = [];
    for (const number of arr) {
        if (number < 0) {
            break;
        }
        positiveArray.push(number);
    }
    return positiveArray;
}
console.log(positiveArray(inputArray));