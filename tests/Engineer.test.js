const Engineer = require('../lib/classes/Engineer.js');

describe('Engineer', () => {
    describe('Engineer Class', () => {
        it("should create an Instance of Engineer with a set of parameter when called with the 'new' keyword", () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // verify that new instance has the correct properties
            expect(typeof engineer).toBe('object');
            expect(engineer.name).toEqual('vincent');
            expect(engineer.id).toEqual(16);
            expect(engineer.email).toEqual('vincent@gmail.com');
            expect(engineer.github).toEqual('vsumargo');
        });
    });

    describe('getName()', ()=>{
        it('should return "name" value of the object when getName() method is called', () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // Verify that the method getName() return the "name" value of the object
            expect(typeof engineer.getName()).toBe('string');
            expect(engineer.getName()).toEqual(engineer.name);
            expect(engineer.getName()).toEqual('vincent');
        });
    });
        
    describe('getId()', ()=>{
        it('should return "id" value of the object when getId() method is called', () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // Verify that the method getId() return the "id" value of the object
            expect(typeof engineer.getId()).toBe('number');
            expect(engineer.getId()).toEqual(engineer.id);
            expect(engineer.getId()).toEqual(16);
        });
    });

    describe('getEmail()', ()=>{
        it('should return "email" value of the object when getEmail() method is called', () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // Verify that the method getEmail() return the "email" value of the object
            expect(typeof engineer.getEmail()).toBe('string');
            expect(engineer.getEmail()).toEqual(engineer.email);
            expect(engineer.getEmail()).toEqual('vincent@gmail.com');
        });
    });
        
    describe('getRole()', ()=>{
        it('should return add "title" properties to the object when getRole() method is called', () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // Verify that the method getRole() add a property "title" to the object
            engineer.getRole();
            expect(Boolean(engineer.title)).toBe(true);
            expect(engineer.title).toEqual('engineer');
            expect(typeof engineer.title).toBe('string');
        });

        it('should return "title" value of the object when getRole() method is called', () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // Verify that the method getRole() return the "title" value of the object
            expect(typeof engineer.getRole()).toBe('string');
            expect(engineer.getRole()).toEqual(engineer.title);
            expect(engineer.getRole()).toEqual('engineer');
        });
    });

    describe('getGithub()', ()=>{
        it('should return "github" value of the object when getGithub() method is called', () => {
            //Arrange
            const engineer = new Engineer ('vincent',16,'vincent@gmail.com','vsumargo');
            // Verify that the method getGithub() return the "github" value of the object
            expect(typeof engineer.getGithub()).toBe('string');
            expect(engineer.getGithub()).toEqual(engineer.github);
            expect(engineer.getGithub()).toEqual('vsumargo');
        });
    });
          
});