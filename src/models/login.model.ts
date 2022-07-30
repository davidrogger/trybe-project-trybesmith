import { Pool } from 'mysql2/promise';
import Unauthorized from '../errors/Unauthorized';
import { User, UserLogin } from '../interface/user.interface';

class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async auth(user: UserLogin): Promise<User> {
    const { username, password } = user;
    const query = `
    SELECT
      id,
      username,
      classe,
      level
    FROM Trybesmith.Users
    WHERE username=? AND password=?;
    `;
    const [result] = await this.connection.query(query, [username, password]);
    const [userFound] = result as User[];
    if (!userFound) throw new Unauthorized('Username or password invalid');
    return { ...userFound };
  }
}

export default LoginModel;