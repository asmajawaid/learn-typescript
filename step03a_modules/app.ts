
import y from "./first.js"

// import {b,c as d}  from "./second.js"; //1st method simple export. you can morethan one 

import d from "./second.js"; // 2nd method default export
// console.log(a + b + d); //output 17 (5+ 10 +2)

console.log("import", y  + d); //22

let z = y + 20;
console.log("t = ", z);
