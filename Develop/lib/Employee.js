// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");

class Employee {
  constructor(employeeName, ID, email) {
  
    this.employeeName = employeeName;
    this.ID = ID;
    this.email = email;

    getName() {
      return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the employee's first and last name: ",
      
      //user must input letters
      validate: val => /[a-z]/gi.test(val),
      }
    ]);
    

    getID() {
      return inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: "Enter the employee's ID: ",
      
      //user must input numbers
      validate: val => /[1-999999]/gi.test(val),
      }
    ])

    getEmail() {
      return inquirer.prompt([
      {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email: ",
      
      //user must input email configuration ???????
      validate: val => /[ ]/gi.test(val),
      }
    ])

    getRole() {
      return inquirer.prompt([
      {
        type: 'input',
        name: 'role',
        message: "Enter the employee's role (Enter M for Manager, E for Engineer, I for Intern)", //should become a dropdow list
        },
      
      //user must input letters
      validate: val => /[M, E, I]/gi.test(val),
      }
    ]) //returns "employee"
  }
}

module.exports = Employee;
  