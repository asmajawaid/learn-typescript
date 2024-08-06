// let jsonString = '{"name": "John", "age": 30}';
// let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.name); // Outputs: John

// let person = { name: "Jane", age: 25 };
// let jsonString = JSON.stringify(person);
// console.log(jsonString); // Outputs: {"name":"Jane","age":25}

interface Person {
    name: string;
    age: number;
}

let jsonString = '{"name": "Alice", "age": 28}';
let parsedObject: Person = JSON.parse(jsonString);
console.log(parsedObject.name); // Type-checked access to 'name'
