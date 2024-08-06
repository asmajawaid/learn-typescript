"use strict";
//any
let value;
console.log(value);
value = "abc";
console.log(value);
value = 123;
console.log(value);
value = true;
console.log(value);
value = null;
console.log(value);
value = undefined;
console.log(value);
value = [];
console.log(value);
value = {};
console.log(value);
value = Math.random();
console.log(value);
value = () => { console.log("hi! nice to meet you."); };
console.log(value);
//unknown
// In TypeScript, any value can be assigned to the “unknown” type, but without 
// a type assertion, “unknown” can’t be assigned to anything but itself
let myvalue;
myvalue = true;
console.log(myvalue);
myvalue = 445;
console.log(myvalue);
myvalue = "hii";
console.log(myvalue);
myvalue = null;
console.log(myvalue);
myvalue = undefined;
console.log(myvalue);
myvalue = [];
console.log(myvalue);
myvalue = {};
console.log(myvalue);
myvalue = Math.random();
console.log(myvalue);
myvalue = () => {
    console.log("hi again.");
};
console.log(myvalue);
//assigning the value of type unknown to variables of other types
console.log("assigning the value of unknown");
let wall; //undefine
console.log(wall);
const vall = "wall";
console.log(vall); // unddefine
const vall2 = wall;
console.log(vall2); //undefine
// const vall3 : boolean = wall;
// console.log(vall3); //error
// const vall4 : number = wall;
// console.log(vall4); //error
// const vall5 : string = wall;
// console.log(vall5); //error
// const vall6 : Record<string, any> = wall; //error
// const vall7: any[] = wall //error
// const vall8 : (...arg:any[]) => void = wall //error
//never
//function returning never must not have a reachable end point
// function error(message:string):never {
//     throw new Error("message");
//     }
//     console.log(error("jii"));
// function fail() {
//     return error("something faild")
// };
// console.log(fail());
// Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//     while (true) {}
//   }
let valueS;
valueS = 42; // OK
valueS = "hello"; // OK
valueS = true; // OK
// Type checking is required
if (typeof valueS === "string") {
    console.log(valueS.toUpperCase()); // OK
}
if (typeof valueS === "number") {
    console.log(valueS.toFixed(2)); // OK
}
console.log(valueS);
// Direct operations without type checking are not allowed
// value.method(); // Error: Object is of type 'unknown' run time error
function logValue(value) {
    console.log(value.toFixed(2)); // No type checking, might cause runtime error if value is not a number
}
function logUnknownValue(value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2)); // Type checked, safe to call toFixed
    }
    else {
        console.log("Value is not a number");
    }
}
logValue(42); // OK, logs "42.00"
logValue("hello"); // Runtime error: toFixed is not a function
logUnknownValue(42); // OK, logs "42.00"
logUnknownValue("hello"); // OK, logs "Value is not a number"
// Question: Write a function processValue that takes a parameter of type any and logs the 
// length of the value if it's a string, otherwise logs "Not a string".
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(`its not a string.`);
    }
    ;
}
;
processValue("helloworld.");
processValue(122);
// Question: Write a function handleUnknown that takes a parameter of type unknown. 
// If the value is a number, log its square. If it's a string, log its uppercase version. 
// Otherwise, log "Unknown type".
function handleUnknown(params) {
    if (typeof params === "number") {
        console.log(`its square. ${params * params}`);
    }
    else if (typeof params === 'string') {
        console.log(`log its uppercase version. ${params.toUpperCase}`);
    }
    else {
        console.log(`unknown type.`);
    }
}
;
handleUnknown("kokoa");
// Question: Define a variable randomValue of type any and assign it different values 
// (number, string, boolean). Then, log the type of randomValue and call a method on it 
// without type checking.
let randomValue;
randomValue = 10;
console.log(typeof randomValue); // Logs: number
console.log(randomValue.toFixed(2)); // Logs: 10.00
randomValue = "hello";
console.log(typeof randomValue); // Logs: string
console.log(randomValue.toUpperCase()); // Logs: HELLO
randomValue = true;
console.log(typeof randomValue); // Logs: boolean
// This will cause a runtime error if uncommented because boolean doesn't have toUpperCase method.
// console.log(randomValue.toUpperCase());
// Question: Create a function processData that accepts a parameter of type unknown and 
// logs "It's a string!" if the value is a string, "It's a number!" if the value is a 
// number, and "Unknown type!" for any other type.
function processData(value) {
    if (typeof value === 'string') {
        console.log("It's a string!");
    }
    else if (typeof value === 'number') {
        console.log("It's a number!");
    }
    else {
        console.log("Unknown type!");
    }
}
processData("test"); // Logs: It's a string!
processData(42); // Logs: It's a number!
processData(true); // Logs: Unknown type!
processData({}); // Logs: Unknown type!
//never
// Functions that Never Return:
// Function returning never must not have a reachable end point
// function error(message:string):never {
//     throw new error(message)
// }
// Inferred return type is never
// function fail() {
//     return error('something failed.')
// }
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
;
function handleToy(toy) {
    switch (toy) {
        case "Ball":
            console.log("It's a ball!");
            break;
        case "Doll":
            console.log("It's a doll!");
            break;
        case "Block":
            console.log("It's a block!");
            break;
        default:
            // This will never happen, so we mark it with `never`
            const neverValue = toy;
            console.log("Unknown toy!");
    }
}
