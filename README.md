# seteam-generator

The software engineering team generator...

The Manager, Engineer and Intern classes were defined as subclasses of the Employee class.
The name, id and email properties are inherited from the parent Employee class.

Inquirer is used to get the Manager's information - assumed that only one manager will be in charge of a development team.

After that any number of Engineers and Interns may be added as team members.

Once all team members have been selected the array of employees [a manager and the engineers and interns] are
provided to the render html function.

The resulting html string is written to a file in the Output folder.