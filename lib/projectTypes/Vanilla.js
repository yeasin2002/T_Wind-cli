import chalk from "chalk";
import shell from "shelljs";

const Vanilla = async () => {
  try {
    // installing tailwind dependance for vanilla projects
    process.exit(0);
  } catch (error) {
    console.log(chalk.bgRed.white(error.message));
    process.exit(0);
  }
};

export default Vanilla;
