import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { generateMarkdown } from './utils/generateMarkdown.js';


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      
      const timestamp = Date.now();
      const filename = `README_${timestamp}.md`;
  
      fs.writeFile(path.join(process.cwd(), filename), readmeContent, (err) => {
        if (err) throw err;
        console.log(`${filename} has been generated!`);
      });
    });
  }
  
  init();