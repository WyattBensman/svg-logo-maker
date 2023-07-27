const fs = require('fs');
const inquirer = require('inquirer');
const generateShapes = require('./logoGenerator')
const htmlGenerator = require('./htmlGenerator');

const questions = [
    {
        type: 'input',
        message: 'Text:',
        name: 'text',
        validate: function (input) {
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
        const svg = generateShapes(answers);
        const html = htmlGenerator(svg);

        fs.writeFile('logo.svg', generateShapes(answers), (err) => {
            if (err) console.log(err);
        });
        fs.writeFile('output.html', html, (err) => {
            if (err) console.log(err);
            else console.log('output.html file created successfully!');
        });
    });
}

init();