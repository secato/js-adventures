"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./Database");
const UserDao_1 = require("./UserDao");
const User_1 = require("./User");
const db = new Database_1.Database();
db.connect('postgres', 'postgres', 'test')
    .then(() => {
    const userDao = new UserDao_1.UserDao(db);
    userDao.insert(new User_1.User('Felipe Secato', 2500));
})
    .finally(() => {
    db.close();
});
