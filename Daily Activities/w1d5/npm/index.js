var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(chalk.blue("Hello ") + chalk.red("World"))