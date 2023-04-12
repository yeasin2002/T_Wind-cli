import * as fs from 'fs'

export const readJSON = (path) => {
  try {
    const file = fs.readFileSync(path, 'utf-8')
    return JSON.parse(file)
  } catch {
    return {}
  }
}

export const getProjectTypeWithAI = (path) => {
  const data = readJSON(path)

  if (data?.dependencies?.react) return 'react.js'
  return 'vanilla.js'
}
