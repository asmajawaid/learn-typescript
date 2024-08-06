let message = "Hellow world";
console.loger(message); // type error


let num: number = 10;
num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'


function add(a: number, b: number): number {
    return a + b + "5"; //
}


let age: number = "30";


let obg : {name:string} = undefined;
console.log(obg.name);


let numbers: number[] = [1, 2, 3, 4];

// Trying to access an element using an index of type 'string'
let index: string = "2";
let num = numbers[index]; // Error: Element implicitly has an 'any' type because index expression is not of type 'number'
