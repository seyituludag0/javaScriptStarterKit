
import { users } from "../data/users.js"
import ErrorDataResult from "../utilities/results/errorDataResult.js"


export default class UserService{
    constructor(loggerService){
        this.loggerService =loggerService
    }

    
    add(user){
        users.push(user);
        this.loggerService.log(user);
    }

    listUsers() {
        return users;
    }

    getUserById(id) {
        return users.find(user=>user.id === id)
    }

}