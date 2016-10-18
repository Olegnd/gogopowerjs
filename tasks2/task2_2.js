'use strict';
var b;
function a(n) {
    a.value = ++n;
      function b() {
        return b.call++;
      };
      b.call = 1;
      
console.log('value = ',value);
console.log('call  = ',call);    
      return b;
    }
b = a(10);

console.log(b());
console.log(b());
console.log(b());
console.log(b());


