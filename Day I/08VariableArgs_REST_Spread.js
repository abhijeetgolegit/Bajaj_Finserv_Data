"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var numArr1 = [10, 20, 30, 40, 50];
var emp1 = { id: 100, name: 'Aayush', address: { city: 'Delhi' } };
var emp = { id: 100, ename: 'Manish', state: 'Maharashtra',
    city: 'Pune', pincode: 411038 };
var id = emp.id, ename = emp.ename, address = __rest(emp, ["id", "ename"]);
console.log(id + ' ' + ename);
console.log(address);
