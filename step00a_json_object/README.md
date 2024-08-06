JSON ( Javascript Object Notation )
1.JSON stands for Javascript Object Notation.

2.JSON is a text-based data format that is used to store and transfer data.

3.// JSON syntax

{

 "name": "Vipin",

 "age": 21,

 "gender": "male",
}

But wait, Is JSON is similar to javaScript objects?

The Answer is No.

1.JavaScript objects can contain functions but JSON not.
2.JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.
JSON Data
1.JSON data consists of key/value pairs similar to JavaScript object properties.
2.The key and values are written in double quotes separated by a :.
3.Example :
// JSON data

    "name": "Vipin"
4.JSON data requires double quotes for the key.
JSON Object
1.The JSON object is written inside curly braces { }.

2.JSON objects can contain multiple key/value pairs.

3.Example :

 // JSON object

 { "name": "Vipin", "age": 21 }
JSON Array
1.JSON array is written inside square brackets [ ].

2.Example :

 // JSON array

 [ "Vipin", "Ankit", "Raj"]
Accessing JSON Data
1.We can access JSON data using the dot notation.

2.Example :

 // JSON object

 const detail = { "name": "Vipin", "age": 21 }

 // accessing JSON object

 console.log(detail. name); // Vipin
3.We can also use square bracket syntax [] to access JSON data.

4.Example :

 // JSON object

 const detail = {

     "name": "Vipin",

     "age": 21
 }
// accessing JSON object

console.log(detail["age"]); // Vipin

Use of JSON
1.JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
2.JSON data are very easy to parse and use.
3.JSON is language independent(We can create and use JSON in other programming languages too).
Examples of JSON
1.package.json
2.tsconfig.json
Reference Twitter Post on JSON

/////////////////////////////////////////////////////////////

Parsing and Stringification: In TypeScript, you can parse JSON strings into JavaScript objects using JSON.parse() and convert JavaScript objects into JSON strings using JSON.stringify().

Example of parsing JSON:

let jsonString = '{"name": "John", "age": 30}';
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Outputs: John

Example of stringifying an object:

let person = { name: "Jane", age: 25 };
let jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"name":"Jane","age":25}

Type Safety: TypeScript provides type safety for JSON operations through type annotations and interfaces. You can define TypeScript interfaces to represent the structure of JSON objects, allowing for type-checking and IntelliSense support in IDEs.

Example:

interface Person {
    name: string;
    age: number;
}

let jsonString = '{"name": "Alice", "age": 28}';
let parsedObject: Person = JSON.parse(jsonString);
console.log(parsedObject.name); // Type-checked access to 'name'

