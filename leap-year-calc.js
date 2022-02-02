function isLeapYear1(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
function isLeapYear2(year) {
    let analyze = ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
    switch (analyze) {
        case true: return true;
        default: return false;
    }
}
const inputYear = 2023;
let givenYear = isLeapYear2(inputYear);
console.log(inputYear + ' is a leap year? Ans:' + givenYear);