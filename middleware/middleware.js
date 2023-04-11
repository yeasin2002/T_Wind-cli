import fs from "fs";

async function checkSrcFolder() {
  try {
    const isSrcFolderExists = fs.existsSync("./src");
    if (!isSrcFolderExists) {
      throw new Error("You don't have a src folder in your root directory.");
    }

    const isIndexCssExists = fs.existsSync("./src/index.css");
    if (!isIndexCssExists) {
      fs.writeFileSync(
        "./src/index.css",
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"
      );
    } else {
      const data = fs.readFileSync("./src/index.css", "utf-8");
      if (!data.includes("@tailwind base;")) {
        fs.appendFileSync("./src/index.css", "@tailwind base;\n");
      }
      if (!data.includes("@tailwind components;")) {
        fs.appendFileSync("./src/index.css", "@tailwind components;\n");
      }
      if (!data.includes("@tailwind utilities;")) {
        fs.appendFileSync("./src/index.css", "@tailwind utilities;\n");
      }
    }
  } catch (err) {
    console.error(err);
  }
}

export default checkSrcFolder;
