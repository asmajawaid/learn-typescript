//EXPECT ARRAY
function customFind(arr, element) {
    for (let i = 0; i < 0; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
}
;
console.log(customFind(["light"], "loko"));
//EXPECT OBJECT
function logPersonName(person) {
    console.log(person.name);
}
const person = {
    name: "john",
    age: 35,
};
logPersonName(person);
export {};
