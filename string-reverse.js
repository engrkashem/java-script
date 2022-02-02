const str = 'Mohammad Abul Kashem';
function reverseString(str) {
    let reverseStr = '';
    for (const charecter of str) {
        reverseStr = charecter + reverseStr;
    }
    return reverseStr;
}
console.log('teh reverse of ', str, ' is', reverseString(str));