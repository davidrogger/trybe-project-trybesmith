import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import 'express-async-errors';

const loginController = new LoginController();
const loginRoute = Router();

loginRoute.post('/', loginController.auth);

export default loginRoute;