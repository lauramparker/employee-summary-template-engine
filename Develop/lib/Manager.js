// TODO: Write code to define and export the Manager class.
const Manager = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber) {
  
      super(employeeName, ID, email); //getName(), etc?
      
      this.officeNumber = officeNumber;

      getOfficeNumber(); return inquirer.prompt([
        {
          type: 'input',
          name: 'officeNumber',
          message: "Enter the employee's office number: ",
        
        //user must input number
        validate: val => /[1-9]/gi.test(val),
        }
      ]);

      getRole() //overriden to return Manager
    }


  module.exports = Manager;
}