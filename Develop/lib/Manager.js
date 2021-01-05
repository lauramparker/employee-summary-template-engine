// TODO: Write code to define and export the Manager class.
const Manager = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
  
      super(name, id, email); //getName(), etc?
      
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
      };

    getRole() { //overriden to return Manager
        return "Manager";
    };


  module.exports = Manager;
}