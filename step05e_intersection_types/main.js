"use strict";
;
;
let obj1 = {
    student_Id: 1234,
    name: "Asma",
    teacher_Id: 4567,
    teacher_Name: "hamzah syed",
};
console.log(obj1.name);
console.log(obj1.teacher_Id);
const intersected = { propA: "hello", propB: 42 }; // Must have both properties
const union1 = { propA: "hello" }; // Valid
const union2 = { propB: 42 }; // Valid
const admin = {
    userId: 1,
    username: "adminUser",
    adminId: 101,
    permissions: ["read", "write", "delete"]
};
const amphibious = {
    make: "Amphibico",
    model: "AmphiX",
    length: 20,
    sail() {
        console.log("Sailing...");
    }
};
console.log(amphibious.make); // Amphibico
console.log(amphibious.length); // 20
amphibious.sail(); // Sailing...
function printmyName(myName) {
    console.log(`name ${myName.name}`);
    console.log(`age ${myName.age}`);
    console.log(`degree ${myName.master}`);
    console.log(`passiing year ${myName.year}`);
}
const myName = {
    name: "asma",
    age: 35,
    master: "IN finance",
    year: 2013
};
printmyName(myName);
const obj = {}; // Valid
const obj2 = { propAa: "hello" }; // Valid
const obj3 = { propBb: 42 }; // Valid
const obj4 = { propAa: "hello", propBb: 42 }; // Valid
// 8. **Compare and contrast the use of intersection types and inheritance (extending 
// classes or interfaces) in TypeScript. When might one approach be preferred over the 
// other?**
// 9. **Explain how intersection types can be used in combination with generics in 
// TypeScript. Provide an example where generics and intersection types work together to 
// create a flexible and reusable function or class.**
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const Obj1 = { a: 1 };
const Obj2 = { b: "string" };
const mergedObj = merge(Obj1, Obj2);
console.log(mergedObj); // { a: 1, b: "string" }
// 10. **In a TypeScript project, you need to combine the properties of several different 
// types to create a new type that represents a complex object. Describe the steps you 
// would take to achieve this using intersection types, and explain any potential issues 
// you might encounter.**
// Steps:
// Define the individual types or interfaces.
// Create an intersection type that combines these types.
// Use
