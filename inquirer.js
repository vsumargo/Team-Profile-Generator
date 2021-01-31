const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const employees = []

const pushToArray = (resp) => {

    return new Promise(function(resolve,reject){
        let {name} = resp
        console.log(`creating a databse for ${name}`);
        if(resp.manager){
            name = new Manager (resp.name, resp.id, resp.email, resp.officeNumber)  
            employees.push(name);
            resolve('Manager created')
        }else if (resp.engineer){
            name = new Engineer (resp.name, resp.id, resp.email, resp.github)  
            employees.push(name);
            resolve('Engineer created')
        }else if (resp.intern){
            name = new Intern (resp.name, resp.id, resp.email, resp.github)  
            employees.push(name);
            resolve('Intern created')
        }else{
            console.log(`\nHere are the list of employees:\n${employees}`);
            reject('You have exit building the team data');
        }
    })
    

}

const promptManager = () => {
    const questions = [
        {
            type: 'confirm',
            name: 'manager',
            message: "Are you the Team Manager?",
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter Team Manager's Name:",
            when: function (answers){
                return answers['manager'] === true
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter Team Manager's ID:",
            when: function (answers){
                return answers['manager'] === true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Team Manager's Email:",
            when: function (answers){
                return answers['manager'] === true
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter Team Manager's Office Number:",
            when: function (answers){
                return answers['manager'] === true
            }
        },
    ];
    return inquirer.prompt(questions)
    .then((resp)=> pushToArray(resp))
    .then(() => promptEmployees())
    .catch((err) => console.log(err));
}

const promptEmployees = () => {
    const questions = [
        {
            type: 'rawlist',
            name: 'employee',
            message: "Please Choose from the following Options:",
            choices: ['Add Engineer', 'Add Intern', 'Exit Building my Team']
        },

    ];
    return inquirer.prompt(questions)
    .then((resp) => promptQuestions(resp))
    .catch((err) => console.log(err))
}

const engineerQuestions = [
    {
        type: 'confirm',
        name: 'engineer',
        message: "Do you want to enter details for Engineer?",
        default: false
    },
    {
        type: 'input',
        name: 'name',
        message: "Please enter Engineer's Name:",
        when: function (answers){
            return answers['engineer'] === true
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter Engineer's ID:",
        when: function (answers){
            return answers['engineer'] === true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter Engineer's Email:",
        when: function (answers){
            return answers['engineer'] === true
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter Engineer's Github URL:",
        when: function (answers){
            return answers['engineer'] === true
        }
    },
];
const internQuestions = [
    {
        type: 'confirm',
        name: 'intern',
        message: "Do you want to enter details for Intern?",
        default: false
    },
    {
        type: 'input',
        name: 'name',
        message: "Please enter Intern's Name:",
        when: function (answers){
            return answers['intern'] === true
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter Intern's ID:",
        when: function (answers){
            return answers['intern'] === true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter Intern's Email:",
        when: function (answers){
            return answers['intern'] === true
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter Intern's School Name:",
        when: function (answers){
            return answers['intern'] === true
        }
    },
];

const promptQuestions = (resp) => {
    if (resp === undefined){
        promptQuestions(resp);
    }else{
        switch (resp.employee){
            case 'Add Engineer':
                inquirer.prompt(engineerQuestions)
                .then((resp) => pushToArray(resp))
                .then(() => promptEmployees())
                .catch((err) => console.log(err))
                break
            case 'Add Intern':
                inquirer.prompt(internQuestions)
                .then((resp) => pushToArray(resp))
                .then(() => promptEmployees())
                .catch((err) => console.log(err))
                break
            case 'Exit Building my Team':
                console.log(employees);
                console.log('Exiting');
                break
            default:
                console.log(employees);
                console.log('Exiting');
                break
                
        }
    } 
}

promptManager()



