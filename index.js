// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
// const generateMarkdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
inquirer.prompt( [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    },
    {
        type: 'input', 
        name: 'description',
        message: 'describe your project',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}}
    },
    {
        type: 'input', 
        name: 'Table_of_contents',
        message: 'Please break down the table of contents related to your project',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}}
    },
    {
        type: 'input', 
        name: 'Installtion',
        message: 'how do you install the application',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    },
    {
        type: 'input', 
        name: 'Usage',
        message: 'How do you use the application?',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    },
    {
        type: 'list', 
        name: 'licenses',
        message: 'what license did you use for your project?',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    },
    {
        type: 'input', 
        name: 'Contributors',
        message: 'Who can contribute to your application?',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    },
    {
        type: 'input', 
        name: 'Test',
        message: 'How do you test the application?',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    },
    {
        type: 'input', 
        name: 'FAQ',
        message: 'What are some FAQs you would like to include as a resource for your application',
        validate: (value) => { if (value){return true} else {return 'Please input a value to continue'}} 
    }
]

).then(({
    title,
    description,
    Table_of_contents,
    Installtion,
    Usage,
    licenses,
    Contributors,
    Test,
    FAQ
})=>{
const template = `# ${title}
# description
${description}
## Table_of_contents
${Table_of_contents}
## Installtion
${Installtion}
## Usage
${Usage}
## licenses
${licenses}
## Contributors
${Contributors}
## Test
${Test}
## FAQ
${FAQ}`;
createReadme(title, template); 
}
);


// TODO: Create a function to write README file
function createReadme(fileName,data){
    fs.writeFile('./' + fileName.toLowerCase() + '.md', data,(err) => {
        if(err){
            console.log(err)
        }
        console.log('Your Readme has been created!')
    })
}