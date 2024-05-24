
import inquirer from "inquirer";
import chalk from "chalk";
import { after } from "node:test";

let answer = await inquirer.prompt([{
    name : "age",
    type: "number",
    message: "Enter your age:",

}
]);
console.log(chalk.blue("after", (60-answer.age), "your age will be."));
