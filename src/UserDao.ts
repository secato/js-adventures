import { Database } from './Database';
import { User } from './User';

export class UserDao {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async insert(user: User) {
        const result = await this.db.query(
            `INSERT INTO users(name, salary) VALUES ('${user.name}', '${user.salary}')`,
        );
        return result;
    }

    async all() {
        const result = await this.db.query('SELECT * FROM users');

        return this.parseResults(result.rows);
    }

    async withSalaryGreaterThan(salary: number) {
        const result = await this.db.query(`SELECT * FROM users WHERE salary > ${salary}`);
        return this.parseResults(result.rows);
    }

    private parseResults(rows: any[]) {
        const users = [];
        for (const user of rows) {
            users.push(new User(user.name, user.salary));
        }

        return users;
    }
}
