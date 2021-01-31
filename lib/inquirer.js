const inquirer = require('inquirer');
const qs = require('./qs/questions')
const Manager = require('./classes/Manager');
const Intern = require('./classes/Intern');
const Engineer = require('./classes/Engineer');

const employees = []

const pushToArray = (resp) => {

    return new Promise(function(resolve){
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
            promptEmployees();
        }
    })
    

}

const promptManager = () => {
    return inquirer.prompt(qs.managerQuestions)
    .then((resp)=> pushToArray(resp))
    .then(() => promptEmployees())
    .catch((err) => console.log(err));
}

const promptEmployees = () => {
    return inquirer.prompt(qs.employeeQuestions)
    .then((resp) => promptQuestions(resp))
    .catch((err) => console.log(err))
}

const promptQuestions = (resp) => {
    if (resp === undefined){
        promptQuestions(resp);
    }else{
        switch (resp.employee){
            case 'Add Engineer':
                inquirer.prompt(qs.engineerQuestions)
                .then((resp) => pushToArray(resp))
                .then(() => promptEmployees())
                .catch((err) => console.log(err))
                break
            case 'Add Intern':
                inquirer.prompt(qs.internQuestions)
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

module.exports = {
    employees,
    pushToArray,
    promptManager,
    promptEmployees,
    promptQuestions,
}



