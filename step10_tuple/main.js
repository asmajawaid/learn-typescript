"use strict";
let myTuples;
myTuples = [5, "box", true];
// we can update a variable
myTuples[1] = "Bob";
//accessinig the value
console.log(myTuples[0]); //5
console.log(myTuples[1]); //box
console.log(myTuples[2]); //true
// You can create a tuple using JavaScript's array syntax:
const tuples = ["foo", 404];
console.log(tuples);
// but you will need to declare its type as a tuple.
const passingSlot = ["{}", "lolo", 404];
console.log(passingSlot);
let ourTuple;
ourTuple = [5, true, 'coding'];
ourTuple.push("code");
ourTuple.push(55);
console.log(ourTuple); //allow
const readonlyO = [5, false];
// readonlyO.push() //throw error dont override
console.log(readonlyO);
const graph = [51.5, 41.9];
const [x, y] = graph;
console.log(graph);
//using tuple in function
function getUserInfo() {
    return ["Alice", 30, true];
}
let user = getUserInfo();
console.log(typeof user);
console.log(user); // Output: [ 'Alice', 30, true ]
//destructuring
let [Name, age, isactive] = user;
console.log(Name);
console.log(age);
console.log(isactive);
let person = ["Alice", 30];
let [names, ages] = person;
names = "Bob";
console.log(person);
let config = ["dark mode", true];
let [, isEnabled] = config;
console.log(isEnabled);
console.log(config);
let point = [10, 20];
point[0] = point[1];
console.log(point);
