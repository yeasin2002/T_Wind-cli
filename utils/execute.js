import { promisify } from "util";
import { exec } from "child_process";
const execution = promisify(exec);

const execute = async (command) => {
  try {
    const { stdout } = await execution(command);
    return {
      isSuccess: true,
      stdout: stdout,
    };
  } catch (error) {
    return {
      isSuccess: false,
      stderr: error.message,
    };
  }
};

export default execute;
