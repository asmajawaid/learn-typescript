//INDEX SIGNATURE

//basic syntax
interface MyObject {
    [key: string]: any;
}
//WITH OBJECT 
interface StringNumberDictionary {
    [key: string]: number;
}

const example: StringNumberDictionary = {
    apples: 10,
    oranges: 20,
    bananas: 30
};

console.log(example[10]); // Output: undefine
console.log(example['oranges']); // Output: 20
console.log(example.bananas);    // Output: 30
console.log(example); // pora object


interface MixedKeysDictionary {
    [key: string]: string | number;
    [index: number]: string;
}

const mixedExample: MixedKeysDictionary = {
    name: "John",
    age: 30,
    email: "kkjk",
    0: "zero",
    1: "one",
    5: "five"
};

console.log(mixedExample['name']);  // Output: "John"
console.log(mixedExample[1]);       // Output: "one"

interface MyObjects {
    [key: string]: number;
}
const examples: MyObjects = { "one": 1, "two": 2 };
examples["three"] = 3;
console.log(examples["three"]);


