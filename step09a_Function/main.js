"use strict";
//Note: All parameters are required
//Named function
function add(x, y) {
    return x + y;
}
console.log(add(5, 10));
//Anonymous function
let add1 = function (x, y) {
    return x + y;
};
console.log(add1(5, 10));
// Anonymous Function (Function Expression)
let sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2)); // Outputs: 3
// Anonymous Function (Arrow Function)
let sum1 = (a, b) => a + b;
console.log(sum1(10, 10));
// Usage in Higher-Order Functions
let numberS = [1, 2, 3, 4, 5];
let doubled = numberS.map((n) => {
    return n * 2;
});
// with shorter syntax
// let doubled = numberS.map(n => n * 2);
console.log(doubled);
// Anonymous Functions in Callbacks
setTimeout(() => {
    console.log('this run after 1 second:');
}, 1000);
// Anonymous function with explict type
let add2 = function (x, y) {
    return x - y;
};
console.log(add2(50, 20));
//type names dont matter
let add3 = function (x, y) {
    return x / y;
};
console.log(add3(100, 10));
//Lambda functions
let add4 = (a, b) => a * b;
console.log(add4(7, 7));
function greeter(fn) {
    fn("Hello! World");
}
const greet = (message) => {
    console.log(message);
};
greeter(greet);
