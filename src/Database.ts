import { Pool, PoolClient } from 'pg';

let pool: Pool;
let connection: PoolClient;

export class Database {
    async connect(user: string, password: string, database: string) {
        if (pool) {
            return;
        }

        pool = new Pool({ user, password, database, idleTimeoutMillis: 10 });
        connection = await pool.connect();
    }

    async close() {
        await connection.release();
        await pool.end();
    }

    async query(query: string) {
        return pool.query(query);
    }
}
