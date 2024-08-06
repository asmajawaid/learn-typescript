let message = "Hellow world";
message = 6; //assignability error. in string type dont overwrite with number
console.log(message);

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "Alice",
    age: 30
};

// Trying to assign an object with missing properties
person = { name: "Bob" }; // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'


