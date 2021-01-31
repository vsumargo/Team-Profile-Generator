const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super('Manager',name,id,email);
        this.officeNumber = officeNumber;
    }


}

module.exports = Manager;