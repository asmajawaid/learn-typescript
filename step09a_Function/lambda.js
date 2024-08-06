"use strict";
// simple arraow function
const addSum = (a, b) => {
    return a + b;
};
console.log(addSum(10, 30));
// if single expression,
const addSum0 = (a, b) => a + b;
console.log(addSum0(20, 80));
// Example 2: Arrow Function with No Parameters
const grret = () => {
    console.log('Hello! World.');
};
grret();
//  Example 3: Arrow Function with a Single Parameter
const square = (x) => x * x;
console.log(square(4));
//  Example 4: Arrow Function in Array Methods
// Arrow functions are often used with array methods like map, filter, and reduce.
const array = [1, 2, 3, 4, 5];
const doubbed = array.map((n) => n * 2);
console.log(doubbed);
