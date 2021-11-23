import { userTypes } from "../data/userTypes.js";
import { users } from "../data/users.js";

export default class EmployeeService {
  constructor(loggerService) {
    this.employees = [];
    this.loggerService = loggerService;
  }

  list() {
   return this.employees;
  }

  load() {
    this.employees = users.filter((user)=>user.type==="Employee")
  }

  getByCustomerId(id){
    this.employees.find((employee)=>employee.id===id)
  }

  add(employee) {
    this.employees.push(employee);
    this.loggerService.log(employee);
  }

  delete(employee){
    this.employees.filter((e)=>e.id !== employee.id)
  }

}
