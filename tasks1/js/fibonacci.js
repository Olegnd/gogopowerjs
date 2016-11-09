'use strict';
var arrayFibonacci = [],
    numberFibonacci = 40,
    arrayFibonacciEvenMinusTwo = [],
    arrayFibonacciOddMinusFour = [],
    index = 0,
    everageArrayFibonacciEvenMinusTwo,
    everageArrayFibonacciOddMinusFour;

while (index <= numberFibonacci - 1) {
    arrayFibonacci[index] = getNumberFibonacci(index + 1);
    index = ++index;
}

//console.log(arrayFibonacci.length);
//console.log(arrayFibonacci);

arrayFibonacciEvenMinusTwo = arrayFibonacci.filter(function (value) {
    if (value % 2 === 0) {
        return value;
    }
}).map(function (value) {
    return value - 2;
});

//console.log(arrayFibonacciEvenMinusTwo.length);
//console.log(arrayFibonacciEvenMinusTwo);

arrayFibonacciOddMinusFour = arrayFibonacci.filter(function (value) {
    if (value % 2 !== 0) {
        return value;
    }
}).map(function (value) {
    return value - 4;
});

//console.log(arrayFibonacciOddMinusFour.length);
//console.log(arrayFibonacciOddMinusFour);

everageArrayFibonacciEvenMinusTwo = arrayFibonacciEvenMinusTwo.reduce(
    function (previousValue, currentValue) {
        return previousValue + currentValue;
    }) / (arrayFibonacciEvenMinusTwo.length);

console.log(everageArrayFibonacciEvenMinusTwo);

everageArrayFibonacciOddMinusFour = arrayFibonacciOddMinusFour.reduce(
    function (previousValue, currentValue, index) {
        return previousValue + currentValue;
    }) / (arrayFibonacciOddMinusFour.length);

console.log(everageArrayFibonacciOddMinusFour);

function getNumberFibonacci(number) {
    if (number === 1) {
        return 1;
    }
    if (number === 2) {
        return 1;
    }
    return getNumberFibonacci(number - 1) + getNumberFibonacci(number - 2);
}
