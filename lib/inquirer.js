const inquirer = require('inquirer');
const qs = require('./qs/questions')
const Manager = require('./classes/Manager');
const Intern = require('./classes/Intern');
const Engineer = require('./classes/Engineer');
const html = require('./fs/readfile.js')

const employees = [];
let joinCards = "";

const pushToArray = (resp) => {
    return new Promise(function(resolve){
        let {name} = resp
        console.log(`creating a database for ${name}`);
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
    .then(() => promptEmployees());
}

const promptEmployees = () => {
    return inquirer.prompt(qs.employeeQuestions)
    .then((resp) => promptQuestions(resp));
}

const promptQuestions = (resp) => {
    switch (resp.employee){
        case 'Add Engineer':
            inquirer.prompt(qs.engineerQuestions)
            .then((resp) => pushToArray(resp))
            .then(() => promptEmployees());
            break
        case 'Add Intern':
            inquirer.prompt(qs.internQuestions)
            .then((resp) => pushToArray(resp))
            .then(() => promptEmployees());
            break
        case 'Exit Building my Team':
            createCards(employees)
            .then(() => html.readFile(joinCards))
            .then((resp) => html.createHTML(resp))
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err))
            break
        default:
            promptQuestions(resp);
            break
    }
}

function injectCode(source, placeholder, replaceValue){
    return source = source.replace(placeholder,replaceValue);     
}

const createCards = (employees) => {
    return new Promise(function(resolve){
        for(const el of employees){
            let cardHTML = 
                `<div class="col-3">
                    <div class="card">
                        <div class="card-header">
                            <h3>{{name}}</h3>
                            <div>{{title}}</div>
                        </div>
                        <div class="card-body">
                          <div>ID: {{id}}</div>
                          <div>Email: {{email}}</div>
                          <div>{{varies}}</div>
                        </div>
                    </div>
                </div>\n`;
            cardHTML = injectCode(cardHTML,`{{name}}`, el.getName());
            cardHTML = injectCode(cardHTML,`{{title}}`, el.getRole());
            cardHTML = injectCode(cardHTML,`{{id}}`, el.getId());
            cardHTML = injectCode(cardHTML,`{{email}}`, `<a href="mailto:${el.getEmail()}">${el.getEmail()}</a>`);
            switch (el.title){
                case 'manager':
                    cardHTML = injectCode(cardHTML,`{{varies}}`, `Office Number: ${el.getOfficeNumber()}`);
                    break
                case 'engineer':
                    cardHTML = injectCode(cardHTML,`{{varies}}`, `GitHub: <a href="${el.getGithub()}" target="_blank">${el.getGithub()}</a>`);
                    break
                case 'intern':
                    cardHTML = injectCode(cardHTML,`{{varies}}`, `School: ${el.getSchool()}`);
                    break
                default:
                    cardHTML = injectCode(cardHTML,`{{varies}}`, "");
                    break
            };
            // console.log(`This is cardHTML:\n${cardHTML}\nEnd of cardHTML\n`);
            joinCards += cardHTML;
        };
        resolve(console.log('cards created successfully'));
    })
}

module.exports = {promptManager}




