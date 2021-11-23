
import { ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import EmployeeService from "../services/employeeService.js";
import Employee from "../models/employee.js";
import EmployeeValidationRules from "../helpers/validationRules/employeeValidationRules.js";

export default class EmployeeComponent {
  constructor() {
    this.logger = new ElasticLogger();
    this.employeeService = new EmployeeService(this.logger);
    this.employeeValidationRules = new EmployeeValidationRules();
  }



  addToEmployee() {
    let employeeToAdd = new Employee(1, "Burak", "Tağıl", "İzmir", 25, "15000")
    employeeToAdd.type = "Customer";
    if (this.employeeValidationRules.checkEmployeeValidityForErrors(employeeToAdd)) {
      this.employeeService.add(employeeToAdd);
    }
    
  }

  
  load() {
    this.employeeService.load();
  }

  list() {
    console.log(this.employeeService.employees);
  }

  
  getEmployeeSorted(){
    return this.employees.sort((employee1,employee2)=>{
        if(employee1.firstName>employee2.firstName){
            return 1;
        }else if(employee1.firstName===employee2.firstName){
            return 0;
        }else{
            return -1
        }
    })
}
 
}
