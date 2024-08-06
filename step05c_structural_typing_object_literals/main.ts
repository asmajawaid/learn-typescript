let person1 = {age: 20, fullName: "asma jawaid",email:"kdkkdkk" }
// person1={age: 35, fullName: "jawaid iqbal"}// reassign but extra property not allowed
let person2 = { age: 65, fullName: "abdul hadi"}

person2= person1; // ok extra propert allow on stale object

// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;
  console.log(ball);
  console.log(sphere);
  

   // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
  //tube = ball;//Error
  ball = tube;
  console.log(ball);
  
  // Because a ball does not have a length, then it cannot be
  // assigned to the tube variable. However, all of the members
  // of Ball are inside tube, and so it can be assigned.
  
  // TypeScript is comparing each member in the type against
  // each other to verify their equality.

  //===================================================

// Now lets do it Case By Case


//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
									//Object literals can only have properties that exist in contextual type


                                    //Case 2a
// myType = { id: 2,  name_person: "Tom" };
//Case 2a: Error, renamed or missing property

//Case 2b 
//INDEX SIGNATURE

//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


//Case 3
// myType = { id: 2,  name: "Tom", age: 22 };
//Case 3: Error, excess property



//=================================================



//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2,  name_person: "Tom" };
//Case 2a
// myType = myType3;
//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y;// Ok, `fullname` matched by index signature

var myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object





/*
var x: { foo: number };
x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number, bar?: number };
y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`




var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
*/


  
  

interface personEx1{
    name: string;
    age: number;
}
const john: personEx1 = {
    name: "john",
    age: 34,
}
console.log(john); //print whole object

//structural tying
interface Car {
    make: string;
    model: string;
    year: number
}

function printCarIno(car:Car){
    console.log(`Car: ${car.make}, ${car.model}, ${car.year}`);
}
// printCarIno({make:"toyota",model: "corolla",year:2024})

//using object literal
const myCar = {
    make: "honda",
    model: "corolla",
    year: 2001
}
printCarIno(myCar)

// additional property

const myNewCar: Car = {
    make: "honda",
    model: "corolla",
    year: 2001,
    // color: "red" // print nahe karey ga additional property
}
printCarIno(myNewCar)

interface Dog {
    name: string;
    breadName?: string;
}

 interface Cat {
    name: string;
 }

 interface Person {
    firstName: string;
    lastName: string;
 }

//  let dogs:Dog = {name:"papu"};
//  let cats:Cat = {name:"raju"};

//  dog = cat;
//  cat = dog;

//  console.log(dog);
//  console.log(cat);

 
 let person : Person = {firstName:"john", lastName:"alia"};
 console.log(person);
 
//  dog = person; // require name property to dog
//  cat = person; // require name property to cat

// let dog:Dog = {name:"papu",breadName: "bul dog"};
//  let cat:Cat = {name:"raju"};

//  cat = dog;
//  dog = cat;

//  console.log(dog);
//  console.log(cat);

 //classes and  structural typing

 class Dog {
    name: string;
    private age: number;

    constructor( name: string,age: number){
        this.name = name;
        this.age = age
    }

 }
 class Cat {
    name: string;
    private age: number

    constructor( name: string,age: number){
        this.name = name;
        this.age = age
    }
 }

 let cats = new Cat("vanue",30)
 let dogs = new Dog("mars",20)

//  dogs = cats
//  cats = dogs // private property through error
 console.log(cats);
 console.log(dogs);
 
 let persons = {
    name: "john",
    someFn : function (){
        console.log("Hello" + this.name + "king in the north");   
    }
 }
 let bankAccount = { 
    accountNo: "100",
    someFn: function(){
        console.log(`please deposit some money`);
    }
 }
 let invokeSomeFn = function(obj:any){
         obj.someFn()
 }
 invokeSomeFn(persons);
 invokeSomeFn(bankAccount)