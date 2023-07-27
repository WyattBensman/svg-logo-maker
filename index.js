const fs = require('fs');
const inquirer = require('inquirer');
const generateShapes = require('./generateShapes')

const questions = [
    {
        type: 'input',
        message: 'Text:',
        name: 'text',
        function(input) {
            if (input.length > 3) {
                return 'Text must be up to 3 letters.';
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Text Color:',
        name: 'textColor',
        choices: ['white', 'red', 'green', 'blue', 'orange', 'yellow']
    },
    {
        type: 'list',
        message: 'Shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'list',
        message: 'Shape Color:',
        name: 'shapeColor',
        choices: ['white', 'red', 'green', 'blue', 'orange', 'yellow']
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('logo.svg', generateShapes(answers), (err) => {
            if (err) console.log(err);
        });
    });
}

init();