import { Database } from '../../src/Database';
import { UserDao } from '../../src/UserDao';
import { User } from '../../src/User';

let db = new Database();
let userDao: UserDao;

describe('UserDao module', () => {
  beforeAll(async () => {
    await db.connect('postgres', 'postgres', 'test');
    userDao = new UserDao(db);
  });

  beforeEach(async () => {
    await db.query('truncate users');
  });

  test('Save', async () => {
    const secatinho = new User('Secato', 1200);
    await userDao.insert(secatinho);

    const all = await userDao.all();
    expect(all).toContainEqual(secatinho);
  });

  test('Get only with salary greater than 3000', async () => {
    const lulu = new User('Lulu', 3501);
    const bigode = new User('Bigode', 3500);
    const felipe = new User('Felipe', 3498);

    await userDao.insert(lulu);
    await userDao.insert(felipe);
    await userDao.insert(bigode);

    const result = await userDao.withSalaryGreaterThan(3500);

    expect(result).toContainEqual(lulu);
  });

  afterAll(async () => {
    await db.query('truncate users');
    await db.close();
  });
});
