//  npm imports
import { promisify } from "util";
import { writeFile } from "fs";

import chalk from "chalk";
import { spinner } from "@clack/prompts";

const writeFileAwait = promisify(writeFile);

//  local imports
import { tailwindConfig, TailwindDirectives } from "../utils/DataStrings.js";
import execute from "../utils/execute.js";
import path from "path";

const React = async (answer: any) => {
  console.log(answer);
  const spin = spinner();
  try {
    spin.start("Installing tailwindcss, postcss,  autoprefixer");
    //! 1. Install tailwindcss and its peer dependencies,
    await execute("npx tailwindcss init -p");

    //!  2.  generate  tailwind.config.js and postcss.config.js files.
    spin.message("initializing tailwind configuring  rations");
    await execute("npm install -D tailwindcss postcss autoprefixer");
    //! 3. Add the paths to all of your template files in your tailwind.config.js file.
    await writeFileAwait(path.join("" + "tailwind.config.js"), tailwindConfig);
    //!   4. Add the @tailwind directives for each of Tailwind’s layers to  ./src/index.css file.

    await writeFileAwait(path.join(answer.cssFilePath), TailwindDirectives);
    //!   process ended
    spin.stop("tailwind installed");
    process.exit(0);
  } catch (error: any) {
    console.log(chalk.bgRed.white(error.message));
    console.log(chalk.blue(error));
    process.exit(0);
  }
};

export default React;
