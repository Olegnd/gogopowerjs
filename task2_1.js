'use strict';
var n = 1;
function isPowerOfTwo(value) {
    if (value % 2 != 0) {
        return false;
    }
    if (value === Math.pow(2,n)) {
        return true;
        }
    if (value > Math.pow(2,n)) {
        n = n + 1;
        return isPowerOfTwo(value);
    }
    else {
        return false;
    }
}
console.log('n= ', n);
console.log(isPowerOfTwo(1024));