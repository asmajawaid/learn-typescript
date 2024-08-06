"use strict";
// let jsonString = '{"name": "John", "age": 30}';
// let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.name); // Outputs: John
let jsonString = '{"name": "Alice", "age": 28}';
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Type-checked access to 'name'
