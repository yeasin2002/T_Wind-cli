import fs from 'fs'
import path from 'path'

const getPkgManagerCore = (npm, yarn, pnpm) => {
  const npmRef = fs.existsSync(npm)
  const yarnRef = fs.existsSync(yarn)
  const pnpmRef = fs.existsSync(pnpm)

  if (+npmRef + +pnpmRef + +yarnRef > 1) {
    return false
  }

  return npmRef ? 'npm' : yarnRef ? 'yarn' : pnpmRef ? 'pnpm' : false
}

export default () => {
  const nodeModules = path.resolve('./node_modules')

  return (
    getPkgManagerCore(
      path.join(nodeModules, './.package-lock.json'),
      path.join(nodeModules, './.yarn-integrity'),
      path.join(nodeModules, './.modules.yaml')
    ) ||
    getPkgManagerCore(
      path.resolve('./package-lock.json'),
      path.resolve('./yarn.lock'),
      path.resolve('./pnpm-lock.yaml')
    ) ||
    'npm'
  )
}
