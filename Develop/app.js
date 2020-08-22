//  Node packages
const inquirer = require("inquirer");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// create user prompt
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
          
            switch (answers.addEmployee) {
                case false:
                    const html = render(EmployeeArr);
                    console.log(html)

                    fs.writeFileSync(outputPath, html, function(err){
                        if (err) {
                            console.log(err);
                        }
                        console.log("Succesfully created template");
                        
                    });
                    break;

                    case true:
                        switch (answers.employeeRole) {
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
                        break;
                       
            }

        });
}
EmployeeChoice()
// create team employee array
const EmployeeArr = []

function managerQuestions() {
    console.log(managerQuestions)
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter manager name:",

            },
            {
                type: "input",
                name: "id",
                message: "Enter your manager id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your manager email:",
                validate: async (input) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "Office",
                message: "Enter your manager office number:",

            },
        ]).then(function (answers) {
            const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.Office));
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
                name: "name",
                message: "Enter Engineer name:",

            },
            {
                type: "input",
                name: "id",
                message: "Enter your Engineer id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your Engineer email:",
                validate: async (input) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "Github",
                message: "Enter your Github user name:"
            },
        ]).then(function (answers) {
            const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.Github);
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
                name: "name",
                message: "Enter intern name:",

            },
            {
                type: "input",
                name: "id",
                message: "Enter your intern id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your intern email:",
                validate: async (input) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "School",
                message: "Enter your intern school:"
            },
        ]).then(function (answers) {
            const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.School);
            EmployeeArr.push(intern);
            EmployeeChoice()
            console.log(intern);

        });


}





