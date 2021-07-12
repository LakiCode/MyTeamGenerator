const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./dist/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { builtinModules } = require("module");


// test if user input number
const requireNumber = (value) => {
  if (/^\d+$/.test(value)) {
    return true;
  } else {
    console.log("Employer ID can have only number!");
    return false;
  }
};
const requireOfficeNum = (value) => {
  if (/^\d+$/.test(value)) {
    return true;
  } else {
    console.log("can have only numbers!");
    return false;
  }
};
// create data array
const teamData = [];

const promptManager = () => {
  // Enter data for Manager

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter your Employee id:",
      validate: requireNumber,
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter your office number:",
      validate: requireOfficeNum,
    },
  ])
  .then ((inputData) => {
    const manager = new Manager (
      inputData.name,
      inputData.id,
      inputData.email,
      inputData.officeNumber
    );
      teamData.push(manager);
      console.log(teamData)
  });
};
const promptMenu = () => {
  console.log(` 
        ====================
          Add Members to your team
        ====================
        `);
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Add new team member or finish",
        name: "teamMembers",
        choices: ["engineer", "intern", "done"],
        default: "done"
        }
    ])
    .then((menuAnswer) => {
      console.log(menuAnswer);
      if (menuAnswer.teamMembers === "engineer") {
        inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "What is engineer name? (Required)",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("You need to enter a engineer name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "Enter your Employee id:",
              validate: requireNumber,
            },
            {
              type: "input",
              name: "email",
              message: "What is the name of your email (Required)",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("You need to enter a engineer email address!");
                  return false;
                }
              },
            },
            {
              type: 'input',
              name: 'github',
              message: 'Enter your GitHub Username (Required)',
              validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
              }
            },
          ])
          .then((inputData) => {
            console.log(inputData);
            newEngineer = new Engineer (
              inputData.name, 
              inputData.id,
              inputData.email, 
              inputData.github);
              teamData.push(newEngineer);
            return promptMenu();
          });
        } else if  (menuAnswer.teamMembers === "intern") {
          inquirer.prompt([
              {
                type: "input",
                name: "name",
                message: "What is Intern name? (Required)",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("You need to enter a Intern name!");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "id",
                message: "Enter your Employee id:",
                validate: requireNumber,
              },
              {
                type: "input",
                name: "email",
                message: "What is the name of your email (Required)",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("You need to enter a email address!");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "school",
                message: "What is the name of your school (Required)",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("You need to enter a intern school name!");
                    return false;
                  }
                },
              },
            ])
            .then((inputData) => {
              console.log(inputData);
              newIntern = new Intern (
                inputData.name, 
                inputData.id,
                inputData.email, 
                inputData.school);
                teamData.push(newIntern);
              return promptMenu();
              });
        } else {
                 console.log ('test', ...teamData)
          
          const pageHTML = generatePage(teamData);
          console.log(pageHTML);
          
          fs.writeFile('./index.html', pageHTML, err => {
             if (err) throw new Error(err);
        
             console.log('Page created! Check out index.html in this directory to see it!');
           }); 
           
        }
    });
};

/*

    */

promptManager()
.then(promptMenu)
/*
.then(pageData => {


});
*/
// Write the user response to a file by chaining the below callback method to the prompt above.

/*  */
