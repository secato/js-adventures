"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const piscina = new pg_1.Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'test',
});
piscina
    .query('SELECT * FROM users')
    .then(({ rows }) => {
    console.log(rows);
})
    .catch((err) => {
    console.log(err);
});
piscina.end();
