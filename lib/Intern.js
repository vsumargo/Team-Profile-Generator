const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name,id,email,school){
        super('Intern',name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

}

module.exports = Intern;