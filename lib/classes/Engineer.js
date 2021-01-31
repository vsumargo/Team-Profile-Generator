const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getRole(){
        this.title = `engineer`
        return this.title;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;