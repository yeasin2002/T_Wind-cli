import fs from 'fs'
import TailwindDirectives from './tailwindDirectives.js'
import chalk from 'chalk'

const WriteIndexFile = (msg = 'index.css not found!\n Creating index.css') => {
  fs.writeFile('src/index.css', TailwindDirectives, function (err) {
    if (err) throw err
    console.log(chalk.green(msg))
  })
}

export default WriteIndexFile
