const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

//file sources for employee classes
const Employee = require("./lib/Employee").default;
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let inputArray = [];


//set up number of employees to enter ; set up lop function to got over each employee's info
async function employeeInput () {
    console.log("Get ready to enter employee data.");
            let name;
            let id;
            let email;
            let role; 
               

    //prompt the user to input needed information for employees //inside the startProcess function

  await inquirer.prompt([
    
            {
            type: 'input',
            message: `Enter employee's first and last name: `,
            name: 'name',
            },
            {
            type: 'input',
            message: `Enter employee's ID: `,
            name: 'id',
            },
            {
            type: 'input',
            message: `Enter employee's email: `,
            name: 'email',
            },
            {
            type: 'list',
            message: `What type of employee is this person?`,
            name: 'role',
            choices:  ['Manager', 'Engineer', 'Intern']
            }
        ]).then((input) => {
            name = input.name; 
            id = input.id;
            email = input.email;
            role = input.role;
        });


        //switch method based on user choice for role type
        //Use if/thens and function names if switch case doesn't work...
        switch (role) {
            case "Manager":
        
                 inquirer.prompt([
                        {
                        type: 'number',
                        message: 'What is the Manager office number?',
                        name: 'officeNumber',
                        },
                        {
                        type: 'list',
                        message: 'Do you want to add an employee?',
                        name: 'addEmployee',
                        choices: ['Yes', 'No'],
                        }
                    ])
                    .then((input) => {
                        const officeNumber = input.officeNumber;

                        manager = new Manager(name, id, email, role, officeNumber); //creates manager object
                        inputArray.push(manager); //pushes single employee data into final employee array

                        let addEmployee = input.addEmployee;
                    
                        if(addEmployee === 'Yes') {
                           employeeInput();
                        };
                    });
                    break;


            case "Engineer":
                 inquirer.prompt([
                        {
                        type: 'url',
                        message: 'What is the github for this emplopyee?',
                        name: 'github',
                        },
                        {
                        type: 'list',
                        message: 'Do you want to add an employee?',
                        name: 'addEmployee',
                        choices: ['Yes', 'No'],
                        }
                    ])
                    .then((input) => {
                        let github = input.github;

                        engineer = new Manager(name, id, email, role, github); //creates engineer object
                        inputArray.push(engineer); //pushes single employee data into final employee array

                        let addEmployee = input.addEmployee;
                    
                            if(addEmployee === 'Yes') {
                               employeeInput();
                            };
                    });
                    break;


            case "Intern":
                    inquirer.prompt([
                        {
                        type: 'input',
                        message: 'Enter the intern school:',
                        name: 'school',
                        },
                        {
                        type: 'list',
                        message: 'Do you want to add an employee?',
                        name: 'addEmployee',
                        choices: ['Yes', 'No'],
                        }
                    ])
                    .then((input) => {
                        let school = input.school;

                        intern = new Intern(name, id, email, role, school); //creates intern object
                        inputArray.push(intern); //pushes single employee data into final employee array

                        let addEmployee = input.addEmployee;

                            if(addEmployee === 'Yes') {
                               employeeInput();
                            };
                    });
                    break;

        } //end switch cases


}; //end employeeInput


// After the user has input all employees desired, call the `render` function and pass in an array containing all employee objects;

createHTML = () => {

    const display = render(inputArray);

//Now write it to a file named `team.html` in the use the variable `outputPath` above target this location.
    writeFileAsync(outputPath, display)
        .catch((err) => console.error(err));
    };


//ACTIONS   
//initiate and run input process
employeeInput();

