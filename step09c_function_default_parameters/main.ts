
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)

function biuldName (firstName: string, lastName: string = "khan") {
    if(lastName){
           return firstName + " " + lastName;
    }else{
        return firstName
    };
};
let result = biuldName("bob"); //works correctly because last parameter is optional
let result1 = biuldName("zia", "ullah"); //correct
// let result2 = biuldName("bob", "nick", "herry"); //error extra argument
console.log(result);
console.log(result1);

//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)

let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName1("asma", "jawaid"));

// Example with Optional Parameters
function exampleWithOptional(a: number, b: number = 2, c?: number) {
    console.log(a, b, c);
  }
  
  exampleWithOptional(1);       // Output: 1 2 undefined
  exampleWithOptional(1, 3);    // Output: 1 3 undefined
  exampleWithOptional(1, 3, 4); // Output: 1 3 4

  function example(a: number = 1, b: number, c: number = 3) {
    console.log(a, b, c);
  }
  
  example(undefined, 2);  // Output: 1 2 3
  example(5, 2);          // Output: 5 2 3

//   Destructuring with Nested Objects
function displayUser({ 
    name = "John Doe", 
    address: { city = "Unknown", country = "Unknown" } = {} 
  }: { 
    name?: string; 
    address?: { city?: string; country?: string } 
  }) {
    console.log(`Name: ${name}, City: ${city}, Country: ${country}`);
  }
  
  // Call the function with an empty object
  displayUser({}); // Output: Name: John Doe, City: Unknown, Country: Unknown
  
  // Call the function with partial address
  displayUser({ name: "Alice", address: { city: "New York" } }); // Output: Name: Alice, City: New York, Country: Unknown
  
  // Call the function with complete address
  displayUser({ name: "Bob", address: { city: "San Francisco", country: "USA" } }); // Output: Name: Bob, City: San Francisco, Country: USA
  
// ========================================================
  function printPerson({ name = "John Doe", age = 25 }: { name?: string; age?: number }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  // Call the function with an empty object
  printPerson({}); // Output: Name: John Doe, Age: 25
  
  // Call the function with a partial object
  printPerson({ name: "Alice" }); // Output: Name: Alice, Age: 25
  
  // Call the function with all properties
  printPerson({ name: "Bob", age: 30 }); // Output: Name: Bob, Age: 30

  

//   What is the output of the following function call sum(10, undefined, 30) given the function definition function sum(a: number, b: number = 5, c: number = 10) { return a + b + c; }?

// A. 45
// B. 25
// C. 40
// D. 55

// Answer: A

// Default parameters can be assigned to individual properties within the destructured object.

