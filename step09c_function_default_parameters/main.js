"use strict";
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function biuldName(firstName, lastName = "khan") {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
    ;
}
;
let result = biuldName("bob"); //works correctly because last parameter is optional
let result1 = biuldName("zia", "ullah"); //correct
// let result2 = biuldName("bob", "nick", "herry"); //error extra argument
console.log(result);
console.log(result1);
//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
let buildName1 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName1("asma", "jawaid"));
// Example with Optional Parameters
function exampleWithOptional(a, b = 2, c) {
    console.log(a, b, c);
}
exampleWithOptional(1); // Output: 1 2 undefined
exampleWithOptional(1, 3); // Output: 1 3 undefined
exampleWithOptional(1, 3, 4); // Output: 1 3 4
