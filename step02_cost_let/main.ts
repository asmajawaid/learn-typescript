
// use const where variable vlue not change
const a ="abc";
const b :number = 123;
const c = true;

////I suggest use let instead of var everywhere, 
//becuase let has blocked scope

if (true) {
    let z= 5;
} else {
    let z = "123";
};
console.log("let :" + z ); // error z is not define in this scop
