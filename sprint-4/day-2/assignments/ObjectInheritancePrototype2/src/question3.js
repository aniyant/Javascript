// ## Question 3:

function Employee() {}

// const employee = new Employee("E123", "John Doe", 30, "IT");

// //properties
// console.log(employee.employeeID); // E123
// console.log(employee.name); // John Doe
// console.log(employee.age); // 30
// console.log(employee.department); // IT

// //methods
// console.log(employee.getEmployeeID()); //E123
// console.log(employee.introduce()); //Hello, my name is John Doe. I work in the IT department.
// console.log(employee.performWork()); //John Doe is performing their work duties.

function Manager() {}

// const manager = new Manager("M456", "Jane Smith", 40, "HR", 10);

// //properties
// console.log(manager.employeeID); // M456
// console.log(manager.name); // Jane Smith
// console.log(manager.age); // 40
// console.log(manager.department); // HR
// console.log(manager.teamSize); // 10

// // methods
// console.log(manager.assignTask("Project presentation", employee)); // Jane Smith assigned the task "Project presentation" to John Doe.
// console.log(manager.conductMeeting()); // Jane Smith is conducting a meeting with their team.
// console.log(manager.reviewPerformance(employee)); // Jane Smith is reviewing the performance of John Doe.

function Executive() {}

// const executive = new Executive(
//   "X789",
//   "Alice Johnson",
//   50,
//   "Finance",
//   5,
//   10000,
//   "CFO"
// );
// //properties
// console.log(executive.employeeID); //X789
// console.log(executive.name); //Alice Johnson
// console.log(executive.age); //50
// console.log(executive.department); //Finance
// console.log(executive.teamSize); //5
// console.log(executive.stockOptions); //10000
// console.log(executive.executiveLevel); //CFO

// //methods
// console.log(executive.makeStrategicDecisions()); // Alice Johnson is making strategic decisions for the organization.
// console.log(executive.approveBudget()); // Alice Johnson is approving the budget for various departments.
// console.log(executive.representCompany()); // Alice Johnson is representing the company in external meetings or events.

// don't remoove below export statement
export { Employee, Manager, Executive };
