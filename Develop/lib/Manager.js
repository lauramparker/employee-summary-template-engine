// TODO: Write code to define and export the Manager class.
const Manager = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber) {
  
      super(employeeName, ID, email); //getName(), etc?
      
      this.officeNumber = officeNumber;

      getRole() //overriden to return Manager
    }


  module.exports = Manager;
}