const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//  Ask how many members are in this team
function EmployeeChoice() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "addEmployee",
                message: "Would you like to add an Employee?"

            },
            {
                type: "list",
                name: "employeeRole",
                message: "What is the employee's role?",
                when: input => input.addEmployee === true,
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }
        ]).then(answers => {
            console.log(answers);
            switch (answers.EmployeeRole) {
                case "Manager":
                    managerQuestions();
                    break;
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestions();
                    break;
                
            }
            switch (answers.addEmployee){
                case false
                const html = render(EmployeeArr)
                 
            }
        })

}
EmployeeChoice()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const EmployeeArr = []

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name:",
                message: "Enter manager's name:",

            },
            {
                type: "input",
                name: "id",
                message: "Enter your manager's id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your manager's email:"
            },
            {
                type: "input",
                name: "Office",
                message: "Enter your manager's office number:"
            },
        ]).then(function (answers) {
            const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
            EmployeeArr.push(manager);
            EmployeeChoice()
            console.log(manager);

        });


}

function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name:",
                message: "Enter Engineer's name:",

            },
            {
                type: "input",
                name: "id",
                message: "Enter your Engineer's id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your Engineer's email:"
            },
            {
                type: "input",
                name: "Github",
                message: "Enter your Github user name:"
            },
        ]).then(function (answers) {
            const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
            EmployeeArr.push(engineer);
            EmployeeChoice()
            console.log(engineer);
        });



}
function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name:",
                message: "Enter intern's name:",

            },
            {
                type: "input",
                name: "id",
                message: "Enter your intern's id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your intern's email:"
            },
            {
                type: "input",
                name: "School",
                message: "Enter your intern's school:"
            },
        ]).then(function (answers) {
            const intern = new Intern(answers.name, parseInt(answers.id), answers.email,answers.school);
            EmployeeArr.push(intern);
            EmployeeChoice()
            console.log(intern);

        });

        
}
 
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
