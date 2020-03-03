const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
// for the provided `render` function to work!```

var managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your employee id?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
  }
];

var engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the engineer's employee id?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the engineer's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the engineer's github username?",
    name: "github"
  }
];

var internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the intern's employee id?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the name of the intern's school?",
    name: "school"
  }
];


var teamMemberSelect = {
  type: 'list',
  name: 'teamMemberType',
  message: 'Which type of team member would you like to add next?',
  choices: ['Engineer', 'Intern', 'No more, team is complete']
};


// create empty array to hold all team member objects 
var teamMembers = [];

//  var html = render(
//    [new Manager("Jim", 234, "jim@abc.com", 432),
//     new Engineer("Jill", 567, "jill@abc.com", "jillsmith"),
//     new Intern("Billy", 432, "billy@abc.com", "UCLA")
//    ]);
// console.log(html);



function main() {

  // get manager info first
  inquirer.prompt(managerQuestions).then(function (mresp) {
    //console.log(mresp);

    // create Manager object
    const manager = new Manager(mresp.name, mresp.id, mresp.email, mresp.officeNumber);
    //console.log(manager);

    //save Manager in team member array
    teamMembers.push(manager);

    // build the rest of the team
    buildTeam();

  });
}


function buildTeam() {

  //let moreTeamMembers = false;

  // determine what type of team member to add to team
  inquirer.prompt(teamMemberSelect).then(function (selection) {

    if (selection.teamMemberType === 'Engineer') {
      // add an Engineer
      inquirer.prompt(engineerQuestions).then(function (eresp) {
        //console.log(eresp);
        const engineer = new Engineer(eresp.name, eresp.id, eresp.email, eresp.github);
        //console.log(engineer);
        teamMembers.push(engineer);
        buildTeam();
      });
    }
    else
      if (selection.teamMemberType === 'Intern') {
        // add an Interm
        inquirer.prompt(internQuestions).then(function (iresp) {
          //console.log(iresp);
          const intern = new Intern(iresp.name, iresp.id, iresp.email, iresp.school);
          //console.log(intern);
          teamMembers.push(intern);
          buildTeam();
        });
      }
      else {
          //console.log(teamMembers);
          var html = render(teamMembers);
          //console.log(html)
          fs.writeFile(outputPath, html, function(err) {
            if (err) {
              return console.log(err);
            }
          });
      }

  });

}

main();
