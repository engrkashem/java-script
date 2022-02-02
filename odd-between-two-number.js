function oddEvenCount(min, max) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 != 0) {
            oddCount++
        }
        if (i % 2 == 0) {
            evenCount++
        }
    }
    let result = [oddCount, evenCount];
    return result;
}
const oddEvenCountBetweenTwoNumber = oddEvenCount(50, 80);
console.log(oddEvenCountBetweenTwoNumber);
console.log('Amount of odd number: ', oddEvenCountBetweenTwoNumber[0]);
console.log('Amount of even number: ', oddEvenCountBetweenTwoNumber[1]);