#!/usr/bin/env zx

import "zx/globals";
import { spinner } from "@clack/prompts";
import Questions from "./utils/Questions.js";

// $.verbose = false;

const answer = await Questions();

console.log(answer);
