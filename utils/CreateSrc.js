import chalk from "chalk";
import fs from "fs";

const CreateSrc = () => {
  fs.mkdir("src", (err) => {
    if (err) throw err;
    console.log(chalk.green("src folder created!"));
  });
};

export default CreateSrc;
