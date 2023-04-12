import fs from 'fs/promises'
import Chalk from 'chalk'
import shell from 'shelljs'

import checkSrcFolder from '../middleware/checkSrcFolder.js'
import tailwindConfig from '../utils/tailwindConfig.js'
import getPackageManager from '../utils/getPackageManager.js'

const ForReact = async () => {
  console.log(Chalk.blue('Installing tailwindcss...'))
  const pm = getPackageManager()
  const installCMD = pm === 'npm' ? 'install' : 'add'

  shell.exec(`${pm} ${installCMD} -D tailwindcss postcss autoprefixer`)
  shell.exec('npx tailwindcss init -p')

  await fs.writeFile('./tailwind.config.js', tailwindConfig)

  checkSrcFolder()
}

export default ForReact
