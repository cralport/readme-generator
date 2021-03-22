// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a project name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub Username.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub Username");
                return false;
            }  
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a brief description of your project.',
    },
    {
        type: 'input',
        name: 'Table of Contents',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What do you need to install for this to work.'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples in this section.'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which license would you like to choose?',
        choices: ["Apache License 2.0","GNU GPLv3", "MIT", "ISC", "None"],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please list who has contributed to this project.'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'If applicable, please provied any tests written for this project.'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'For any questions regarding this project I can be reached at (Give Email/GitHub).'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    console.log(fileName, data)
    fs.writeFileSync(fileName, data);
}



    

// TODO: Create a function to initialize app
function init() {
  
    inquirer.prompt(questions).then(function(value){
        
        let questions = generateMarkdown(value)
       
        writeToFile("readme.txt", questions);
    })
        
 }

// Function call to initialize app
init();
