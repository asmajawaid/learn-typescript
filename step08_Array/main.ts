let arrays: number[]=[];
arrays.push(123,485,568); //dynamically adding
// arrays= [1,2,3,4,5]
console.log(arrays);

// let array4: number[] = new number[2];//error



// Question: Which method would you use to create a new array that contains only the even 
// numbers from the original array numbers?
const numbers = [1, 2, 3, 4, 5, 6];
function evenNumbers() {
    let result = numbers.filter(numbers => numbers % 2 === 0)
    return console.log(result);
    
}
evenNumbers()//2 4 6

// Question: How can you create a new array where each element is the square of each 
// element in the original array numbers?
const number1 = [1, 2, 3, 4, 5];

function squareNumber() {
    let result = number1.map(number1 => number1 *  number1)
    return result
}
console.log(squareNumber());

// Question: Which method would you use to find the index of the first element greater 
// than 10 in the array numbers?
const number = [4, 9, 16, 25, 36];
function fiindNumber() {
    let result = number.findIndex(number => number > 10);
    return result
};
console.log(fiindNumber()); // jis index se 10 number se barey he

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function concateArray() {
    let result = arr1.concat(arr2);
    return result
};
console.log(concateArray());

// Question: How can you modify every element in the array numbers by multiplying each 
// element by 2 and create a new array with these modified values?

const num = [1, 2, 3, 4];
let res = num.map(num => num * 2)
console.log(res);

// Question: How can you flatten a nested array nestedArray with one level of nesting?
const nestedArray = [1, [2, 3], [4, 5]];
let oo=nestedArray.flat()
console.log(oo);

// Question: How can you remove duplicate values from an array numbers?
console.log("dublicate");

const numb = [1, 2, 2, 3, 4, 4, 5,7,7];

// Array.from(new Set(numb))
// numbers.filter((value, index, self) => self.indexOf(value) === index)

function removeDublicateNumber(numbers:number[]):number[] {
return [...new Set(numbers)]
}
const uniqueNumber = removeDublicateNumber(numb);
console.log(uniqueNumber);


// Question: How would you sort an array of objects items based on the name property in ascending order?
// const items = [{ name: 'Banana' }, { name: 'Apple' }, { name: 'Cherry' }];
// items.sort((a, b) => a.name.localeCompare(b.name))

interface Items {name : string;}
function sortedItemByName(items:Items[]): Items[] {
    return items.sort((a,b)=> a.name.localeCompare(b.name));
}
const items: Items[] =[
    {name: "orange"},
    {name: "Apple"},
    {name: "bnana"},
    {name: "kiwi"}
];
const sortedItem = sortedItemByName(items);
console.log(sortedItem);


// How can you create a new array where each element is an object with index and value 
// properties from the array values?

// const values = [10, 20, 30];
// function creatIndexValueArray(value:any[]):{index:number;value:any}[] {
    
// } 
//not completed
// values.map((value, index) => ({ index, value }))
// values.reduce((acc, value, index) => { acc.push({ index, value }); return acc; }, [])

// // Question: How can you find all elements in the array numbers that are greater than 10 and less than 30?
const numberS = [5, 12, 25, 7, 30, 19];
// numberS.filter(number => number > 10 && number < 30)
// numberS.reduce((acc, number) => { if (number > 10 && number < 30) acc.push(numberS); return acc; }, [])

    function numberRange(numbers:number[]):number[] {
        return numbers.filter(number => number >= 10 && number <= 30 )
    }
    const filterNumber = numberRange(numberS);
    console.log(filterNumber);
    