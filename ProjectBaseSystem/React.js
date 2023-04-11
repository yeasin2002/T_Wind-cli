import fs from "fs/promises";
import Chalk from "chalk";
import { exec } from "child_process";

import checkSrcFolder from "../middleware/checkSrcFolder.js";
import tailwindConfig from "../utils/tailwindConfig.js";

const ForReact = async () => {
  console.log(Chalk.blue("Installing tailwindcss..."));

  await exec("npm install -D tailwindcss postcss autoprefixer");
  await exec("npx tailwindcss init -p");

  await fs.writeFile("./tailwind.config.js", tailwindConfig);

  checkSrcFolder();
};

export default ForReact;
