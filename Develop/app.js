const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//file sources for employee classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//set up number of employees to enter ; set up lop function to got over each employee's info
async function startProcess () {
    console.log("Welcome! Ready to enter your team's Info?");

    inquirer.prompt([
        {
        type: 'number',
        message: 'How many employees are on this team?', //what happens if nothing is entered?
        name: 'teamNumber',
        },
    ]).then((input) => {
        let teamNumber = input.teamNumber;

        for (i = 1; i <teamNumber; i++) {

            let name;
            let id;
            let email;
            let role;


    //prompt the user to input needed information for employees //inside the startProcess function
  //  employeeInput = () =>
    await inquirer.prompt([
            {
            type: 'input',
            message: "Enter the employee (${i})'s first and last name: ",
            name: 'name',
            },
            {
            type: 'input',
            message: "Enter the employee (${i})'s ID: ",
            name: 'id',
            },
            {
            type: 'input',
            message: "Enter the employee (${i})'s email: ",
            name: 'email',
            },
            {
            type: 'input',
            message: "What type of employee is employee (${i})?",
            name: 'role',
            choices:  ['Manager', 'Engineer', 'Intern']
            },
        ]).then((input) => {
            name = input.name; 
            id = input.id;
            email = input.email
            role = input.role;
        });



        //swtich method based on user choice for role type
        //Use if/thens and function names if switch case doesn't work...
        switch (role) {
            case "Manager":
        

                //promptManager = () =>
                await inquirer.prompt([
                        {
                        type: 'number',
                        message: 'What is the Manager office number?",
                        name: 'officeNumber',
                        },
                    ]).then((input) => {
                        const officeNumber = input.officeNumber;

                        manager = new Manager(name, id, email, role, officeNumber); //creates manager object

                });
                break;


            case "Engineer":
                //promptEngineer = () =>
                await inquirer.prompt([
                        {
                        type: 'url',
                        message: 'What is the github for this emplopyee?',
                        name: 'github',
                        },
                    ]).then((input) => {
                        const github = input.github;

                        engineer = new Manager(name, id, email, role, github); //creates engineer object

                });
                break;


            case "Intern":
                //promptIntern = () =>
                await inquirer.prompt([
                    {
                    type: 'input',
                    message: 'Enter the intern school:',
                    name: 'school',
                    },
                ]).then((input) => {
                    const school = input.school;

                    intern = new Intern(name, id, email, role, school); //creates intern object

                });
                break;

        } //end switch cases


    }; //end loop

});  //end async function


//initiate and run input process
startProcess();  //asynch await?

// After the user has input all employees desired, call the `render` function and pass in an array containing all employee objects;

render (manager, engineer, intern) = () => {

    fs.readFileSync("templates/main.html")
};

//Now write it to a file named `team.html` in the use the variable `outputPath` above target this location.
    .then((response) => writeFile('output/team.html', render(response)))

    .catch((err) => console.error(err));


