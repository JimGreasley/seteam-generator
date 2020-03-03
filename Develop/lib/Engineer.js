// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
  //class Engineer {
    constructor(name, id, email, github) {
      super(name, id, email);
      //this.name = name;
      //this.id   = id;
      //this.email = email;
      this.github = github;
    }
//
// `getRole` method to return object's role.
//
    getRole() {
       return "Engineer";
    }
    getGithub() {
      return this.github;
  }

}

module.exports = Engineer;