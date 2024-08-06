"use strict";
var Color;
(function (Color) {
    Color[Color["Pink"] = 0] = "Pink";
    Color[Color["White"] = 1] = "White";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
let color = Color.White;
console.log(color); //1
var Color1;
(function (Color1) {
    Color1[Color1["Pink"] = 1] = "Pink";
    Color1[Color1["White"] = 2] = "White";
    Color1[Color1["Black"] = 3] = "Black";
})(Color1 || (Color1 = {}));
let colorName = Color1[2];
console.log(colorName); //white
var Color2;
(function (Color2) {
    Color2[Color2["Pink"] = 1] = "Pink";
    Color2[Color2["White"] = 2] = "White";
    Color2[Color2["Black"] = 4] = "Black";
})(Color2 || (Color2 = {}));
let colorIndex = Color2['Black'];
console.log(colorIndex); //4
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
const today = Days.wednesday;
console.log(`Today is ${Days[today]}`); //wednesday
console.log(today); // index 3
// enum Direction {
//     UP, DOWN, LEFT, RIGHT
// }
//   let PlayerDirection : Direction = Direction.UP;
//   console.log(`Direction is ${Direction[PlayerDirection]}`); // up
//   console.log(PlayerDirection); // index 0
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// let directionName: string = Direction[0];
let directionName = Direction["3"];
console.log(directionName);
//NUMERIC
//   1-Numeric Enums - Default
//   enum CardinalDirection {
//     north,
//     east,
//     south,
//     west,
//   }
//   let currentDirect = CardinalDirection.north
//   console.log(currentDirect);
//   currentDirect = 'north' //error
// 2-Numeric Enums - Initialized
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["north"] = 1] = "north";
    CardinalDirection[CardinalDirection["east"] = 2] = "east";
    CardinalDirection[CardinalDirection["south"] = 3] = "south";
    CardinalDirection[CardinalDirection["west"] = 4] = "west";
})(CardinalDirection || (CardinalDirection = {}));
console.log(CardinalDirection.north); //1
console.log(CardinalDirection.west); //4
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = -1] = "Pending";
    Status[Status["kindness"] = 0] = "kindness"; //0
})(Status || (Status = {}));
console.log(`current status`);
let currentStatus = Status.Active;
console.log(currentStatus); // Outputs: 1
//   3-Numeric Enums - Fully Initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); //404
console.log(StatusCodes.Success); //200
//STRING
(function (CardinalDirection) {
    CardinalDirection["North"] = "NORTH";
    CardinalDirection["East"] = "EAST";
    CardinalDirection["South"] = "SOUTH";
    CardinalDirection["West"] = "WEST";
})(CardinalDirection || (CardinalDirection = {}));
console.log(CardinalDirection.North); //NORTH
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "APPLE";
    Fruit["Banana"] = "BANANA";
    Fruit["Orange"] = "ORANGE";
})(Fruit || (Fruit = {}));
console.log(Fruit["Apple"]); //Apple
// console.log(Fruit["APPLE"]);//error
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction["1"]); //up
// How can you iterate over the members of an enum in TypeScript?
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// A) Using a for...of loop
// B) Using a for...in loop
// C) Using the Object.keys method
// D) Using the Array.forEach method
// Answer: B, C
// Imagine you want to say the names of each color:
for (const key of Object.keys(Color)) {
    if (isNaN(Number(key))) {
        console.log(key); //red,green.blue
    }
}
// Looking at the Numbers of the Colors
for (const value of Object.values(Color)) {
    if (typeof value === 'number') {
        console.log(value);
    }
}
// Looking at Both Names and Numbers
for (const [key, value] of Object.entries(Color)) {
    if (typeof value === 'number') {
        console.log(`${key}: ${value}`);
    }
}
