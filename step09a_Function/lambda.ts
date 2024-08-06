
// simple arraow function
const addSum = (a: number, b: number) => {
    return a+ b
}
console.log(addSum(10, 30));

// if single expression,
const addSum0 = (a: number, b: number):number => a + b;
console.log(addSum0(20, 80));

// Example 2: Arrow Function with No Parameters
 const grret = (): void => {
    console.log('Hello! World.');
 };
 grret();

//  Example 3: Arrow Function with a Single Parameter
 const square = (x: number): number => x * x
 console.log(square(4));
 
//  Example 4: Arrow Function in Array Methods
// Arrow functions are often used with array methods like map, filter, and reduce.

const array = [ 1,2,3,4,5];
const doubbed = array.map((n: number) => n * 2);
console.log(doubbed);

// Example 6: Arrow Function as a Parameter Type

type GreetFunction0 = (a: string) => void;

const greeter0 = (fn: GreetFunction0): void => {
    fn("Hello, TypeScript!");
};

const greet0: GreetFunction0 = (message: string): void => {
    console.log(message);
};

greeter0(greet0); // Outputs: Hello, TypeScript!
