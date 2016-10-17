'use strict';
var arrFibonacci = [1, 1],
    arrFibonacciEvenMinusTwo = [],
    arrFibonacciUnevenMinusFour = [],
    index = 2,
    everageArrFibonacciEvenMinusTwo,
    everageArrFibonacciUnevenMinusFour;
while (index <= 39) {
    arrFibonacci[index] = arrFibonacci[index - 2] + arrFibonacci[index - 1];
    index = index + 1;
}

console.log(arrFibonacci.length);
console.log(arrFibonacci);

arrFibonacciEvenMinusTwo = arrFibonacci.filter(function (value) {
    if (value % 2 === 0) {
        return value;
    }
}).map(function (value) {
    return value - 2;
})

console.log(arrFibonacciEvenMinusTwo.length);
console.log(arrFibonacciEvenMinusTwo);

arrFibonacciUnevenMinusFour = arrFibonacci.filter(function (value) {
    if (value % 2 != 0) {
        return value;
    }
}).map(function (value) {
    return value - 4;
})

console.log(arrFibonacciUnevenMinusFour.length);
console.log(arrFibonacciUnevenMinusFour);

everageArrFibonacciEvenMinusTwo = arrFibonacciEvenMinusTwo.reduce(
    function (previousValue, currentValue) {
        return previousValue + currentValue;
    }) / (arrFibonacciEvenMinusTwo.length);

console.log(everageArrFibonacciEvenMinusTwo);

everageArrFibonacciUnevenMinusFour = arrFibonacciUnevenMinusFour.reduce(
    function (previousValue, currentValue, index) {
        return previousValue + currentValue;
    }) / (arrFibonacciUnevenMinusFour.length);

console.log(everageArrFibonacciUnevenMinusFour);



