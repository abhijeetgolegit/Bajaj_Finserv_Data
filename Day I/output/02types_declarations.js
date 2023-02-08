"use strict";
function throwError(errorMsg) {
    console.log('Inside throwError!');
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends!');
    }
}
keepProcessing();
console.log('Last Statement!');
