const Employee = require('../lib/classes/Employee.js')

describe('Employee', () => {
    describe('Employee Class', () => {
        it("should create an Instance of Employee with a set of parameter when called with the 'new' keyword", () => {
            //Arrange
            const employee = new Employee ('vincent',16,'vincent@gmail.com');
            // verify that new instance has the correct properties
            expect(typeof employee).toBe('object');
            expect(employee.name).toEqual('vincent');
            expect(employee.id).toEqual(16);
            expect(employee.email).toEqual('vincent@gmail.com');
        });
    });

    describe('getName()', ()=>{
        it('should return "name" value of the object when getName() method is called', () => {
            //Arrange
            const employee = new Employee ('vincent',16,'vincent@gmail.com');
            // Verify that the method getName() return the "name" value of the object
            expect(typeof employee.getName()).toBe('string');
            expect(employee.getName()).toEqual(employee.name);
            expect(employee.getName()).toEqual('vincent');
        });
    });
        
    describe('getId()', ()=>{
        it('should return "id" value of the object when getId() method is called', () => {
            //Arrange
            const employee = new Employee ('vincent',16,'vincent@gmail.com');
            // Verify that the method getId() return the "id" value of the object
            expect(typeof employee.getId()).toBe('number');
            expect(employee.getId()).toEqual(employee.id);
            expect(employee.getId()).toEqual(16);
        });
    });

    describe('getEmail()', ()=>{
        it('should return "email" value of the object when getEmail() method is called', () => {
            //Arrange
            const employee = new Employee ('vincent',16,'vincent@gmail.com');
            // Verify that the method getEmail() return the "email" value of the object
            expect(typeof employee.getEmail()).toBe('string');
            expect(employee.getEmail()).toEqual(employee.email);
            expect(employee.getEmail()).toEqual('vincent@gmail.com');
        });
    });
        
    describe('getRole()', ()=>{
        it('should return add "title" properties to the object when getRole() method is called', () => {
            //Arrange
            const employee = new Employee ('vincent',16,'vincent@gmail.com');
            // Verify that the method getRole() add a property "title" to the object
            employee.getRole();
            expect(Boolean(employee.title)).toBe(true);
            expect(employee.title).toEqual('employee');
            expect(typeof employee.title).toBe('string');
        });

        it('should return "title" value of the object when getRole() method is called', () => {
            //Arrange
            const employee = new Employee ('vincent',16,'vincent@gmail.com');
            // Verify that the method getRole() return the "title" value of the object
            expect(typeof employee.getRole()).toBe('string');
            expect(employee.getRole()).toEqual(employee.title);
            expect(employee.getRole()).toEqual('employee');
        });
    });
          
});