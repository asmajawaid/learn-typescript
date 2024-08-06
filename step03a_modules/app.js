"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.grret = exports.pi = exports.name = void 0;
const first_js_1 = __importDefault(require("./first.js"));
// import {b,c as d}  from "./second.js"; //1st method simple export. you can morethan one 
const second_js_1 = __importDefault(require("./second.js")); // 2nd method default exportfd
// console.log(a + b + d); //output 17 (5+ 10 +2)
console.log("import", first_js_1.default + second_js_1.default); //22
let z = first_js_1.default + 20;
console.log("t = ", z);
function name() {
}
exports.name = name;
exports.pi = 123;
class grret {
    constructor(email) {
    }
}
exports.grret = grret;
exports.message = "abc";
