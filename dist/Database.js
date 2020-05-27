"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const pg_1 = require("pg");
let pool;
let connection;
class Database {
    async connect(user, password, database) {
        if (pool) {
            return;
        }
        pool = new pg_1.Pool({ user, password, database, idleTimeoutMillis: 10 });
        connection = await pool.connect();
    }
    async close() {
        await connection.release();
        await pool.end();
    }
    async query(query) {
        return pool.query(query);
    }
}
exports.Database = Database;
