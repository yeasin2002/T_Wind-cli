import chalk from "chalk";
import shell from "shelljs";

const Vanilla = async (answer: any) => {
  try {
    // installing tailwind dependance for vanilla projects
    process.exit(0);
  } catch (error: any) {
    console.log(chalk.bgRed.white(error.message));
    process.exit(0);
  }
};

export default Vanilla;
