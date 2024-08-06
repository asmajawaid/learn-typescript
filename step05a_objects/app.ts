// function gre(person:{name:string,age:number}):string{
//     return `Hello ${person.name}`
// }

// console.log(gre({name:"asma",age:8}));
//other way of this example
interface Person0 {
    name: string;
    age: number;
}

function gre(person:Person0){
    return `Hello! ${person.name}`
}
console.log(gre({name:"asma",age:34}));
// ----------------------------------------------------

let teacher = {
    name: "Zeeshan",
    experiance: "10"
}
console.log(teacher.name);
console.log(teacher["experiance"]);

// type declaration
let student : {
    name: string,
    age: number
}
student = {
    name:"hadi",
    age: 8,
}
console.log(student["name"]);
console.log(student["age"]);

//inline type annotation
let student0 :{
    name: string;
    age: number;
    isStudent: boolean;
}
student0 = {
    name: "rasheed",
    age: 28,
    isStudent: true,
};
console.log(student0.isStudent);

//read only property

interface Car {
    readonly brand: string;
    model: string;
     year?: number;
}

let myCar :Car = {
    brand: "Toyota",
    model: "corolla",
    year: 2004,
}
console.log(myCar.year);
console.log(myCar.brand);
console.log(myCar.year);

// myCar.brand = "honda"  // error not assignable readonly to new value

console.log(myCar["brand"]);


interface Address {
    street: string;
    city: string;
    zipCode: string;
  }
  
  interface Person {
    name: string;
    age: number;
    address: Address;
    nickname?: string; // Optional property
    readonly id: number; // Readonly property
  }
  
  let person: Person = {
    name: "Alice",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Wonderland",
      zipCode: "12345"
    },
    id: 1 // Readonly not reassign
  };
  
  console.log(person.name);           // Output: Alice
  console.log(person.address.city);   // Output: Wonderland
  console.log(person.nickname);       // Output: undefined (since it's optional and not provided)
  console.log(person.id);
  
  // person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
  









