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
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("a", "b", "c", "d", "e", "f", "g");
console.log(employeeName);
//anonymous function type with Rest parameters
const buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
console.log(buildNameFun("a", "b", "c", "d", "e", "f", "g"));
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
function concatenateStrings(separator, ...strings) {
    return strings.join(separator);
}
console.log(concatenateStrings(", ", "apple", "banana", "cherry")); // "apple, banana, cherry"
console.log(concatenateStrings(" - ", "cat", "dog", "mouse")); // "cat - dog - mouse"
// function buildName(firstName: string, ...restOfName: string[]): string {
//     return firstName + " " + restOfName.join(" ");
// }
// console.log(buildName("John", "Doe")); // "John Doe"
// console.log(buildName("John", "Paul", "Jones")); // "John Paul Jones"
const person = {
    name: "Alice",
    age: 25,
    country: "USA"
};
const { name: string } = person, rest = __rest(person, ["name"]);
// console.log(name); // "Alice"
// console.log(rest); // { age: 25, country: "USA" }
console.log(person);
