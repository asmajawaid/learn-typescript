"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_js_1 = __importDefault(require("./first.js")); //a=5
const second_js_1 = require("./second.js"); //b=10, c=2
console.log(first_js_1.default + second_js_1.b + second_js_1.c); //17
