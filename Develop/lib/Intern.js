// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee.js");

class Intern extends Employee {
    constructor(school) {
  
      super(employeeName, ID, email);
      
      this.school = school;

      getSchool()

      getRole() //overriden to return Intern
    }
  }

  module.exports = Intern;