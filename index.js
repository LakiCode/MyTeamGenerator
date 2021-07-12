const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./dist/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
  ]);
};

const promptMenu = (menuList) => {
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
        default: "done",
        validate: (teamInput) => {
          if (teamInput === engeneer) {
            console.log("you select to add new engeneer in your team");
            promptMenu();
          } else if (teamInput === intern) {
            console.log("you select to add new engeneer in your team");
            promptMenu();
          } else {
            console.log("you select to finish adding member to your team");
            return teamData;
          }
        },
      },
    ])
    .then((menuAnswer) => {
      console.log(menuAnswer);
      if (menuAnswer.teamMembers === "intern") {
        newTeamMember = new Intern(name, id, email, school);
        inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "What is the name of your project? (Required)",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("You need to enter a project name!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "email",
              message: "What is the name of your email (Required)",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("You need to enter a project name!");
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
                  console.log("You need to enter a project name!");
                  return false;
                }
              },
            },
          ])
          .then((teamData) => {
            console.log(teamData);
            return promptMenu();
          });
      }
    });
};
/*
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
      }
    */

promptManager()
.then(promptMenu);
// Write the user response to a file by chaining the below callback method to the prompt above.

/* .then(teamData => {

    const pageHTML = generatePage(teamData);

    fs.writeFile('./index.html', pageHTML, err => {
       if (err) throw new Error(err);

       console.log('Page created! Check out index.html in this directory to see it!');
     }); 
  }); */
