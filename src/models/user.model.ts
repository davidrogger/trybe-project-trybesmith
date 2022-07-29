import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Index, NewUser } from '../interface/user.interface';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: NewUser): Promise<Index> {
    const { username, classe, level, password } = user;
    const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);
    `;
    const [{ insertId }] = await this.connection
      .query<ResultSetHeader>(query, [username, classe, level, password]);

    return { id: insertId };
  }
}

export default UserModel;