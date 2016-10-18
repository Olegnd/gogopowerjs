'use strict';
var increment;
function a() {
  var c = 1;
  return function (n) {
    return { call: c++, value: n + 1 }
  }
}
increment = a();


console.log(increment(1));
console.log(increment(5));
console.log(increment(10));
console.log(increment(20));