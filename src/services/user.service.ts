import { NewUser, User } from '../interface/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: NewUser): Promise<User> {
    const id = await this.model.create(user);
    const { password, ...data } = user;
    return { ...id, ...data } as User;
  }

  async exists(tokenData: User): Promise<void> {
    const { id } = tokenData;
    await this.model.exists(id);
  }
}

export default UserService;