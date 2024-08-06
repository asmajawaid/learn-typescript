"use strict";
// Named function with opitional parameters
function buildNamed(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
;
let result = buildNamed("BOB");
// let result1 = buildNamed("BOB", "aliece", "charlie"); // error extra property
let result2 = buildNamed("BOB", "aliece");
console.log(result);
console.log(result2);
console.log(buildNamed("Asma", "Jawed"));
//anonymous function type with optional parameters
let buildNamed1 = function (firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
};
console.log(buildNamed1("asma arshad"));
