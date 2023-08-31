#!/usr/bin/env node

import chalk from "chalk";
import shell from "shelljs";
import Questions from "./src/utils/Questions.js";

// Project Type
import Vanilla from "./src/projectTypes/Vanilla.js";
import React from "./src/projectTypes/React.js";

const isTailwindConfigExists = shell.test("-f", "tailwind.config.js");
if (isTailwindConfigExists) {
  console.log(chalk.bgRed.white("Already  a tailwind.config.js file exist "));
  process.exit(0);
}

const answer = await Questions();
console.log(answer);

switch (answer.ProjectType) {
  case "vanilla":
    await Vanilla(answer);
    break;
  case "react":
    await React(answer);
    break;
  default:
    console.log(chalk.bgRed.white("something went wrong"));
    process.exit(0);
}
