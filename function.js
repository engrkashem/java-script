function subtractionOperator(num1, num2) {
    var result = num1 - num2;
    return result;
}
var productPrice = 470;
var moneyGiventoSeller = 500;
console.log('Change =', subtractionOperator(moneyGiventoSeller, productPrice));

function divider(num1, num2) {
    var result = num1 / num2;
    return result;
}
function remainingNumber(num1, num2) {
    var result = num1 % num2;
    return result;
}
var availabeApple = 330;
var eatersNumber = 12;
console.log('each got', parseInt(divider(availabeApple, eatersNumber)), 'pcs Apple');
console.log('Apple remaining in hand:', remainingNumber(availabeApple, eatersNumber), 'pcs');