// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee.js");

class Intern extends Employee {
    constructor(school) {
  
      super(employeeName, ID, email);
      
      this.school = school;

      getSchool() 
      return inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: "Enter the employee's school: ",
        
        //user must input string letters
        validate: val => /[a-z]/gi.test(val),
        }
      ]);

      getRole() //overriden to return Intern
    }
  }

  module.exports = Intern;