
import { ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import CustomerService from "../services/customerService.js";
import Customer from "../models/customer.js";
import CustomerValidationRules from "../helpers/validationRules/customerValidationRules.js";

export default class CustomerComponent {
  constructor() {
    this.logger = new ElasticLogger();
    this.customerService = new CustomerService(this.logger);
    this.customerValidationRules = new CustomerValidationRules();
  }



  addToCustomer() {
    let customerToAdd = new Customer(1, "Ezgi", "Miya", "İstanbul", 20, "39443944")
    customerToAdd.type = "Customer";
    if (this.customerValidationRules.checkCustomerValidityForErrors(customerToAdd)) {
      this.customerService.add(customerToAdd);
    }
    
  }

  
  load() {
    this.customerService.load();
  }

  list() {
    console.log(this.customerService.customers);
  }

  getCustomersSorted(){
    return this.customers.sort((customer1,customer2)=>{
        if(customer1.firstName>customer2.firstName){
            return 1;
        }else if(customer1.firstName===customer2.firstName){
            return 0;
        }else{
            return -1
        }
    })
}
 
}
