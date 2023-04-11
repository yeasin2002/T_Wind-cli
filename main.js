import inquirer from "inquirer";

import ForReact from "./ProjectBaseSystem/React.js";
import ForVanilla from "./ProjectBaseSystem/Vanilla.js";

async function askQuestion() {
  try {
    const { projectType } = await inquirer.prompt([
      {
        type: "list",
        name: "projectType",
        message: "What kind of project do you want to create?",
        choices: ["Vanilla", "React.js"],
      },
    ]);
    if (projectType === "React.js") {
      ForReact();
    } else {
      ForVanilla();
    }
  } catch (error) {
    console.log(error);
  }
}

askQuestion();
