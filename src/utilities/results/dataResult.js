import Result from "./Result.js";

export default class DataResult extends Result{
    constructor(success, data, message) {
        super(success, message)
        this.data = data;
    }
}