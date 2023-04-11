import fs from "fs/promises";
import { exec } from "child_process";
import inquirer from "inquirer";

import checkSrcFolder from "./middleware/middleware.js";

async function askQuestion() {
  const { projectType } = await inquirer.prompt([
    {
      type: "list",
      name: "projectType",
      message: "What kind of project do you want to create?",
      choices: ["Vanilla", "React.js"],
    },
  ]);

  console.log(`You chose ${projectType} project.`);

  if (projectType === "React.js") {
    console.log("Installing tailwindcss...");
    await exec("npm install -D tailwindcss");
    console.log("Initializing tailwindcss config...");
    await exec("npx tailwindcss init");
    console.log("Creating tailwind.config.js...");
    await fs.writeFile(
      "./tailwind.config.js",
      `/** @type {import('tailwindcss').Config} */
       export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
         theme: {
           extend: {},
         },
         plugins: [],
       }`
    );
    console.log("tailwind.config.js created!");
    checkSrcFolder();
  }

  console.log("All done!");
}

askQuestion();
