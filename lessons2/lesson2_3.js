'use strict';
function sum() {
    var args,
        result;
    args = Array.from(arguments);

    console.log(args);

    return result = args.reduce(function (previous, current) {
        return previous + current;
    })

}

console.log(sum(5, 6));