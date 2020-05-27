"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, salary, id) {
        this._name = name;
        this._salary = salary;
    }
    get name() {
        return this._name;
    }
    get salary() {
        return this._salary;
    }
}
exports.User = User;
