// TODO: Write code to define and export the Employee class


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id   = id;
        this.email = email;
    }
//
// `getName` method to return object's name.
//
    getName() {
        return this.name;
    }
//
// `getId` method to return object's id.
//
    getId() {
        return this.id;
    }
//
// `getEmail` method to return object's email.
//
    getEmail() {
        return this.email;
    }
//
// `getRole` method to return object's role.
//
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;