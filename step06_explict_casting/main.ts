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

let value: unknown= "this is a string.";
let stringLength: any = (value as string).length;
console.log(`Length: ${stringLength}`);


let someValue: any = "this is a string";
// Casting `someValue` to a string
let strLength: number = (<string>someValue).length;

console.log(strLength); // Outputs: 16


// ### Example Scenarios

// #### 1. Casting from `any` to a Specific Type

let someValues: any = 123;
let strValue: string = someValues as string; // This will compile, but may cause runtime errors
console.log(strValue.length); // undefined


// #### 2. Casting Between Related Types

// When you have related types, such as a base class and a derived class, you can cast between them.

// ```typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

let pet: Animal = new Dog("Buddy", "Golden Retriever");

// Casting `pet` to `Dog`
let dog: Dog = pet as Dog;
console.log(dog.breed); // Outputs: Golden Retriever


// #### Example with Angle Brackets

 let mysteryToy: any = "This is a car";

// // Labeling the toy as a car to know it has wheels
let carLength: number = (<string>mysteryToy).length;

console.log(carLength); // Outputs: 12
// ```

// #### Example with `as` Keyword

// Now, imagine you write a sign next to the mystery box saying it has a car inside.


// let mysteryToy: any = "This is a car";

// // Writing a sign saying this is a car
// let carLength: number = (mysteryToy as string).length;

// console.log(carLength); // Outputs: 12



let mysteryToy0: any = 123;
// Pretending it's a string when it's not
let carLength0: number = (mysteryToy0 as string).length;

console.log(carLength0); // This will cause a problem because numbers don't have length!


// ### Summary

// Explicit casting is like pretending or guessing what kind of toy (thing) you have so you
//  can play with it correctly. You do this by labeling it or writing a sign, but you have 
// to be careful to guess right, or things might not work as expected.
let myValue: any = 42;
let myString: string = myValue as string;
console.log(typeof myString);

let myAge: any = "25";
let ageNumber: number = <number><any>myAge; //string
console.log("myage:");
console.log(typeof myAge);

let myValu: any = "100";
let myNumber: number = myValu as unknown as number;
console.log(myNumber + 50); //10050

let Value: any = "hello";
let mNumber: number = <number><any>Value;
console.log(mNumber); //hello

let myValue1: any = "true";
let myBoolean: boolean = myValue1 as unknown as boolean;
console.log(myBoolean);





