interface Student {
    student_Id: number;
    name: string;
};
interface Teacher {
    teacher_Id: number;
    teacher_Name: string;
};
type intersected_type = Student & Teacher;

let obj1: intersected_type = {
    student_Id : 1234,
    name: "Asma",
    teacher_Id: 4567,
    teacher_Name: "hamzah syed",
};
console.log(obj1.name);
console.log(obj1.teacher_Id);

// Here are some subjective questions related to intersection types in TypeScript:

// 1. **Explain the concept of intersection types in TypeScript. How do they differ 
// from union types? Provide examples to support your explanation.**
interface A {
    propA: string;
}

interface B {
    propB: number;
}

type IntersectionType = A & B;
type UnionType = A | B;

const intersected: IntersectionType = { propA: "hello", propB: 42 }; // Must have both properties
const union1: UnionType = { propA: "hello" }; // Valid
const union2: UnionType = { propB: 42 }; // Valid

// 2. **Describe a scenario in a TypeScript application where using intersection types
//  would be beneficial. Explain how you would implement it and the advantages it provides
//  over other typing methods.**
interface User {
    userId: number;
    username: string;
}

interface Admin {
    adminId: number;
    permissions: string[];
}

type AdminUser = User & Admin;

const admin: AdminUser = {
    userId: 1,
    username: "adminUser",
    adminId: 101,
    permissions: ["read", "write", "delete"]
};

// 3. **What are the potential pitfalls or challenges when using intersection types in 
// TypeScript? Provide an example where an intersection type might lead to a complex or 
// hard-to-maintain codebase.**
// ANSWER Complexity: Managing and understanding objects with many intersected types can 
// become challenging.
// Conflicting properties: If intersected types have properties with the same name but 
// different types, it can cause type conflicts.
// 4. **Given the following interfaces, demonstrate how to create an intersection type 
// and use it to create an object. Explain the properties and methods that the resulting
//  object will have.**
//    ```typescript
   interface Vehicle {
       make: string;
       model: string;
   }

   interface Boat {
       length: number;
       sail(): void;
   }

type AmphibiousVehicle = Vehicle & Boat;

const amphibious: AmphibiousVehicle = {
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

// 5. **Discuss how intersection types in TypeScript can be used to enforce stricter type 
// checking in large codebases. Provide an example to illustrate your point.**

// Answer:
// Intersection types enforce stricter type checking by ensuring that all properties and 
// methods from the intersected types are present in the resulting type. This reduces 
// errors and improves code quality.

// 6. **Create a TypeScript function that takes an object of an intersection type as a 
// parameter. Explain how the function can safely access properties and methods from all 
// the intersected types.**

interface BioData {
    name: string;
    age: number;
}
interface Education {
    master : string;
    year: number;
}
type MyData = BioData & Education 
function printmyName(myName:MyData) {
    console.log(`name ${myName.name}`);
    console.log(`age ${myName.age}`);
    console.log(`degree ${myName.master}`);
    console.log(`passiing year ${myName.year}`);
}
const myName: MyData = {
    name:"asma",
    age:35,
    master:"IN finance", 
    year: 2013
}
printmyName(myName)
// 7. **How do intersection types handle optional properties in TypeScript? Provide an 
// example where intersecting two types with optional properties results in a new type.**

interface C {
    propAa?: string;
}

interface D {
    propBb?: number;
}

type AB = C & D;

const obj: AB = {}; // Valid
const obj2: AB = { propAa: "hello" }; // Valid
const obj3: AB = { propBb: 42 }; // Valid
const obj4: AB = { propAa: "hello", propBb: 42 }; // Valid

// 8. **Compare and contrast the use of intersection types and inheritance (extending 
// classes or interfaces) in TypeScript. When might one approach be preferred over the 
// other?**

// 9. **Explain how intersection types can be used in combination with generics in 
// TypeScript. Provide an example where generics and intersection types work together to 
// create a flexible and reusable function or class.**
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
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
