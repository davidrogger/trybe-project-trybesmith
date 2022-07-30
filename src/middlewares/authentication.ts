import { NextFunction, Request, Response } from 'express';
import Unauthorized from '../errors/Unauthorized';
import JwToken from '../services/jwt.service';
import UserService from '../services/user.service';

const jwtHandler = new JwToken();
const userService = new UserService();

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { authorization } = req.headers;
  if (!authorization) throw new Unauthorized('Token not found');
  const userData = jwtHandler.verifyData(authorization);
  await userService.exists(userData);
  // Criando uma sessão do usuário salvando as informações na resposta = https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node
  res.locals.user = userData;
  next();
};
