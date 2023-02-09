"use strict";
var person1;
var person2 = {
    doShopping: function () {
        return 'Shopping Online!';
    },
    doWork: function () {
        return 'Work from Home!';
    }
};
console.log(person2.doShopping());
console.log(person2.doWork());
var person3 = {
    doWork: function () {
        return 'Work from Home!';
    }
};
