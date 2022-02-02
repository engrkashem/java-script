function getInterest(capital, rate, time) {
    const simpleInterest = (capital * rate * time) / 100;
    return simpleInterest;
}
const invesment = 100000;
const interestRate = '4%';
const invesmentTerm = '2 year';
console.log('Your Total Interest amount is ', getInterest(invesment, parseInt(interestRate.slice(0, 1)), parseInt(invesmentTerm.slice(0, 1))));