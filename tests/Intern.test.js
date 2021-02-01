const Intern = require('../lib/classes/Intern.js');

describe('Intern', () => {
    describe('Intern Class', () => {
        it("should create an Instance of Intern with a set of parameter when called with the 'new' keyword", () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // verify that new instance has the correct properties
            expect(typeof intern).toBe('object');
            expect(intern.name).toEqual('vincent');
            expect(intern.id).toEqual(16);
            expect(intern.email).toEqual('vincent@gmail.com');
            expect(intern.school).toEqual('wesley');
        });
    });

    describe('getName()', ()=>{
        it('should return "name" value of the object when getName() method is called', () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // Verify that the method getName() return the "name" value of the object
            expect(typeof intern.getName()).toBe('string');
            expect(intern.getName()).toEqual(intern.name);
            expect(intern.getName()).toEqual('vincent');
        });
    });
        
    describe('getId()', ()=>{
        it('should return "id" value of the object when getId() method is called', () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // Verify that the method getId() return the "id" value of the object
            expect(typeof intern.getId()).toBe('number');
            expect(intern.getId()).toEqual(intern.id);
            expect(intern.getId()).toEqual(16);
        });
    });

    describe('getEmail()', ()=>{
        it('should return "email" value of the object when getEmail() method is called', () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // Verify that the method getEmail() return the "email" value of the object
            expect(typeof intern.getEmail()).toBe('string');
            expect(intern.getEmail()).toEqual(intern.email);
            expect(intern.getEmail()).toEqual('vincent@gmail.com');
        });
    });
        
    describe('getRole()', ()=>{
        it('should return add "title" properties to the object when getRole() method is called', () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // Verify that the method getRole() add a property "title" to the object
            intern.getRole();
            expect(Boolean(intern.title)).toBe(true);
            expect(intern.title).toEqual('intern');
            expect(typeof intern.title).toBe('string');
        });

        it('should return "title" value of the object when getRole() method is called', () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // Verify that the method getRole() return the "title" value of the object
            expect(typeof intern.getRole()).toBe('string');
            expect(intern.getRole()).toEqual(intern.title);
            expect(intern.getRole()).toEqual('intern');
        });
    });

    describe('getSchool()', ()=>{
        it('should return "school" value of the object when getSchool() method is called', () => {
            //Arrange
            const intern = new Intern ('vincent',16,'vincent@gmail.com','wesley');
            // Verify that the method getSchool() return the "school" value of the object
            expect(typeof intern.getSchool()).toBe('string');
            expect(intern.getSchool()).toEqual(intern.school);
            expect(intern.getSchool()).toEqual('wesley');
        });
    });
          
});