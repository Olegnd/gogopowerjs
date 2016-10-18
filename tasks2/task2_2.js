'use strict';
var b;
function a(n) {
    n = ++n;
      function b() {
        return b.call++;
      };
      b.call = 1;
      var c = Array.from(arguments);
console.log('c = ',c);
      return b;
    }
b = a(10);

console.log(b());
console.log(b());
console.log(b());
console.log(b());


