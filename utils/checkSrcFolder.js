import fs from 'fs';

import chalk from 'chalk';
import inquirer from 'inquirer';

import CreateSrc from './CreateSrc.js';
import WriteIndexFile from './WriteIndexFile.js';

async function checkSrcFolder() {
  try {
    const isSrcFolderExists = fs.existsSync('./src');

    if (isSrcFolderExists) {
      const isIndexCssExists = fs.existsSync('./src/index.css');
      if (isIndexCssExists) {
        inquirer
          .prompt([
            {
              type: 'confirm',
              name: 'confirmValue',
              message:
                'Index.css Found, Overwriting Index.css with tailwind utilities,base , components, Do you want to  continue ?',
            },
          ])
          .then((answers) => {
            const confirmValue = answers.confirmValue;
            if (confirmValue) {
              WriteIndexFile('Overwriting index.css with tailwind directives');
            } else {
              console.log(chalk.red('Aborted!'));
            }
          });
      } else {
        WriteIndexFile;
      }
    } else {
      CreateSrc();
      WriteIndexFile();
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}

export default checkSrcFolder;
