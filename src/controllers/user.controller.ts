import { Request, Response } from 'express';
import JwToken from '../services/jwt.service';
import UserService from '../services/user.service';
import Validate from '../services/validation.service';

class UserController {
  validate: Validate;

  token: JwToken;

  constructor(private userService = new UserService()) {
    this.validate = new Validate();
    this.token = new JwToken();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const newUser = this.validate.userBody(req.body);
    const userCreated = await this.userService.create(newUser);
    const token = this.token.generateNew(userCreated);
    res.status(201).json({ token });
  };
}

export default UserController;