'use strict';
var increment;
function getIncrement() {
  var beep = 1;
  return function (number) {
    return { call: beep++, value: number + 1 }
  }
}
increment = getIncrement();


console.log(increment(1));
console.log(increment(5));
console.log(increment(10));
console.log(increment(20));