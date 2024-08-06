
import y from "./first.js"

// import {b,c as d}  from "./second.js"; //1st method simple export. you can morethan one 

import d from "./second.js"; // 2nd method default exportfd
// console.log(a + b + d); //output 17 (5+ 10 +2)

console.log("import", y  + d); //22

let z = y + 20;
console.log("t = ", z);



export function name() {
    
}
export var pi= 123;

export interface user {
    id: string,
    name: number
}
export class grret {
    constructor(email:string) {
        
    }
}

export let message = "abc"


