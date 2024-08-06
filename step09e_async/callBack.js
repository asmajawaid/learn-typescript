//CALLBACK CONCEPT
function parenctFunc(func) {
    console.log("i am a parent function."); // 2nd ye excecute hwa
    func(); // 4th parentFunc ne yaha invoke kya child func ko
}
function childFunction() {
    console.log("i am a child function");
}
parenctFunc(childFunction); //1st invoke parentfunc
// parenctFunc(function() {
//     console.log("i am child function.");
// })              // inkvoke kar k usi me function bhi pas kar sakty he
// --------------------------------------------------------------
//WASHING PROCESS
console.log("folding loundry");
// function washing(callBack: any) {
//     console.log("washing started...");
//     setTimeout(() => {
//         console.log("wasing done...");
//         callBack();
//     },5000);
// }
// function soaking(callBack: any ) {
//     console.log("soaking started...");
//     setTimeout(() => {
//         console.log("soaking done...");
//         callBack();
//     },3000);
// }
// function drying() {
//     console.log("drying started...");
//     setTimeout(() => {
//         console.log("drying done...");
//     },2000);
// }
// console.log("making biryani");
// washing(() => {
//     soaking(() => {
//         drying();
//     })
// })
// -------------------------------------------------------------
function myCallBack(text) {
    console.log("inside mycallBack" + text);
}
;
function myCallingFunction(initialText, callBack) {
    callBack(initialText);
}
myCallingFunction("my text", myCallBack);
export {};
