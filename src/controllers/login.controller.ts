import { Request, Response } from 'express';
import JwToken from '../services/jwt.service';
import LoginService from '../services/login.service';
import Validate from '../services/validation.service';

class LoginController {
  validate: Validate;

  token: JwToken;

  constructor(private loginService = new LoginService()) {
    this.validate = new Validate();
    this.token = new JwToken();
  }

  auth = async (req: Request, res: Response): Promise<void> => {
    const userLogin = this.validate.userLoginBody(req.body);
    const userFound = await this.loginService.auth(userLogin);
    const token = this.token.generateNew(userFound);
    res.status(200).json({ token });
  };
}

export default LoginController;
