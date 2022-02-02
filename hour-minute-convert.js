function hourToMinute(hour) {
    let equivalentMinute = hour * 60;
    return equivalentMinute;
}
let inputHour = '10:30am';
let minute = inputHour.slice(3, 5)
const inputHourInt = parseInt(inputHour);
let result = hourToMinute(inputHourInt) + parseInt(minute);
console.log('Your given time is equivalent to ', result, ' minutes');
// console.log(inputHour, inputHourInt, minute, result, 'minute');