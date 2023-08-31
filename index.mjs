#!/usr/bin/env node

import chalk from "chalk";
import shell from "shelljs";
import Questions from "./utils/Questions.js";

// Project Type
import Vanilla from "./lib/projectTypes/Vanilla.js";
import React from "./lib/projectTypes/React.js";

const data = shell.test("-f", "tailwind.config.js");
if (data) {
  console.log(chalk.bgRed.white("Already  a tailwind.config.js file exist "));
  process.exit(0);
}

const answer = await Questions();

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
