
import ErrorDataResult from "../../utilities/results/errorDataResult.js"
import { CUSTOMER } from "../../data/userTypes.js"


export default class CustomerValidationRules{
    constructor() {
        this.errors = []
    }

    checkCustomerValidityForErrors(customer){
        let hasError = true;
        let requiredField = "id firstName lastName age city creditCardNumber".split(" ");
        for (const field of requiredField) {
            if (!customer[field]) {
                hasError = false
                this.errors.push(new ErrorDataResult(customer, `Validation problem. ${field} is required`))
                return hasError
            }
        }

        if (customer.type !== CUSTOMER) {
            hasError = true
            this.errors.push(new ErrorDataResult(customer, "Validation problem. Check your user type"))
            return hasError
        }

        if (Number.isNaN(Number.parseFloat(+customer.age)) || customer.age.toString().length<=1) {
            hasError = true
            this.errors.push(new ErrorDataResult(customer, "Validation problem. Check your age"))
        }
        return hasError
    }
}