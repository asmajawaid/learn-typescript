
//strong type syntax
let a : string = "pakistan";
a = "USA";
let b : number = 9;
let c : boolean = true;

//type inference
let d = "USA";
let e = 9;
e = 10.22;
let f = false;
f = true;

// explicit implicit
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(someValue); //this is a string
console.log(strLength); //16

let something;
console.log(typeof something); //undefine type

