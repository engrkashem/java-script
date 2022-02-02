const array = ['habib', 'mahbub', 'rashedul', 'nawshaad', 'omar', 'siyam', 'rafiul'];
function largestName(array) {
    let largestName = array[0];
    console.log(largestName)
    for (const str of array) {
        if (largestName.length < str.length) {
            largestName = str;
        }
    }
    return largestName;
}
console.log('The largest Name is ', largestName(array));