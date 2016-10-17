'use strict';
function add(n) {
    return function (x) {
        return x + n;
    }
}
var addFive = add(5);

console.log(addFive(10));