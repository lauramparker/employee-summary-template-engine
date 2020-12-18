// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee.js");

class Engineer extends Employee {
    constructor(github) {
  
      super(employeeName, ID, email);
      
      this.github = github;
    }
  }

  module.exports = Engineer;