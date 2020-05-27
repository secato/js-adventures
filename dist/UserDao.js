"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDao = void 0;
const User_1 = require("./User");
class UserDao {
    constructor(db) {
        this.db = db;
    }
    async insert(user) {
        const result = await this.db.query(`INSERT INTO users(name, salary) VALUES ('${user.name}', '${user.salary}')`);
        return result;
    }
    async all() {
        const result = await this.db.query('SELECT * FROM users');
        return this.parseResults(result.rows);
    }
    async withSalaryGreaterThan(salary) {
        const result = await this.db.query(`SELECT * FROM users WHERE salary > ${salary}`);
        return this.parseResults(result.rows);
    }
    parseResults(rows) {
        const users = [];
        for (const user of rows) {
            users.push(new User_1.User(user.name, user.salary));
        }
        return users;
    }
}
exports.UserDao = UserDao;
