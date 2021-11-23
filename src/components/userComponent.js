import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import Customer from "../models/customer.js"
import CustomerComponent from "./customerComponent.js"
import EmployeeComponent from "./EmployeeComponent.js"



let logger1 = new MongoLogger()
let userService = new UserService(logger1)



// let user1 = new User(1,"Engin","Demiroğ","Ankara")
// userService.add(user1)
// userService.add(user2)





// let customer = {id:1, firstName:"Seyit"}

//prototyping
// customer.lastName = "Seyit"

// console.log(customer.lastName)

// userService.load()
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)
// console.log(userService.getCsustomersSorted())



let customerComponent = new CustomerComponent();
customerComponent.addToCustomer()
console.log('==============CUSTOMER================');
customerComponent.load();
customerComponent.list();
console.log('==============CUSTOMER================');

console.log(" ")

let employeeComponent = new EmployeeComponent();
console.log('==============EMPLOYEE================');
employeeComponent.load();
employeeComponent.addToEmployee()
employeeComponent.list();
console.log('==============EMPLOYEE================');


