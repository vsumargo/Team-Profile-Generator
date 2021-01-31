const managerQuestions = [
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

const employeeQuestions = [
    {
        type: 'rawlist',
        name: 'employee',
        message: "Please Choose from the following Options:",
        choices: ['Add Engineer', 'Add Intern', 'Exit Building my Team']
    },

];

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

module.exports = {
    managerQuestions,
    employeeQuestions,
    engineerQuestions,
    internQuestions,
};