
// anonymous
let teacher: {name: string, experence: number} = {
    name: "abdul hadi",
    experence: 10,
}
console.log(teacher.experence);
console.log(teacher["name"]);

//Aliased object type
type Student = {
    name: string,
    age?: number,
};
let students :Student = {
    name: "Abdul Qadir",
    age:3,
}
console.log(students.age);
console.log(students["name"]);

//interfaces

interface Manager {
    name: string;
    subordinates?: number
}
let manager : Manager = {
    name: "Abdul samad",
    subordinates: 50,
}
console.log(manager.name);
console.log(manager["subordinates"]);

type Toy = {
    name: string;
    type: string;
    color: string;
};

let myToy: Toy = {
    name: "LEGO",
    type: "Blocks",
    color: "multi Color",
};

let yourToy: Toy ={
    name: "barbie",
    type: "doll",
    color: "pink",
};

console.log(myToy.name);
console.log(myToy.type);
console.log(myToy.color);
console.log(yourToy["name"]);
console.log(yourToy["type"]);
console.log(yourToy["color"]);

