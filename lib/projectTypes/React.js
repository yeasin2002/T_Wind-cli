import shell from "shelljs";
import chalk from "chalk";
import { spinner } from "@clack/prompts";

const React = async (answer) => {
  console.log(answer);
  const spin = spinner();
  try {
    spin.start("Installing tailwindcss, postcss,  autoprefixer");

    // spin.message("initializing tailwind configurations");
    // await shell.exec("npx tailwindcss init -p");

    spin.stop("tailwind installed");
  } catch (error) {
    console.log(chalk.bgRed.white(error.message));

    console.log(chalk.blue(error));
    process.exit(0);
  }
  process.exit(0);
};

export default React;
