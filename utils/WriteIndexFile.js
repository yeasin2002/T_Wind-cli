import fs from "fs";
import TailwindDirectives from "./tailwindDirectives.js";
import chalk from "chalk";

const WriteIndexFile = (
  msg = "  index.css not found! , Creating index.css "
) => {
  console.log("WriteIndexFile called");
  fs.writeFile("src/index.css", TailwindDirectives, function (err) {
    if (err) throw err;
    console.log(chalk.green(msg));
  });
};

export default WriteIndexFile;
