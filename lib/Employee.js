class Employee {
    constructor(name,id,email){
        this.title = 'employee';
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName(){
        return this.name;
    }
    
    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.title;
    }

}

module.exports = Employee;