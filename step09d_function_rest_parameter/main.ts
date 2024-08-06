function buildName(firstName:string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("a", "b", "c", "d", "e", "f", "g");
console.log(employeeName);

//anonymous function type with Rest parameters
const buildNameFun : (firstName:string, ...restOfName: string[])=> string = 
function(firstName:string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildNameFun("a", "b", "c", "d", "e", "f", "g"));
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

function concatenateStrings(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}

console.log(concatenateStrings(", ", "apple", "banana", "cherry")); // "apple, banana, cherry"
console.log(concatenateStrings(" - ", "cat", "dog", "mouse")); // "cat - dog - mouse"

// function buildName(firstName: string, ...restOfName: string[]): string {
//     return firstName + " " + restOfName.join(" ");
// }

// console.log(buildName("John", "Doe")); // "John Doe"
// console.log(buildName("John", "Paul", "Jones")); // "John Paul Jones"

const person = {
    name: "Alice",
    age: 25,
    country: "USA"
};

const { name: string, ...rest } = person;
// console.log(name); // "Alice"
// console.log(rest); // { age: 25, country: "USA" }
console.log(person);

