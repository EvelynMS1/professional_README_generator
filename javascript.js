//insert method that allows to write questions np
//create the inquirer function that will ask user multiple question regarding what they would like in their readme
//first question project title type:String
//Second question project Description will have several questions within it 4  type:String 
//third question 
//fetch api license information ]

//calling export from generateMarkdwon file
const generateMarkdown = require('./generateMarkdown');
//setting up inquirer and file system
const inquirer = require('inquirer');
const fs = require('fs');

//array of objects that will be used within the inquirer prompt function startInquirerQuestions
const questions = [
    { 
    name: 'projectTitle', 
    message: 'What is the title of your project ',
    type:'input',
    },
    {
    name:'description',
    message:
    `Provide a short description explaining the what, why, and how of your project.\n Use the following questions as a guide What was your motivation?
    -Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?`,
    type:'input'
    },
    {
    name:'tOC',
    message:'Would you like to implement a table of contents',
    type:'confirm',
    },
    {
    name: 'installation',
    message:'Does your project require steps for installation, if so please provide a step by step description',
    type:'input',
    },
    {
    name: 'usage',
    message:'Please provide instructions and examples for use',
    type:'input',
    },
    {
    name:'credits',
    message:'If you used external sources add the links to Github profiles, third party primary web content, tutorials that aided the development of your project',
    type:'input',
    },
    {
        //taken from api github to provide license options
    name:'license',
    message:'Select the license for your project',
    type:'rawlist',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
    name:'features',
    message:'List features that your project has',
    type:'input',
    },
]
function createReadmefile(filename,questions){
    return fs.writeFile(filename,questions,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('success');
})
}
//startInquirerQuestions function using questions as parameter, in promise then calls createReadmefile function readme with param file name and questions (aka data) generateMarkdown literal with answers
function startInquirerQuestions(){
inquirer.prompt(questions)
.then(answers => {
    createReadmefile('README.md', generateMarkdown(answers));
    console.log(answers);

});
}

startInquirerQuestions();

//Function that will take the answers and create a literal
//create function tha{t will take the data from this prompt and then use it into a literal 
// function generateMarkdown(answers){

// return `hello
//     ${answers.tOC}

//    [${answers.projectTitle}](#${answers.projectTitle})

















   
// # ${answers.projectTitle}
// `

// }