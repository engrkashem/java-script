function fibonacci(n) {
    n = Math.round(n)
    const fibo = [0, 1];
    if (typeof n != 'number') {
        return 'Error: You inserted invalid number. please insert a positive number.'
    }
    else if (n < 0) {
        return 'Error: please insert a positive number. Number of succession can not be negetive.'
    }
    else if (n >= 0 && n <= 1) {
        return fibo[n];
    }
    for (i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const nThNumber = 5.6;
console.log(fibonacci(nThNumber));