"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let answer = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "Enter your age:",
    }
]);
console.log("inshaAllah, in", (60 - answer.age), "years you will be 60 years old.");
