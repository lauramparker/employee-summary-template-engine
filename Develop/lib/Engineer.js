// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee.js");

class Engineer extends Employee {
    constructor(github) {
  
      super(employeeName, ID, email);
      
      this.github = github;

    getGithub() 
      return inquirer.prompt([
        {
          type: 'input',
          name: 'github',
          message: "Enter the employee's github: ",
        
        //user must input github
        validate: val => /[a-z]/gi.test(val),
        }
      ]);

      getRole() //overriden to return Engineer
    }
  }

  module.exports = Engineer;