//EXPECT ARRAY
function customFind(arr: string[], element: string): boolean | void {
  for (let i = 0; i < 0; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
};
console.log(customFind(["light"],"loko"))

//EXPECT OBJECT
function logPersonName(person: TPerson): void {
  console.log(person.name);
}
type TPerson = {
  name: string;
  age: number;
};
const person: TPerson = {
  name: "john",
  age: 35,
};
logPersonName(person);
