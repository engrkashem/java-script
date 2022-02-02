function getGPA(number) {
    if (number >= 80 && number <= 100) {
        const result = 'You Got Grade: A+'; return result;
    }
    else if (number >= 75 && number < 80) {
        const result = 'You Got Grade: A'; return result;
    }
    else if (number >= 70 && number < 75) {
        const result = 'You Got Grade: A-'; return result;
    }
    else if (number >= 65 && number < 70) {
        const result = 'You Got Grade: B+'; return result;
    }
    else if (number >= 60 && number < 65) {
        const result = 'You Got Grade: B'; return result;
    }
    else if (number >= 55 && number < 60) {
        const result = 'You Got Grade: B-'; return result;
    }
    else if (number >= 50 && number < 55) {
        const result = 'You Got Grade: C+'; return result;
    }
    else if (number >= 45 && number < 50) {
        const result = 'You Got Grade: C'; return result;
    }
    else if (number >= 40 && number < 45) {
        const result = 'You Got Grade: D'; return result;
    }
    else if (number >= 0 && number < 40) {
        const result = 'You Got Grade: F'; return result;
    }
    else { const result = 'Opps!, You Got Cought!!! Do not try to make me fool, haa!!!!! You Got a magical number '; return result; }

}
const inputNumber = 111;
console.log(getGPA(inputNumber));