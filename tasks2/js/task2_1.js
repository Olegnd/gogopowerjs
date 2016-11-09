'use strict';
/* var n = 1;
function isPowerOfTwo(value) {

console.log('n= ', n);
    
    if (value % 2 != 0) {
        return false;
    }
    if (value === Math.pow(2, n)) {
        return true;
    }
    if (value > Math.pow(2, n)) {
        n = n + 1;
        return isPowerOfTwo(value);
    }
    else {
        return false;
    }
}
*/


function isPowerOfTwo(value) {
    if (value % 2 != 0) {
        return false;
    }
    value = value / 2;
    if (value === 1) {
        return true;
    }
    else {
        return isPowerOfTwo(value);
    }
}
console.log(isPowerOfTwo(8));