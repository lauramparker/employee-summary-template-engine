// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
  
      super(name, id, email);
      
      this.github = github;
    }

    getGithub() {
      return this.github;
    };

    getRole() {
        return "Engineer"; //overriden to return Engineer
    };

  module.exports = Engineer;