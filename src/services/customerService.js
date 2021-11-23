import { userTypes } from "../data/userTypes.js";
import { users } from "../data/users.js";

export default class CustomerService {
  constructor(loggerService) {
    this.customers = [];
    this.loggerService = loggerService;
  }

  list() {
   return this.customers;
  }

  load() {
    this.customers = users.filter((user)=>user.type==="Customer")
  }

  getByCustomerId(id){
    this.customers.find((customer)=>customer.id===id)
  }

  add(customer) {
    this.customers.push(customer);
    this.loggerService.log(customer);
  }

  delete(customer){
    this.customers.filter((c)=>c.id !== customer.id)
  }



}
