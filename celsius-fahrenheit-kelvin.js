//celsius to fahrenheit
function celsiustoFahrenheit(celsius) {
    const fahrenheit = (9 * (celsius / 5)) + 32;
    return fahrenheit;
}
//fahrenheit to celsius
function fahrenheittoCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
}
//celsius to kelvin
function celsiustoKelvin(celsius) {
    const kelvin = celsius + 273;
    return kelvin;
}
//kelvin to fahrenheit
function kelvintoFahrenheit(kelvin) {
    const fahrenheit = (((kelvin - 273) * 9) / 5) - 32;
    return fahrenheit;
}
const inputTemp = 36.66;
const inputTempFah = 98;
const inputTempKel = 273;
console.log(celsiustoFahrenheit(inputTemp), 'Fahrenheit');
console.log(fahrenheittoCelsius(inputTempFah), 'Deg. Celsius');
console.log(celsiustoKelvin(inputTemp), 'K, (kelvin)');
console.log(kelvintoFahrenheit(inputTempKel), 'Fahrenheit');