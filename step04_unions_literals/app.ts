//===========UNION TYPE======
let myName: string | null; //only accept string or null

myName = null;
console.log(myName); //null

myName = "asma";
console.log(myName);

// myName =undefined; //error
// myName = 6;          //error
// ===========================================

type State = "loading"|"success"|"error";
function handelState (state:State){
    switch (state){
         case "loading":
            console.log("Loading...");
            break;
        case "success":
            console.log("success!");
            break;
        case "error":
            console.log("error...");
            break;
    }
}
handelState("loading")
// ------------------------------------------------------------
type Eventtype = "Click"| "Mouseover"|"Mouseout"
function handelEvent(event:Eventtype){
    console.log(`Event: ${event}`);
}
handelEvent("Click")


//===============NARROW TYPE===============

let myAge: string | number;

myAge = 34; //narrowing
console.log(myAge.toLocaleString()); // .laga kr number suported method use kar sakty he

// console.log(myAge.toLwercase()); //error

myAge = "DONT KNOW"; //narrowing
console.log(myAge.toLowerCase()); // ok common to both types
// //can be called even without narrowing

// ======================================================================
//here math.random generate number randomley from 0 to 1 if No less then 0.6 its print khan
let newAge = Math.random() > 0.6 ? "Asma khan" : 60;

// newAge.toLwerCase() //dirct method access nahe hoga

if (newAge == "khan") {
  //newage type is string
  newAge.toUpperCase(); //can be called
};

if (typeof newAge === "string"){
    newAge.toUpperCase()//typeof newage :string
                        //can be called
};

  // same condion (let newAge = Math.random() > 0.6 ? "khan" : 60;)
  typeof newAge === "string"
 ? newAge.toUpperCase() //ok if string so this condition apply
 : newAge.toFixed() //ok if number so this condition apply

 console.log(newAge);

// ===========================LITERAL TYPE==========================

let age : number | "died" | "unknown";

age = 35; //ok
age = "died"; //ok
age = "unknown";
// age = "live" //error
age = 65; //ok

let zia : "zia"; 
 zia = "zia"; //ok
//  zia ="khan" //error


let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

if (yourName) {
    yourName.toUpperCase(); //ok : string
};

// yourName.toUpperCase(); //error : Object is possibly 'undefined'.
yourName?.toUpperCase();//ok

console.log(yourName);
 
// ============================TYPE ALIAS================

type dataType = string | number | boolean | null | undefined;
let Data : dataType;
Data = "asma jawaid"; //ok


// You can even combine them

type Id = number | string;
type myId = Id | undefined | null 

type car ={
    year: number,
    model: string,
    cartype: string, 

}
let mycar : car ={
    year: 2024,
    model: "honda",
    cartype:"corolla",
}
console.log(mycar);
// ----------------------------------------------------------------
type Shape ="circle"|"Rectangle"|"Squire";
type Color = "red"| "green"| "blue"
type Drawing = {
    shape: Shape,
    color: Color,
    size: number,
}
function draw(drawing:Drawing){
    console.log(`Drawing a ${drawing.shape} ${drawing.color} of size ${drawing.size}`);
}
draw({shape:"circle",color:"blue",size:50})

// ========================TYPE INTERFACES==========================

interface rectangel {
    height :number,
    width: number,
};
const areaOfRectagle : rectangel = {
    height: 6,
    width: 8,
};
console.log(areaOfRectagle);

// =========================TYPE INTERSECTION=======================
//An intersection type creates a new type by combining multiple existing types.The new type 
// has all features of the existing types.

// Suppose that you have three interfaces: BusinessPartner, Identity, and Contact.

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: number;
}

// The following defines two intersection types:
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e :Employee = {
    id: 1234,
    name: "asma",
    email: "sjkh@gmail",
    phone: 123555558
};
console.log(e);


let c : Customer ={
      name: "asma",
      credit: 64844,
      email: "dkfn@gamil",
      phone:125455,
};
console.log(c.name);

// see readME file for more details