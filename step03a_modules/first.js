"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let a = 5;
// export default a; // use single export
let x = 5;
let y = a + x;
exports.default = y; // defult export only one thing
const second_js_1 = __importDefault(require("./second.js"));
const person = {
    id: "knk",
    name: 1233,
};
console.log(person);
let oop = y + second_js_1.default;
// oop + z // error only we use imort items 
