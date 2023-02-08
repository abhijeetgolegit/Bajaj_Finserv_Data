"use strict";
function Add(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return x + y;
}
console.log(Add(3, 4));
console.log(Add(3));
console.log(Add());
