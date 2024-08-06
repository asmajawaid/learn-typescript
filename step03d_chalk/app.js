"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let answer = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "Enter your age:",
    }
]);
console.log(chalk_1.default.blue("after", (60 - answer.age), "your age will be."));
