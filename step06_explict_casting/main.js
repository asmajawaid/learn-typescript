"use strict";
// ### What is Explicit Casting?
// Imagine you have a box of toys, but you can't see inside the box. You know there might 
// be different types of toys, like cars, dolls, or blocks. Sometimes, you might need to 
// tell your friend exactly what kind of toy is inside the box, even if you can't see it 
// yet. This is a bit like playing pretend or using your imagination to guess what toy is 
// inside.
// ### Two Ways to Do It
// 1. **Using Angle Brackets (`<>`)**: This is like putting a label on the box.
// 2. **Using `as` Keyword**: This is like writing on a sign next to the box.
// ### `as` Syntax
let uName = "Hello world";
console.log(uName);
console.log(`Length: ${uName.length}`);
let value = "this is a string.";
let stringLength = value.length;
console.log(`Length: ${stringLength}`);
let someValue = "this is a string";
// Casting `someValue` to a string
let strLength = someValue.length;
console.log(strLength); // Outputs: 16
// ### Example Scenarios
// #### 1. Casting from `any` to a Specific Type
let someValues = 123;
let strValue = someValues; // This will compile, but may cause runtime errors
console.log(strValue.length); // undefined
// #### 2. Casting Between Related Types
// When you have related types, such as a base class and a derived class, you can cast between them.
// ```typescript
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
let pet = new Dog("Buddy", "Golden Retriever");
// Casting `pet` to `Dog`
let dog = pet;
console.log(dog.breed); // Outputs: Golden Retriever
// #### Example with Angle Brackets
let mysteryToy = "This is a car";
// // Labeling the toy as a car to know it has wheels
let carLength = mysteryToy.length;
console.log(carLength); // Outputs: 12
// ```
// #### Example with `as` Keyword
// Now, imagine you write a sign next to the mystery box saying it has a car inside.
// let mysteryToy: any = "This is a car";
// // Writing a sign saying this is a car
// let carLength: number = (mysteryToy as string).length;
// console.log(carLength); // Outputs: 12
let mysteryToy0 = 123;
// Pretending it's a string when it's not
let carLength0 = mysteryToy0.length;
console.log(carLength0); // This will cause a problem because numbers don't have length!
// ### Summary
// Explicit casting is like pretending or guessing what kind of toy (thing) you have so you
//  can play with it correctly. You do this by labeling it or writing a sign, but you have 
// to be careful to guess right, or things might not work as expected.
let myValue = 42;
let myString = myValue;
console.log(typeof myString);
let myAge = "25";
let ageNumber = myAge; //string
console.log("myage:");
console.log(typeof myAge);
let myValu = "100";
let myNumber = myValu;
console.log(myNumber + 50); //10050
let Value = "hello";
let mNumber = Value;
console.log(mNumber); //hello
let myValue1 = "true";
let myBoolean = myValue1;
console.log(myBoolean);
