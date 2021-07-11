class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.emailaddress = email;
  }
  getName() {
    return this.name;
  }
  getId() {
      return this.id;
  }
  getEmail() {
      return this.email;
  }
getRole() {
    return 'Employee';
}
}
// export class
export default Employee;
