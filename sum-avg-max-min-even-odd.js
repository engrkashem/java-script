const inputArray = [1, 2, 3, 5, 11, 12, 14, 90, 99, 2, 1, 5, 8, 1];
function summation(array) {
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum;
}
console.log('The Summation is ', summation(inputArray));
//Finding Average of Array Elements.
function average(array) {
    let sum = 0;
    const countNumber = array.length;
    for (const number of array) {
        sum += number;
    }
    const avg = sum / countNumber;
    return avg;
}
console.log('The Average is ', parseFloat(average(inputArray).toFixed(2)));
//Finding Maximum number from an array.
function maximum(array) {
    let max = array[0];
    for (const number of array) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}
console.log('The Maximum number is ', maximum(inputArray));
//Finding Minimum number from an array.
function minimum(array) {
    let min = array[0];
    for (const number of array) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log('The Minimum number is ', minimum(inputArray));
//Finding even number only from an array
function evenNumbers(array) {
    let evenArray = [];
    for (const number of array) {
        if (number % 2 == 0) {
            evenArray.push(number);
        }
    }
    return evenArray;
}
console.log('The Resultant Array with even number only is ', evenNumbers(inputArray));
//Finding odd number only from an array
function oddNumbers(array) {
    let oddArray = [];
    for (const number of array) {
        if (number % 2 == 1) {
            oddArray.push(number);
        }
    }
    return oddArray;
}
console.log('The Resultant Array with odd number only is ', oddNumbers(inputArray));
//Find an array from an array that has one element for one time.
function rejectRepeatNumbers(array) {
    let resultantArray = [];
    for (const number of array) {
        if (resultantArray.indexOf(number) == -1) {
            resultantArray.push(number);
        }
    }
    return resultantArray;
}
console.log('The Resultant Array with every number unique is ', rejectRepeatNumbers(inputArray));