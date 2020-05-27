import { Database } from './Database';
import { UserDao } from './UserDao';
import { User } from './User';

const db = new Database();

db.connect('postgres', 'postgres', 'test')
    .then(() => {
        const userDao = new UserDao(db);
        userDao.insert(new User('Felipe Secato', 2500));
    })
    .finally(() => {
        db.close();
    });
