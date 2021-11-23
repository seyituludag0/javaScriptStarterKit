
import ErrorDataResult from "../../utilities/results/errorDataResult.js"
import { EMPLOYEE } from "../../data/userTypes.js"


export default class EmployeeValidationRules{
    constructor() {
        this.errors = []
    }

    checkEmployeeValidityForErrors(employee){
        let hasError = true;
        let requiredField = "id firstName lastName age city creditCardNumber salary".split(" ");
        for (const field of requiredField) {
            if (!employee[field]) {
                hasError = false
                this.errors.push(new ErrorDataResult(employee, `Validation problem. ${field} is required`))
                return hasError
            }
        }
        
        if (employee.type !== EMPLOYEE) {
            hasError = true
            this.errors.push(new ErrorDataResult(employee, "Validation problem. Check your user type"))
            return hasError
        }

        if (Number.isNaN(Number.parseFloat(+employee.age)) || employee.age.toString().length<=1) {
            hasError = true
            this.errors.push(new ErrorDataResult(employee, "Validation problem. Check your age"))
            return hasError
        }

        if (Number.isNaN(Number.parseFloat(+employee.salary)) || employee.salary) {
            hasError = true
            this.errors.push(new ErrorDataResult(employee, "Validation problem. Check your salary"))
            return hasError
        }
        return hasError
    }
}