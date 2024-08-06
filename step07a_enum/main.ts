enum Color {Pink, White, Black
}
let color = Color.White
console.log(color);//1


enum Color1{Pink =1, White, Black}
let colorName = Color1[2]
console.log(colorName);//white

enum Color2 {Pink=1, White=2,Black=4}
let colorIndex = Color2['Black']
console.log(colorIndex);//4



enum Days {
    sunday, monday,
    tuesday, wednesday, 
    thursday, friday,
    saturday
}
const today : Days =Days.wednesday;
console.log(`Today is ${Days[today]}`); //wednesday
console.log(today); // index 3


// enum Direction {
//     UP, DOWN, LEFT, RIGHT
// }
//   let PlayerDirection : Direction = Direction.UP;
//   console.log(`Direction is ${Direction[PlayerDirection]}`); // up
//   console.log(PlayerDirection); // index 0
  
  enum Direction {
    Up,
    Down,
    Left,
    Right
}
// let directionName: string = Direction[0];
let directionName: string = Direction["3"];

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

enum CardinalDirection {
    north = 1,
    east,
    south,
    west,
  }
  console.log(CardinalDirection.north); //1
  console.log(CardinalDirection.west); //4

  enum Status {
    Active = 1,
    Inactive = 0,
    Pending = -1,
    kindness //0
}
console.log(`current status`);

let currentStatus: Status = Status.Active;
console.log(currentStatus);  // Outputs: 1


//   3-Numeric Enums - Fully Initialized
  
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound); //404
  console.log(StatusCodes.Success); //200

//STRING
enum CardinalDirection {
    North = "NORTH",
    East = "EAST",
    South = "SOUTH",
    West = "WEST"
}
console.log(CardinalDirection.North); //NORTH


enum Fruit {
    Apple = "APPLE",
    Banana = "BANANA",
    Orange = "ORANGE"
}
console.log(Fruit["Apple"]);//Apple
// console.log(Fruit["APPLE"]);//error

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction["1"]); //up

// How can you iterate over the members of an enum in TypeScript?
enum Color {
    Red=0,//default
    Green,
    Blue
}
// A) Using a for...of loop
// B) Using a for...in loop
// C) Using the Object.keys method
// D) Using the Array.forEach method
// Answer: B, C

// Imagine you want to say the names of each color:
for(const key of Object.keys(Color)){
  if(isNaN(Number(key))){
    console.log(key);//red,green.blue
  }
}
// Looking at the Numbers of the Colors
for(const value of Object.values(Color)){
  if(typeof value === 'number'){
    console.log(value);
  }
}
// Looking at Both Names and Numbers
for(const [key,value] of Object.entries(Color)){
  if(typeof value === 'number'){
    console.log(`${key}: ${value}`);
  }
}