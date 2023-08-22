#!/usr/bin/env zx
import { spinner } from "@clack/prompts";
import "zx/globals";
import Questions from "./utils/Questions.js";

// Project Type
import Vanilla from "./lib/projectTypes/Vanilla.js";
import React from "./lib/projectTypes/React.js";

const answer = await Questions();

switch (answer.ProjectType) {
  case "vanilla":
    Vanilla(answer);
    break;
  case "react":
    React(answer);
    break;
  default:
    console.log(chalk.bgRed.white("something went wrong"));
    process.exit(0);
    break;
}
