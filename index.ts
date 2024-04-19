#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let todoList = [];
let conditions = true;

console.log(chalk.magenta("\n \t WELLCOME TO  HAMZA NASIR - TO DO LIST APLICATION\n"));

while (conditions) {
  let addTask = await inquirer.prompt([
    {
      name: "Task",
      type: "input",
      message: chalk.blue(" Enter your new task"),
    },
  ]);
  todoList.push(addTask.Task);
  console.log(`${addTask.Task} Task added in to do Lisk Successfully`);

  let addMoreTask = await inquirer.prompt([
    {
      name: "addMore",
      type: "confirm",
      message: chalk.blue(" Do you want to add more task ? "),
      default: "false",
    },
  ]);
  conditions = addMoreTask.addMore;
}
console.log(chalk.red("your updated todo-lisk:" ), todoList  );
