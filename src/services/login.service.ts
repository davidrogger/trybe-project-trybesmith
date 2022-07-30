import { User, UserLogin } from '../interface/user.interface';
import connection from '../models/connection';
import LoginModel from '../models/login.model';

class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  async auth(user: UserLogin): Promise<User> {
    const userFound = await this.model.auth(user);
    return userFound;
  }
}

export default LoginService;