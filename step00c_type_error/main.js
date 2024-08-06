"use strict";
let message = "Hellow world";
console.loger(message); // type error
let num = 10;
num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'
function add(a, b) {
    return a + b + "5"; //
}
let age = "30";
let obg = undefined;
console.log(obg.name);
let numbers = [1, 2, 3, 4];
// Trying to access an element using an index of type 'string'
let index = "2";
let num = numbers[index]; // Error: Element implicitly has an 'any' type because index expression is not of type 'number'
