"use strict";
let myBook = {
    auther: {
        firstName: "zia",
        lastName: "khan",
    },
    name: "my Best Book",
};
const user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Somewhere",
        country: "USA"
    }
};
console.log(user);
// ```
// ### Using Types
// Types in TypeScript are similar to interfaces but can also be used to define more complex shapes and unions. Here's how you can define a nested object using types:
// ```typescript
// type Address = {
//     street: string;
//     city: string;
//     country: string;
// };
// type User = {
//     name: string;
//     age: number;
//     address: Address;
// };
// const user: User = {
//     name: "Jane Doe",
//     age: 25,
//     address: {
//         street: "456 Another St",
//         city: "Anywhere",
//         country: "Canada"
//     }
// };
// console.log(user);
// ```
// ### Accessing Nested Properties
// You can access nested properties using dot notation. For example:
// ```typescript
console.log(user.address.city); // Output: Anywhere
// interface User {
//     name: string;
//     age: number;
//     address?: Address; // optional property
// }
// const user: User = {
//     name: "Alice",
//     age: 28
//     // address is optional
// };
// console.log(user);
// ```
// ### Nested Arrays
// If you have arrays within your nested objects, you can define them like this:
// ```typescript
// interface Address {
//     street: string;
//     city: string;
//     country: string;
// }
// interface User {
//     name: string;
//     age: number;
//     addresses: Address[];
// }
// const user: User = {
//     name: "Bob",
//     age: 35,
//     addresses: [
//         {
//             street: "789 First St",
//             city: "Elsewhere",
//             country: "UK"
//         },
//         {
//             street: "101 Second St",
//             city: "Everywhere",
//             country: "Australia"
//         }
//     ]
// };
// console.log(user);
// ```
// This provides a comprehensive way to define and use nested objects in TypeScript, ensuring type safety and better code structure.
