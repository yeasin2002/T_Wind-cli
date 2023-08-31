import { promisify } from "util";
import { writeFile } from "fs";
import path from "path";
import { dirname } from "path";

const writeFileAwait = promisify(writeFile);
