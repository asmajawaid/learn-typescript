"use strict";
//===========UNION TYPE======
let myName; //only accept string or null
myName = null;
console.log(myName); //null
myName = "asma";
console.log(myName);
// myName =undefined; //error
// myName = 6;          //error
//===============NARROW TYPE===============
let myAge;
myAge = 34; //narrowing
console.log(myAge.toLocaleString()); // .laga kr number suported method use kar sakty he
// console.log(myAge.toLwercase()); //error
myAge = "DONT KNOW"; //narrowing
console.log(myAge.toLowerCase()); // ok common to both types
// //can be called even without narrowing
// ======================================================================
//here math.random generate number randomley from 0 to 1 if No less then 0.6 its print khan
let newAge = Math.random() > 0.6 ? "khan" : 60;
// newAge.toLwerCase() //dirct method access nahe hoga
if (newAge == "khan") {
    //newage type is string
    newAge.toUpperCase(); //can be called
}
;
if (typeof newAge === "string") {
    newAge.toUpperCase(); //typeof newage :string
    //can be called
}
;
// same condion (let newAge = Math.random() > 0.6 ? "khan" : 60;)
typeof newAge === "string"
    ? newAge.toUpperCase() //ok if string so this condition apply
    : newAge.toFixed(); //ok if number so this condition apply
console.log(newAge);
// ===========================LITERAL TYPE==========================
let age;
age = 35; //ok
age = "died"; //ok
age = "unknown";
// age = "live" //error
age = 65; //ok
let zia;
zia = "zia"; //ok
//  zia ="khan" //error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); //ok : string
}
;
// yourName.toUpperCase(); //error : Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //ok
console.log(yourName);
let Data;
Data = "asma jawaid"; //ok
let mycar = {
    year: 2024,
    model: "honda",
    cartype: "corolla",
};
console.log(mycar);
;
const areaOfRectagle = {
    height: 6,
    width: 8,
};
console.log(areaOfRectagle);
let e = {
    id: 1234,
    name: "asma",
    email: "sjkh@gmail",
    phone: 123555558
};
console.log(e);
let c = {
    name: "asma",
    credit: 64844,
    email: "dkfn@gamil",
    phone: 125455,
};
console.log(c.name);
