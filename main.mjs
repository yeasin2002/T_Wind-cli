#!/usr/bin/env node

import chalk from "chalk";
import { intro, outro } from "@clack/prompts";
import Questions from "./utils/Questions.js";

// Project Type
import Vanilla from "./lib/projectTypes/Vanilla.js";
import React from "./lib/projectTypes/React.js";

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
