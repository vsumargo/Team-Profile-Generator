const Manager = require('../lib/classes/Manager.js');

describe('Manager', () => {
    describe('Manager Class', () => {
        it("should create an Instance of Manager with a set of parameter when called with the 'new' keyword", () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // verify that new instance has the correct properties
            expect(typeof manager).toBe('object');
            expect(manager.name).toEqual('vincent');
            expect(manager.id).toEqual(16);
            expect(manager.email).toEqual('vincent@gmail.com');
            expect(manager.officeNumber).toEqual(888);
        });
    });

    describe('getName()', ()=>{
        it('should return "name" value of the object when getName() method is called', () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // Verify that the method getName() return the "name" value of the object
            expect(typeof manager.getName()).toBe('string');
            expect(manager.getName()).toEqual(manager.name);
            expect(manager.getName()).toEqual('vincent');
        });
    });
        
    describe('getId()', ()=>{
        it('should return "id" value of the object when getId() method is called', () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // Verify that the method getId() return the "id" value of the object
            expect(typeof manager.getId()).toBe('number');
            expect(manager.getId()).toEqual(manager.id);
            expect(manager.getId()).toEqual(16);
        });
    });

    describe('getEmail()', ()=>{
        it('should return "email" value of the object when getEmail() method is called', () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // Verify that the method getEmail() return the "email" value of the object
            expect(typeof manager.getEmail()).toBe('string');
            expect(manager.getEmail()).toEqual(manager.email);
            expect(manager.getEmail()).toEqual('vincent@gmail.com');
        });
    });
        
    describe('getRole()', ()=>{
        it('should return add "title" properties to the object when getRole() method is called', () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // Verify that the method getRole() add a property "title" to the object
            manager.getRole();
            expect(Boolean(manager.title)).toBe(true);
            expect(manager.title).toEqual('manager');
            expect(typeof manager.title).toBe('string');
        });

        it('should return "title" value of the object when getRole() method is called', () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // Verify that the method getRole() return the "title" value of the object
            expect(typeof manager.getRole()).toBe('string');
            expect(manager.getRole()).toEqual(manager.title);
            expect(manager.getRole()).toEqual('manager');
        });
    });

    describe('getOfficeNumber()', ()=>{
        it('should return "office number" value of the object when getOfficeNumber() method is called', () => {
            //Arrange
            const manager = new Manager ('vincent',16,'vincent@gmail.com',888);
            // Verify that the method getOfficeNumber() return the "office number" value of the object
            expect(typeof manager.getOfficeNumber()).toBe('number');
            expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
            expect(manager.getOfficeNumber()).toEqual(888);
        });
    });
          
});