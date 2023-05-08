import { getProjectTypeWithAI } from '../utils/getProjectType';

const { projectType } = await inquirer.prompt([
  {
    type: 'list',
    name: 'projectType',
    message: 'What kind of project do you want to create?',
    choices: ['vanilla.js', 'react.js'],
    default: getProjectTypeWithAI('./package.json'),
  },
]);

export default projectType;
