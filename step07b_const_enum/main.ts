const enum Color{Red, Green, Blue};
const c : Color = Color.Green //1
console.log(c);


const enum Color1{Red=1, Green, Blue};
// const colorName: string = Color1[2]; // not allow compile time error
// console.log(colorName);

const enum Color2{Red=1, Green=2, Blue=4};
const colorIndex = Color2['Blue'];
console.log(colorIndex);

const enum Questions {
    Q1 = "What is the capital of France?",
    Q2 = "What is 2 + 2?",
    Q3 = "What is the color of the sky?"
}

const enum Options {
    A1 = "Paris",
    A2 = "4",
    A3 = "Blue",
    B1 = "London",
    B2 = "3",
    B3 = "Green",
    C1 = "Berlin",
    C2 = "5",
    C3 = "Yellow"
}


