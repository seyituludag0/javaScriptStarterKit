import User from "./User.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city,age, salary) {
        super(id, firstName, lastName, city,age)
        this.salary = salary
    }
}