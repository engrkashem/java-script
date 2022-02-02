function isEven(age) {
    if (age % 2 == 0) {
        return true;
    }
    else { return false; }
}
const inputAge = 33;
let givenAge = isEven(inputAge);
console.log('Your Given Age (' + inputAge + ') is an even number? Ans: ' + givenAge);